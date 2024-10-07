import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        The AI Mock Interview platform is designed to help job seekers prepare for interviews 
        through advanced technology. Our mission is to bridge the gap between employers and 
        candidates by providing a realistic and supportive environment for interview preparation.
      </p>
      <h3 className="text-2xl font-semibold mb-2">Our Process:</h3>
      <p className="mb-4">
        Users can start a simulated interview by entering their details and receiving tailored questions 
        based on their desired job role. Our system analyzes user responses to provide valuable feedback.
      </p>
    </div>
  );
};

export default About;
