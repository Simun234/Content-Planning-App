import React, { useState } from "react";

function EmailPlan() {
  const [headline, setHeadline] = useState("");
  const [subhead, setSubhead] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);


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
                type="text"
                name="e-mail"

                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div className="flex flex-col">

              <input
                type="text"
                placeholder="Enter Target"
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              />

            </div>
          </div>
        </section>



        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Date</p>
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </section>



        <section className="mb-8">
          <p className="font-serif text-lg text-gray-800 mb-4">Type</p>
          <select
            name="category"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
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
            name="category"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Please Select</option>
            <option value="planned">Planned</option>
            <option value="send">Send</option>
            <option value="ready">Ready to send</option>
            <option value="in-progress">In Progress</option>
            <option value="waiting">Waiting to be send</option>
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
          />
        </section>


        <section className="mb-8">
          <label htmlFor="subhead" className="font-serif text-lg text-gray-800 mb-2 block">
            Content
          </label>
          <textarea
            id="subhead"
            name="subhead"
            value={subhead}
            onChange={(e) => setSubhead(e.target.value)}
            rows="2"
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </section>


        <section className="mb-8">
          <label htmlFor="fileInput" className="font-serif text-lg text-gray-800 mb-2 block">
            Images
          </label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
            id="fileInput"
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
