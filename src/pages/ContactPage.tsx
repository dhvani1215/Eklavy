
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';

const ContactPage = () => {
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-7xl">
        <AnimatedElement animation="fade-in" className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#123C69] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation="slide-up" delay={100}>
            <div className="eklavy-card relative z-10 h-full">
              <h3 className="text-xl font-semibold text-[#123C69] mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="eklavy-button flex items-center gap-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#123C69] mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help. Feel free to reach out through any of the channels below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">support@eklavy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">123 Language St, Learning City, 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="eklavy-card">
                <h3 className="text-xl font-semibold text-[#123C69] mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {[
                    { 
                      q: 'How much does Eklavy cost?', 
                      a: 'Eklavy offers a free basic tier with limited lessons. Premium plans start at $9.99/month with unlimited access to all languages and features.' 
                    },
                    { 
                      q: 'Can I learn multiple languages at once?', 
                      a: 'Yes! You can learn as many languages as you want simultaneously. Our recommendation is to focus on 1-2 at a time for the best results.' 
                    },
                    { 
                      q: 'How long will it take to become fluent?', 
                      a: 'Fluency depends on many factors, including practice frequency and prior language experience. Most users see significant progress within 3-6 months of consistent practice.' 
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <h4 className="font-medium text-[#123C69] flex items-center gap-2">
                          <MessageSquare size={16} />
                          <span>{faq.q}</span>
                        </h4>
                        <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-right">
                  <a href="#" className="text-[#123C69] hover:underline text-sm font-medium">
                    View all FAQs →
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
