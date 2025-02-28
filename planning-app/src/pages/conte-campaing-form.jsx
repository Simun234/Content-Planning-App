import React, { useState } from "react";

function ContentForm() {
  const [formData, setFormData] = useState({
    postTitle: "",
    contentType: "",
    socialChannels: [],
    publishDate: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const platforms = ["Instagram", "Twitter", "Facebook", "LinkedIn"];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => {
      let socialChannels = [...prev.socialChannels];
      if (checked) {
        socialChannels.push(value);
      } else {
        socialChannels = socialChannels.filter((item) => item !== value);
      }
      return { ...prev, socialChannels };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);  

    setShowSuccess(true); 
    setFormData({
      postTitle: "",
      contentType: "",
      socialChannels: [],
      publishDate: "",
    });
  };

  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-3xl bg-[#F4F4F4] p-6 rounded-lg shadow-md"
      >
        <header className="flex justify-center mb-8">
          <h1 className="font-serif font-bold text-xl text-gray-800">Content Campaign Form</h1>
        </header>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            <strong>Success!</strong> Your form has been submitted.
          </div>
        )}

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Post Title</label>
          <input
            type="text"
            name="postTitle"
            value={formData.postTitle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter post title"
          />
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Content Type</label>
          <select
            name="contentType"
            value={formData.contentType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Please Select</option>
            <option value="fashion">Fashion</option>
            <option value="beauty">Beauty</option>
            <option value="technology">Technology</option>
          </select>
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Social Media Channels</label>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform} className="flex items-center">
                <input
                  type="checkbox"
                  name="social_channels[]"
                  value={platform}
                  checked={formData.socialChannels.includes(platform)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                />
                <label htmlFor={platform} className="ml-2 text-gray-700">{platform}</label>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Publish Date</label>
          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </section>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-lime-500 text-white font-bold py-2 px-6 rounded hover:bg-lime-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContentForm;
