import React, { useState } from "react";

function EmailPlan() {
  const [headline, setHeadline] = useState("");
  const [subhead, setSubhead] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const platforms = ["Facebook", "Instagram", "Twitter", "LinkedIn", "Other"];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        setHeadline("");
        setSubhead("");
        setFile(null);
        event.target.reset(); 
      } else {
        alert("Success!");
      }
    } catch (error) {
      alert("Submission failed. Please check your internet connection.");
    }
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
            Content Request Form
          </h1>
        </header>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            <strong>Success!</strong> Your form has been submitted.
          </div>
        )}

        <hr className="mb-8" />


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Author</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <label className="mt-2 text-sm text-gray-600">First Name</label>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <label className="mt-2 text-sm text-gray-600">Last Name</label>
            </div>
          </div>
        </section>

        <hr className="mb-8" />


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Date</p>
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </section>

        <hr className="mb-8" />


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Category</p>
          <select
            name="category"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Please Select</option>
            <option value="Editor's Picks">Editor's Picks</option>
            <option value="Healthy Life">Healthy Life</option>
            <option value="Best Places to Visit">Best Places to Visit</option>
            <option value="Best Recipes">Best Recipes</option>
            <option value="Where to Eat">Where To Eat</option>
          </select>
        </section>


        <section className="mb-8">
          <label htmlFor="headline" className="font-serif text-lg text-gray-800 mb-2 block">
            Headline
          </label>
          <textarea
            id="headline"
            name="headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter headline"
          />
        </section>


        <section className="mb-8">
          <label htmlFor="subhead" className="font-serif text-lg text-gray-800 mb-2 block">
            Sub-head
          </label>
          <textarea
            id="subhead"
            name="subhead"
            value={subhead}
            onChange={(e) => setSubhead(e.target.value)}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter sub-head"
          />
        </section>


        <section className="mb-8">
          <label htmlFor="fileInput" className="font-serif text-lg text-gray-800 mb-2 block">
            Header Image
          </label>
          <input
            type="file"
            name="header_image"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            id="fileInput"
          />
        </section>


        <section className="mb-8">
          <h2 className="font-serif font-bold text-lg text-gray-800 mb-4">Social Channels</h2>
          <p className="font-serif text-gray-800 mb-4">The content will be shared on:</p>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform} className="flex items-center">
                <input
                  type="checkbox"
                  name="social_channels[]"
                  value={platform}
                  id={platform}
                  className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                />
                <label htmlFor={platform} className="ml-2 text-gray-700">
                  {platform}
                </label>
              </div>
            ))}
          </div>
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
