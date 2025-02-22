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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
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
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Twitter</option>
                <option>Linkedin</option>
                <option>Bing</option>
                <option>Youtube</option>
                <option>Pinterest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="totalPosts" className="block text-sm font-medium text-gray-700">
                Total Number of Posts
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="totalPosts"
                id="totalPosts"
                value={formData.totalPosts}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="followersBefore" className="block text-sm font-medium text-gray-700">
                Followers | Before
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="followersBefore"
                id="followersBefore"
                value={formData.followersBefore}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="followersAfter" className="block text-sm font-medium text-gray-700">
                Followers | After
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="followersAfter"
                id="followersAfter"
                value={formData.followersAfter}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="engagement" className="block text-sm font-medium text-gray-700">
                Engagement
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="engagement"
                id="engagement"
                value={formData.engagement}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="bioLinkClicks" className="block text-sm font-medium text-gray-700">
                Bio Link Clicks
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="bioLinkClicks"
                id="bioLinkClicks"
                value={formData.bioLinkClicks}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="storyViews" className="block text-sm font-medium text-gray-700">
                Story Views
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="storyViews"
                id="storyViews"
                value={formData.storyViews}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="videoViews" className="block text-sm font-medium text-gray-700">
                Video Views
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="videoViews"
                id="videoViews"
                value={formData.videoViews}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="impressions" className="block text-sm font-medium text-gray-700">
                Impressions
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="impressions"
                id="impressions"
                value={formData.impressions}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="shares" className="block text-sm font-medium text-gray-700">
                Shares
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="shares"
                id="shares"
                value={formData.shares}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="conversions" className="block text-sm font-medium text-gray-700">
                Conversions
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="conversions"
                id="conversions"
                value={formData.conversions}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="clicks" className="block text-sm font-medium text-gray-700">
                Clicks
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="clicks"
                id="clicks"
                value={formData.clicks}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="likes" className="block text-sm font-medium text-gray-700">
                Likes
              </label>
              <input
                type="number"
                placeholder="ex:23"
                name="likes"
                id="likes"
                value={formData.likes}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                Comments
              </label>
              <textarea
                name="comments"
                placeholder="ex:23"
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
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
