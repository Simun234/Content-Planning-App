import React, { useState } from "react";

function ContentForm() {
  const [headline, setHeadline] = useState("");
  const [subhead, setSubhead] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const platforms = [ "Instagram", "Twitter", "Facebook", "LinkedIn"];

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
            Content Campaing Form
          </h1>
        </header>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
            <strong>Success!</strong> Your form has been submitted.
          </div>
        )}

        <hr className="mb-8" />


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Post Title</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
          </div>
        </section>


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Content Type</p>
          <select
            name="category"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Please Select</option>
            <option value="fashion">Fashion</option>
            <option value="beauty">Beauty</option>
            <option value="technology">Technology</option>
            <option value="contest">Contest</option>
            <option value="holiday">Holiday</option>
          </select>
        </section>


       
        <section className="mb-8">
          <h2 className="font-serif font-bold text-lg text-gray-800 mb-4">Social Media Channels</h2>
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


        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4"> Publish Date</p>
          <input
            type="date"
            name="date"
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
