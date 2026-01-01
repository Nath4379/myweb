// ======= Toggle Dark/Light Mode =======
const toggleBtn = document.getElementById('toggleMode');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// ======= Real-time Clock with Day, Date, Month, Year =======
function updateTime() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const timeString = now.toLocaleTimeString();

    const fullString = `${dayName}, ${monthName} ${date}, ${year} | ${timeString}`;

    const timeDivs = document.querySelectorAll('#currentTime');
    timeDivs.forEach(div => div.textContent = fullString);
}

setInterval(updateTime, 1000);
updateTime();

// ======= AniMood Recommendation (Home Page) =======
const getBtn = document.getElementById('getRecommendation');
const resultsDiv = document.getElementById('results');

if(getBtn) {
  const animeList = [
    { judul: "Naruto", mood: "excited", time: "night", img: "poster-naruto.jpg" },
    { judul: "Bocchi The Rock", mood: "excited", time: "morning", img: "poster-bocchi.jpg" },
    { judul: "Bunny Girl Senpai", mood: "calm", time: "night", img: "poster-bunny-girl-senpai.jpg" },
    { judul: "Ponyo", mood: "sad", time: "afternoon", img: "poster-Ponyo.jpg" },
    { judul: "Your Name", mood: "sad", time: "night", img: "poster-your-name.jpg" },
    { judul: "Vagabond", mood: "calm", time: "night", img: "/poster-vagabond.jpg" },
    { judul: "Vinland Saga", mood: "calm", time: "afternoon", img: "poster-vinland-saga.jpg" },
    { judul: "Himouto! Umaru-Chan", mood: "excited", time: "morning", img: "poster-umaru-chan.jpg" },
    { judul: "Chunibyo", mood: "calm", time: "afternoon", img: "poster-chunibyo.jpg" },
    { judul: "Azumanga Daioh", mood: "excited", time: "morning", img: "poster-azumanga-daioh.jpg" },
    { judul: "Berserk", mood: "sad", time: "night", img: "poster-berserk.jpg" },
    { judul: "My Dress-Up Darling", mood: "happy", time: "afternoon", img: "poster-marin.jpg" },
    { judul: "The Fragrant Flowre Blooms With Dignity", mood: "happy", time: "morning", img: "poster-my-kisah.jpg" },
    { judul: "Demon Slayer", mood: "sad", time: "night", img: "poster-demon-slayer.jpg" },
    { judul: "Komi Can't Communicate", mood: "happy", time: "morning", img: "poster-komi-san.jpg" },
    { judul: "Jujutsu Kaisen", mood: "calm", time: "night", img: "poster-jujutsu-kaisen.jpg" },
    { judul: "Frieren : Beyond Journey's End", mood: "calm", time: "morning", img: "poster-Frieren.jpg" },
    { judul: "Dandadan", mood: "excited", time: "morning", img: "poster-dandadan.jpg" }
  ];

  getBtn.addEventListener('click', () => {
      const mood = document.getElementById('mood').value;
      const time = document.getElementById('time').value;
      resultsDiv.innerHTML = '';

      const filtered = animeList.filter(a => {
          return (mood === '' || a.mood === mood) && (time === '' || a.time === time);
      });

      if(filtered.length === 0) {
          resultsDiv.innerHTML = '<p>Tidak ada rekomendasi anime untuk pilihan ini 😢</p>';
          return;
      }

      filtered.forEach(a => {
          const card = document.createElement('div');
          card.classList.add('anime-card');
          card.innerHTML = `
              <img src="${a.img}" alt="${a.judul}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
              <h3>${a.judul}</h3>
          `;
          resultsDiv.appendChild(card);
      });
  });
}

// ======= Form Submission =======
const feedbackForm = document.getElementById('feedbackForm');
if(feedbackForm){
    feedbackForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mood = document.getElementById('moodForm').value;
        const comment = document.getElementById('comment').value;

        document.getElementById('formMessage').innerHTML = `<p>Terima kasih ${name}! Komentarmu telah diterima 😊</p>`;
        feedbackForm.reset();
    });
}
