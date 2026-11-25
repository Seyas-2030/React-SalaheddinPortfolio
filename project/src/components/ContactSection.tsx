import { AlertCircle, CheckCircle, Linkedin, Mail, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );

      window.location.href = `mailto:salahsalman200210@gmail.com?subject=${subject}&body=${body}`;

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-700 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of the following channels.
                I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-blue-500 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href="mailto:salahsalman200210@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    salahsalman200210@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-blue-500 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+962789472005</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-blue-500 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/salaheddin-salman-3528b235b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B4iTGv%2FSSfydcoxwf97PUw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Connect with me (click here)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-blue-500 rounded-full">
                  <svg height="24" width="24" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82a7.59 7.59 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a
                    href="https://github.com/Seyas-2030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    View my repositories
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries,
                please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">Message prepared! Your email client should open shortly.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-red-400">There was an error. Please try again or contact me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 disabled:from-gray-500 disabled:to-gray-600 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
