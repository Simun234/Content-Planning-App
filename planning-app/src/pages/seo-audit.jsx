import React, { useState } from "react";

const SeoForm = () => {
  const [formData, setFormData] = useState({
    month: "",
    channel: "",
    totalPosts: "",
    followersBefore: "",
    followersAfter: "",
    engagement: "",
    bioLinkClicks: "",
    storyViews: "",
    videoViews: "",
    impressions: "",
    shares: "",
    conversions: "",
    clicks: "",
    likes: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="flex justify-center text-2xl font-bold mb-6">
        Social Media Insights Form
      </h2>
      <hr className="mb-8" />

      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Thank You!</h3>
          <p>Your submission has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                Month
              </label>
              <select
                name="month"
                id="month"
                value={formData.month}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option>Please Select</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>


            <div>
              <label htmlFor="channel" className="block text-sm font-medium text-gray-700">
                Channel
              </label>
              <select
                name="channel"
                id="channel"
                value={formData.channel}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option>Please Select</option>
                {["Instagram", "Facebook", "Twitter", "Linkedin", "Bing", "Youtube", "Pinterest"].map((channel) => (
                  <option key={channel} value={channel}>
                    {channel}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Total Number of Posts", name: "totalPosts" },
              { label: "Followers Before", name: "followersBefore" },
              { label: "Followers After", name: "followersAfter" },
              { label: "Engagement", name: "engagement" },
              { label: "Bio Link Clicks", name: "bioLinkClicks" },
              { label: "Story Views", name: "storyViews" },
              { label: "Video Views", name: "videoViews" },
              { label: "Impressions", name: "impressions" },
              { label: "Shares", name: "shares" },
              { label: "Conversions", name: "conversions" },
              { label: "Clicks", name: "clicks" },
              { label: "Likes", name: "likes" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type="number"
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="ex: 23"
                />
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Optional comments..."
              />
            </div>
          </div>

          <hr className="mb-8" />


          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SeoForm;
