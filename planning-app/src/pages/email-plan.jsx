import React, { useState } from "react";

function EmailPlan() {
  const [formData, setFormData] = useState({
    email: "",
    target: "",
    date: "",
    category: "",
    status: "",
    headline: "",
    subhead: "",
    file: null,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowSuccess(true); 

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });
    } catch (error) {
      console.error("Submission error:", error);
    }

    setFormData({
      email: "",
      target: "",
      date: "",
      category: "",
      status: "",
      headline: "",
      subhead: "",
      file: null,
    });
    e.target.reset();
  };

  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-3xl bg-[#F4F4F4] p-6 rounded-lg shadow-md"
        encType="multipart/form-data"
      >
        <header className="flex justify-center mb-8">
          <h1 className="font-serif font-bold text-xl text-gray-800">
            Email Campaign Plan Form
          </h1>
        </header>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            <strong>Success!</strong> Your form has been submitted.
          </div>
        )}

        <hr className="mb-8" />

        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">E-Mail</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="target"
                value={formData.target}
                onChange={handleChange}
                placeholder="Enter Target"
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Date</p>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
        </section>

        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Type</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          >
            <option value="">Please Select</option>
            <option value="promo">Promo</option>
            <option value="newsletter">Newsletter</option>
            <option value="survey">Survey</option>
            <option value="reminder">Reminder</option>
            <option value="webinar">Webinar</option>
          </select>
        </section>

        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Status</p>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          >
            <option value="">Please Select</option>
            <option value="planned">Planned</option>
            <option value="send">Send</option>
            <option value="ready">Ready to send</option>
            <option value="in-progress">In Progress</option>
            <option value="waiting">Waiting to be sent</option>
          </select>
        </section>

        <section className="mb-8">
          <label htmlFor="headline" className="font-serif text-lg text-gray-800 mb-2 block">
            Headline
          </label>
          <textarea
            id="headline"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your headline"
            required
          />
        </section>

        <section className="mb-8">
          <label htmlFor="subhead" className="font-serif text-lg text-gray-800 mb-2 block">
            Content
          </label>
          <textarea
            id="subhead"
            name="subhead"
            value={formData.subhead}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your content"
            required
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

export default EmailPlan;
