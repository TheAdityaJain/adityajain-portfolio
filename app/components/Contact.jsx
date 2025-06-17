// Contact Section Component
'use client';

import { useState } from 'react';
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      
      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      }
      
      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitStatus('');

      // Validate form before submission
      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch('https://formspree.io/f/xjkrokza', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        } else {
          // Handle specific HTTP errors
          if (response.status === 422) {
            setSubmitStatus('validation_error');
          } else if (response.status >= 500) {
            setSubmitStatus('server_error');
          } else {
            setSubmitStatus('error');
          }
        }
      } catch (error) {
        console.error('Network error:', error);
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          setSubmitStatus('network_error');
        } else {
          setSubmitStatus('error');
        }
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400">✓ Thank you for your message! I'll get back to you soon.</p>
                </div>
              )}

              {/* Error Messages */}
              {submitStatus === 'validation_error' && (
                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-yellow-400">⚠ Please check your form data and try again.</p>
                </div>
              )}

              {submitStatus === 'server_error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400">⚠ Server is temporarily unavailable. Please try again later or contact me directly at jain.aditya1020@gmail.com</p>
                </div>
              )}

              {submitStatus === 'network_error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400">⚠ Network connection error. Please check your internet connection and try again.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400">⚠ Something went wrong. Please try again or contact me directly at jain.aditya1020@gmail.com</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-colors disabled:opacity-50 ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500/70' 
                        : 'border-white/20 focus:border-white/30'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-colors disabled:opacity-50 ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500/70' 
                        : 'border-white/20 focus:border-white/30'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-colors resize-none disabled:opacity-50 ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500/70' 
                        : 'border-white/20 focus:border-white/30'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-3 px-6 rounded-xl font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
  
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
                </p>
              </div>
  
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-400">
                      <a href="mailto:jain.aditya1020@gmail.com" className="hover:text-white transition-colors">
                        jain.aditya1020@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-white">GitHub</div>
                    <div className="text-gray-400">
                      <a href="https://github.com/TheAdityaJain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        github.com/TheAdityaJain
                      </a>
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-white">LinkedIn</div>
                    <div className="text-gray-400">
                      <a href="https://www.linkedin.com/in/TheAdityaJain2010/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        linkedin.com/in/TheAdityaJain2010
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="pt-6">
                <p className="text-sm text-gray-500">
                  Average response time: 1-2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;