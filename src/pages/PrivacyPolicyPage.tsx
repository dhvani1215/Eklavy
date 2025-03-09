
import React from 'react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <AnimatedElement animation="fade-in" className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#123C69] mb-4">Privacy Policy</h1>
          <div className="h-1 w-20 bg-[#AC3B61] mb-8"></div>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in" delay={100} className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Introduction</h2>
                <p className="text-gray-700">
                  At Eklavy, we respect your privacy and are committed to protecting your personal data. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website and use our language learning services.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                  please do not access the site or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Information We Collect</h2>
                <p className="text-gray-700">We may collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and other personal details you provide when registering or using our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, services, and content.</li>
                  <li><strong>Learning Progress:</strong> Data about your learning activities, progress, strengths, and areas for improvement.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">How We Use Your Information</h2>
                <p className="text-gray-700">We may use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your learning experience</li>
                  <li>Process transactions and manage your account</li>
                  <li>Send administrative information and updates</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Sharing Your Information</h2>
                <p className="text-gray-700">
                  We may share your personal information with third parties only in the ways described in this Privacy Policy.
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                </p>
                <p className="text-gray-700">
                  We may disclose your information to service providers who perform services on our behalf, comply with legal
                  obligations, or protect our rights and safety.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Data Security</h2>
                <p className="text-gray-700">
                  We implement reasonable security measures to protect your personal information from unauthorized access, 
                  disclosure, alteration, and destruction. However, no Internet or email transmission is ever fully secure or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Your Privacy Rights</h2>
                <p className="text-gray-700">
                  Depending on your location, you may have rights regarding your personal information, such as the right to 
                  access, correct, delete, or restrict processing of your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date at the top.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#123C69]">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-2 text-gray-700">
                  <p>Email: privacy@eklavy.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
