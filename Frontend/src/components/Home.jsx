import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to the AI Mock Interview Platform</h2>
      <p className="mb-4">
        Our platform offers realistic interview simulations powered by AI. 
        Prepare for your next job interview with confidence!
      </p>
      <h3 className="text-2xl font-semibold mb-2">Benefits:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Personalized feedback</li>
        <li>Real-time emotion detection</li>
        <li>Comprehensive performance analysis</li>
        <li>Access to a variety of job roles</li>
      </ul>
      <p>
        Get ready to ace your interview and land your dream job with our platform!
      </p>
    </div>
  );
};

export default Home;
