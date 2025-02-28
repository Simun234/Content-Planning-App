import React, { useState } from "react";

function ContentRequest() {
  const [formData, setFormData] = useState({
    headline: "",
    subhead: "",
    file: null,
    date: "",
    category: "",
    socialChannels: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const platforms = ["Facebook", "Instagram", "Twitter", "LinkedIn", "Other"];

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

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
      headline: "",
      subhead: "",
      file: null,
      date: "",
      category: "",
      socialChannels: [],
    });
  };

  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-3xl bg-[#F4F4F4] p-6 rounded-lg shadow-md"
      >
        <header className="flex justify-center mb-8">
          <h1 className="font-serif font-bold text-xl text-gray-800">Content Request Form</h1>
        </header>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            <strong>Success!</strong> Your form has been submitted.
          </div>
        )}

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Headline</label>
          <textarea
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter headline"
          />
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Sub-head</label>
          <textarea
            name="subhead"
            value={formData.subhead}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter sub-head"
          />
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Please Select</option>
            <option value="Editor's Picks">Editor's Picks</option>
            <option value="Healthy Life">Healthy Life</option>
            <option value="Best Places to Visit">Best Places to Visit</option>
          </select>
        </section>

        <section className="mb-8">
          <label className="font-serif text-lg text-gray-800 mb-4">Social Channels</label>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform} className="flex items-center">
                <input
                  type="checkbox"
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
          <label className="font-serif text-lg text-gray-800 mb-4">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </section>

        <section className="mb-8">
          <label htmlFor="fileInput" className="font-serif text-lg text-gray-800 mb-4">Header Image</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
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

export default ContentRequest;
