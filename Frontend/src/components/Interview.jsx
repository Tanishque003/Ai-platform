import React, { useState } from 'react';

const Interview = () => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // Basic validation
    if (!name || !jobTitle) {
      setError('Please enter both your name and job title.');
      return;
    }

    // Reset error
    setError('');

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, jobTitle }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Handle the received data (e.g., redirect to a new page or update state)
      console.log('Interview data:', data);
      // Redirect to the interview question page or start the interview
    } catch (error) {
      console.error('Error starting interview:', error);
      setError('Failed to start the interview. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Start Your Interview</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Title:</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Start Interview
        </button>
      </form>
    </div>
  );
};

export default Interview;
