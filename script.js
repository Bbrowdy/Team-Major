const API_KEY = "YOUR_API_KEY_HERE"; // placeholder
const CHANNEL_ID = "UCrzb75rvct1bcwIA4v2qxHQ";
const MAX_RESULTS = 6;

async function fetchVideos() {
  if(API_KEY === "YOUR_API_KEY_HERE") return; // skip if no key
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const container = document.getElementById('youtube-videos');
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      if(videoId){
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('youtube-video');
        videoDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        container.appendChild(videoDiv);
      }
    });
  } catch(err) {
    console.error("Error fetching YouTube videos", err);
  }
}

fetchVideos();
