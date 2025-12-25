import { useState, useEffect } from "react";
import { Send, Phone, MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdrakibislam7018@gmail.com",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801580673809",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chittagong, Bangladesh",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      iconColor: "text-pink-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rak9b",
      link: "https://github.com/rak9b",
      color: "from-gray-500 to-gray-400",
      bgColor: "bg-gray-500/10",
      iconColor: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/md-rakibul-islam007",
      link: "https://linkedin.com/in/md-rakibul-islam007",
      color: "from-blue-600 to-indigo-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400"
    }
  ];

  const Particle = () => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
      setStyles({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      });
    }, []);

    return (
      <div
        className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-float"
        style={styles}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Get In Touch
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            &quot;Let&apos;s collaborate and build something amazing together&quot;
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-gray-800/50">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className={`${info.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${info.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{info.label}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-400 hover:bg-gradient-to-r hover:${info.color} hover:bg-clip-text hover:text-transparent transition-all duration-300`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional info */}
              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-blue-400">Currently Available</span> for freelance projects and full-time opportunities in Full Stack Development and Cybersecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-gray-800/50">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.subject ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-400`}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-400`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <div
                className={`mt-4 text-center p-3 rounded-lg ${status.includes("success")
                  ? "text-green-400 bg-green-500/10 border border-green-500/20"
                  : status.includes("Sending")
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                    : "text-red-400 bg-red-500/10 border border-red-500/20"
                  }`}
              >
                <p>{status}</p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
}