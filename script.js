// ======= Toggle Dark/Light Mode =======
const toggleBtn = document.getElementById('toggleMode');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// ======= Real-time Clock with Day, Date, Month, Year =======
function updateTime() {
    const now = new Date();

    // Hari dalam bahasa Inggris
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];

    // Bulan dalam bahasa Inggris
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const monthName = months[now.getMonth()];

    const date = now.getDate();
    const year = now.getFullYear();
    const timeString = now.toLocaleTimeString(); // HH:MM:SS AM/PM

    const fullString = `${dayName}, ${monthName} ${date}, ${year} | ${timeString}`;

    const timeDivs = document.querySelectorAll('#currentTime');
    timeDivs.forEach(div => div.textContent = fullString);
}

setInterval(updateTime, 1000);
updateTime();

// ======= AniMood Recommendation (Home Page) =======
const getBtn = document.getElementById('getRecommendation');
const resultsDiv = document.getElementById('results');

if (getBtn) {
  const animeList = [
    { judul: "Ponyo", mood: "sad", time: "afternoon", img: "gambar/poster-Ponyo.jpg" },
    { judul: "Your Name", mood: "sad", time: "night", img: "gambar/poster-your-name.jpg" },
    { judul: "Vagabond", mood: "calm", time: "night", img: "gambar/poster-vagabond.jpg" },
    { judul: "Vinland Saga", mood: "calm", time: "afternoon", img: "gambar/poster-vinland-saga.jpg" },
    { judul: "Himouto! Umaru-Chan", mood: "excited", time: "morning", img: "gambar/poster-umaru-chan.jpg" },
    { judul: "Chunibyo", mood: "calm", time: "afternoon", img: "gambar/poster-chunibyo.jpg" },
    { judul: "Azumanga Daioh", mood: "excited", time: "morning", img: "gambar/poster-azumanga-daioh.jpg" },
    { judul: "Berserk", mood: "sad", time: "night", img: "gambar/poster-berserk.jpg" },
    { judul: "My Dress-Up Darling", mood: "happy", time: "afternoon", img: "gambar/poster-marin.jpg" },
    { judul: "The Fragrant Flower Blooms With Dignity", mood: "happy", time: "morning", img: "gambar/poster-fragrant-flower.jpg" },
    { judul: "Demon Slayer", mood: "sad", time: "night", img: "gambar/poster-demon-slayer.jpg" },
    { judul: "Komi Can't Communicate", mood: "happy", time: "morning", img: "gambar/poster-komi.jpg" },
    { judul: "Jujutsu Kaisen", mood: "calm", time: "night", img: "gambar/poster-jjk.jpg" },
    { judul: "Frieren: Beyond Journey's End", mood: "calm", time: "morning", img: "gambar/poster-Frieren.jpg" },
    { judul: "Dandadan", mood: "excited", time: "morning", img: "gambar/poster-dandadan.jpg" }
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
            <img src="${a.img}" alt="${a.judul}" class="anime-img">
            <h3>${a.judul}</h3>
            <p>Mood: ${a.mood}</p>
            <p>Waktu: ${a.time}</p>
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






