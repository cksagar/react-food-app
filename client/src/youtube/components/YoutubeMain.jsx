const YoutubeMain = () => {
  const dummyVideos = new Array(8).fill(0).map((_, index) => ({
    id: index,
    thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    title: `Sample Video Title ${index + 1}`,
    channel: "Channel Name",
    views: "1M views",
    time: "2 days ago",
  }));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 md:w-60 bg-white p-4 shadow-md">
        <div className="flex flex-col space-y-6 text-sm">
          <button className="hover:bg-gray-200 rounded p-2 text-center">
            🏠 Home
          </button>
          <button className="hover:bg-gray-200 rounded p-2 text-center">
            🔥 Shorts
          </button>
          <button className="hover:bg-gray-200 rounded p-2 text-center">
            📺 Subscriptions
          </button>
          <button className="hover:bg-gray-200 rounded p-2 text-center">
            📚 Library
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <div className="sticky top-0 bg-white p-4 shadow flex justify-between items-center z-10">
          <div className="text-xl font-bold text-red-600">YouTube</div>
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring"
            />
          </div>
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Video Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded shadow hover:shadow-md transition"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full rounded-t"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{video.title}</h3>
                <p className="text-gray-600 text-xs">{video.channel}</p>
                <p className="text-gray-400 text-xs">
                  {video.views} • {video.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeMain;
