'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

// Dynamic import of ReactQuill with ssr disabled to avoid React 18 findDOMNode error
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <div className="h-64 bg-gray-100 rounded animate-pulse" />
});

const Editor = ({ value, onChange, className = '' }: EditorProps) => {
    // Memoize quill modules to prevent re-creation
    const modules = useMemo(() => ({
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    }), []);

    return (
        <div className={className}>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
            />
        </div>
    );
};

export default Editor;
