import React, { useState } from 'react';

const ContentAuditForm = () => {
  const [formData, setFormData] = useState({
    writerDesignerCompanyName: '',
    suggestedTopicArtwork: '',
    keyword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Content Audit Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label
            htmlFor="writerDesignerCompanyName"
            className="block text-sm font-medium text-gray-700"
          >
            Writer/Designer/Company Name
          </label>
          <input
            type="text"
            id="writerDesignerCompanyName"
            name="writerDesignerCompanyName"
            value={formData.writerDesignerCompanyName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="suggestedTopicArtwork"
            className="block text-sm font-medium text-gray-700"
          >
            Suggested Topic/Artwork
          </label>
          <input
            type="text"
            id="suggestedTopicArtwork"
            name="suggestedTopicArtwork"
            value={formData.suggestedTopicArtwork}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
            Keyword
          </label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContentAuditForm;
