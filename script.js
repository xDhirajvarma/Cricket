const featuredPlayers = [
    {
        name: "Sachin Tendulkar",
        country: "India",
        image: "images/sachin.jpg",
        achievement: "Highest run-scorer in international cricket",
        stats: {
            matches: 664,
            runs: 34357,
            average: 48.52,
            centuries: 100
        },
        coordinates: [19.0760, 72.8777] // Mumbai, India
    },
    {
        name: "Shane Warne",
        country: "Australia",
        image: "images/warne.jpeg",
        achievement: "708 Test wickets",
        stats: {
            matches: 339,
            wickets: 1001,
            average: 25.51,
            bestBowling: "8/71"
        },
        coordinates: [-37.8136, 144.9631] // Melbourne, Australia
    },
    {
        name: "Brian Lara",
        country: "West Indies",
        image: "images/lara.jpg",
        achievement: "Highest individual score in Test cricket (400*)",
        stats: {
            matches: 430,
            runs: 22358,
            average: 52.88,
            highestScore: 400
        },
        coordinates: [10.6918, -61.2225] // Trinidad and Tobago
    },
    {
        name: "Jacques Kallis",
        country: "South Africa",
        image: "images/kallis.jpg",
        achievement: "Most runs and catches in Test cricket for South Africa",
        stats: {
            matches: 519,
            runs: 25534,
            wickets: 577,
            catches: 338
        },
        coordinates: [-33.9249, 18.4241] // Cape Town, South Africa
    },
    {
        name: "Virat Kohli",
        country: "India",
        image: "images/kohli.jpg",
        achievement: "Fastest to reach 22,000 international runs",
        stats: {
            matches: 491,
            runs: 24092,
            average: 53.30,
            centuries: 70
        },
        coordinates: [28.7041, 77.1025] // Delhi, India
    },
    {
        name: "Muttiah Muralitharan",
        country: "Sri Lanka",
        image: "images/muralitharan.jpg",
        achievement: "Highest wicket-taker in Test cricket (800 wickets)",
        stats: {
            matches: 495,
            wickets: 1347,
            average: 22.72,
            bestBowling: "9/51"
        },
        coordinates: [6.9271, 79.8612] // Colombo, Sri Lanka
    },
    {
        name: "Ricky Ponting",
        country: "Australia",
        image: "images/ponting.jpg",
        achievement: "Most successful captain in cricket history",
        stats: {
            matches: 560,
            runs: 27483,
            average: 45.95,
            centuries: 71
        },
        coordinates: [-42.8821, 147.3272] // Hobart, Australia
    },
    {
        name: "Wasim Akram",
        country: "Pakistan",
        image: "images/akram.jpg",
        achievement: "Most wickets in ODI cricket at the time of retirement",
        stats: {
            matches: 460,
            wickets: 916,
            average: 23.52,
            bestBowling: "7/32"
        },
        coordinates: [31.5204, 74.3587] // Lahore, Pakistan
    }
];

function createPlayerCard(player) {
    return `
        <div class="player-card">
            <img src="${player.image}" alt="${player.name}">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p>${player.country}</p>
                <p>${player.achievement}</p>
                <details>
                    <summary>Career Statistics</summary>
                    <ul>
                        ${Object.entries(player.stats).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
                    </ul>
                </details>
            </div>
        </div>
    `;
}

function populatePlayers() {
    const playerGrid = document.querySelector('.player-grid') || document.querySelector('#player-list');
    if (playerGrid) {
        playerGrid.innerHTML = featuredPlayers.map(createPlayerCard).join('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populatePlayers();

    const storyForm = document.getElementById('story-form');
    if (storyForm) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for submitting your story!');
            storyForm.reset();
        });
    }

    const votingForm = document.getElementById('voting-form');
    if (votingForm) {
        votingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const selectedPlayer = document.querySelector('input[name="greatest-player"]:checked');
            if (selectedPlayer) {
                alert(`Thank you for voting for ${selectedPlayer.value}!`);
            } else {
                alert('Please select a player before voting.');
            }
        });
    }
});