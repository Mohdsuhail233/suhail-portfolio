
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://84.32.84.32:9090/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Inquiry</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Have a project in mind? Let's build something amazing together. Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-medium">iammohdsuhail7@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-white font-medium"> New Delhi (Remote)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Message Sent!</h4>
                <p className="text-gray-400 mb-8">Thanks for reaching out. Mohd suhail will be in touch soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Your Good Name"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="suhail@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold rounded-2xl flex items-center justify-center transition-all group"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
