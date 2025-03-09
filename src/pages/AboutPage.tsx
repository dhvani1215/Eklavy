
import React from 'react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <AnimatedElement animation="fade-in" className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#123C69] mb-4">About Eklavy</h1>
          <div className="h-1 w-20 bg-[#AC3B61] mb-8"></div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation="slide-up" delay={100} className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#123C69]">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2023, Eklavy was born from a simple idea: language learning should be accessible, 
              engaging, and effective for everyone. Our team of linguists, educators, and developers came 
              together with a shared vision to create a platform that breaks down the barriers of 
              traditional language education.
            </p>
            <p className="text-gray-700">
              The name "Eklavy" draws inspiration from the ancient scholar Eklavya, whose determination 
              and self-motivation exemplify the learning spirit we aim to foster in our community.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#123C69] pt-4">Our Mission</h2>
            <p className="text-gray-700">
              At Eklavy, our mission is to empower people worldwide to connect across languages and cultures. 
              We believe that language learning is not just about memorizing vocabulary and grammar rules—it's 
              about opening doors to new cultures, perspectives, and opportunities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={300} className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#123C69]">Our Approach</h2>
            <p className="text-gray-700">
              We combine cognitive science principles with gamification elements to create a learning 
              experience that keeps you motivated and makes knowledge stick. Our bite-sized lessons 
              are designed to fit into your daily routine, making consistent practice easy and enjoyable.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#123C69] pt-4">Our Values</h2>
            <ul className="space-y-4 text-gray-700 list-disc pl-5">
              <li><span className="font-semibold">Accessibility:</span> We're committed to making language learning available to everyone, regardless of background or resources.</li>
              <li><span className="font-semibold">Innovation:</span> We continuously explore new teaching methods and technologies to enhance the learning experience.</li>
              <li><span className="font-semibold">Community:</span> We foster a supportive community where learners can connect, practice, and grow together.</li>
              <li><span className="font-semibold">Cultural Respect:</span> We approach each language with deep respect for its cultural context and nuances.</li>
            </ul>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fade-in" delay={500} className="mt-16 bg-[#EEE2DC] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#123C69] mb-4">Join Us on This Journey</h2>
          <p className="text-gray-700">
            Whether you're learning a language for travel, career advancement, or personal enrichment, 
            Eklavy is here to support you every step of the way. Our growing community of learners spans 
            the globe, united by curiosity and the desire to connect across linguistic boundaries.
          </p>
          <p className="text-gray-700 mt-4">
            Thank you for being part of our story. We can't wait to be part of yours.
          </p>
        </AnimatedElement>
      </div>
    </Layout>
  );
};

export default AboutPage;
