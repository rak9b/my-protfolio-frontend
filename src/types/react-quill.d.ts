import React from 'react';

declare module 'react-quill' {
    export interface ReactQuillProps {
        theme?: string;
        value?: string;
        onChange?: (content: string) => void;
        className?: string;
        placeholder?: string;
        modules?: Record<string, unknown>;
        formats?: string[];
        children?: React.ReactNode;
    }
    const ReactQuill: React.ComponentType<ReactQuillProps>;
    export default ReactQuill;
}
