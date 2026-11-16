
"use strict";

const destinations = [
  {
    id: 1, name: "Darjeeling", category: "Mountains",
    district: "Darjeeling", description: "Experience the magnificent Himalayas, tea gardens and the famous toy train.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85",
    best: "March – May, October – December",
    map: "Darjeeling, West Bengal, India"
  },
  {
    id: 2, name: "Dooars", category: "Nature",
    district: "Alipurduar / Jalpaiguri", description: "Explore lush forests, rivers, wildlife and the foothills of the Himalayas.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    best: "October – April",
    map: "Dooars, West Bengal, India"
  },
  {
    id: 3, name: "Sundarbans", category: "Nature",
    district: "South 24 Parganas", description: "Discover the world's largest mangrove forest and its extraordinary wildlife.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",
    best: "November – February",
    map: "Sundarbans, West Bengal, India"
  },
  {
    id: 4, name: "Digha", category: "Beaches",
    district: "Purba Medinipur", description: "Relax beside the Bay of Bengal and enjoy a refreshing coastal escape.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Digha, West Bengal, India"
  },
  {
    id: 5, name: "Kalimpong", category: "Mountains",
    district: "Kalimpong", description: "A peaceful hill town filled with monasteries, mountain views and gardens.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85",
    best: "March – May, October – December",
    map: "Kalimpong, West Bengal, India"
  },
  {
    id: 6, name: "Murshidabad", category: "Heritage",
    district: "Murshidabad", description: "Walk through Bengal's royal history at the magnificent Hazarduari Palace.",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Hazarduari Palace, Murshidabad, West Bengal, India"
  },
  {
    id: 7, name: "Shantiniketan", category: "Heritage",
    district: "Birbhum", description: "Discover Tagore's legacy, art, culture and the peaceful surroundings of Visva-Bharati.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Santiniketan, West Bengal, India"
  },
  {
    id: 8, name: "Kolkata", category: "Heritage",
    district: "Kolkata", description: "Explore the City of Joy, colonial architecture, literature, food and culture.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=85",
    best: "October – February",
    map: "Kolkata, West Bengal, India"
  },
  {
    id: 9, name: "Bakkhali", category: "Beaches",
    district: "South 24 Parganas", description: "Enjoy a quieter coastal retreat with beautiful beaches and open horizons.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Bakkhali, West Bengal, India"
  },
  {
    id: 10, name: "Bishnupur", category: "Heritage",
    district: "Bankura", description: "Admire terracotta temples, traditional architecture and the heritage of the Malla kings.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Bishnupur, Bankura, West Bengal, India"
  },
  {
    id: 11, name: "Tarapith", category: "Spiritual",
    district: "Birbhum", description: "Visit one of Bengal's renowned pilgrimage destinations.",
    image: "https://images.unsplash.com/photo-1604608672516-4e2a4e4e5f50?auto=format&fit=crop&w=900&q=85",
    best: "Throughout the year",
    map: "Tarapith, West Bengal, India"
  },
  {
    id: 12, name: "Mayapur", category: "Spiritual",
    district: "Nadia", description: "Explore the spiritual atmosphere and the remarkable ISKCON temple complex.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Mayapur, Nadia, West Bengal, India"
  },
  {
    id: 13, name: "Mirik", category: "Mountains",
    district: "Darjeeling", description: "Spend a peaceful day beside Sumendu Lake surrounded by hills and tea gardens.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    best: "March – May, October – December",
    map: "Mirik, West Bengal, India"
  },
  {
    id: 14, name: "Jaldapara", category: "Nature",
    district: "Alipurduar", description: "Explore grasslands and wildlife in the famous national park.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    best: "October – May",
    map: "Jaldapara National Park, West Bengal, India"
  },
  {
    id: 15, name: "Gorumara", category: "Nature",
    district: "Jalpaiguri", description: "Experience forest landscapes and wildlife in the Dooars region.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    best: "October – May",
    map: "Gorumara National Park, West Bengal, India"
  },
  {
    id: 16, name: "Tajpur", category: "Beaches",
    district: "Purba Medinipur", description: "Discover a peaceful beach escape along Bengal's coastline.",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Tajpur, West Bengal, India"
  },
  {
    id: 17, name: "Jhargram", category: "Nature",
    district: "Jhargram", description: "Experience forests, tribal culture and the charm of rural Bengal.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Jhargram, West Bengal, India"
  },
  {
    id: 18, name: "Cooch Behar", category: "Heritage",
    district: "Cooch Behar", description: "Visit the grand palace and discover the history of the Koch dynasty.",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Cooch Behar Palace, West Bengal, India"
  },
  {
    id: 19, name: "Gangasagar", category: "Spiritual",
    district: "South 24 Parganas", description: "Experience the sacred meeting of the Ganges and the Bay of Bengal.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Gangasagar, West Bengal, India"
  },
  {
    id: 20, name: "Lepchajagat", category: "Mountains",
    district: "Darjeeling", description: "Escape to a quiet Himalayan village surrounded by pine forests.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    best: "March – May, October – December",
    map: "Lepchajagat, West Bengal, India"
  },
  {
    id: 21, name: "Mukutmanipur", category: "Nature",
    district: "Bankura", description: "Enjoy scenic reservoir views, hills and peaceful countryside.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    best: "October – March",
    map: "Mukutmanipur, Bankura, West Bengal, India"
  }
];

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("destinationModal");
const toast = document.getElementById("toast");

let selectedCategory = "All";
let currentDestination = null;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("rishiFavorites") || "[]");
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem("rishiFavorites", JSON.stringify(favorites));
  } catch {
    showToast("Unable to save favourites on this device.");
  }
}

function renderDestinations() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = destinations.filter(place => {
    const categoryMatch = selectedCategory === "All" ||
      place.category === selectedCategory;

    const searchMatch = !query ||
      `${place.name} ${place.category} ${place.district} ${place.description}`
        .toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(place => `
    <article class="destination-card" data-id="${place.id}" tabindex="0" role="button" aria-label="Explore ${place.name}">
      <div class="destination-image">
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <span class="destination-tag">${place.category.toUpperCase()}</span>
      </div>
      <div class="destination-details">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <div class="destination-footer">
          <span>${place.district}</span>
          <strong>↗</strong>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
}

function openDestination(id) {
  const place = destinations.find(item => item.id === Number(id));
  if (!place) return;

  currentDestination = place;

  document.getElementById("modalImage").src = place.image;
  document.getElementById("modalImage").alt = place.name;
  document.getElementById("modalCategory").textContent = place.category;
  document.getElementById("modalTitle").textContent = place.name;
  document.getElementById("modalDescription").textContent = place.description;
  document.getElementById("modalInfo").innerHTML =
    `<strong>District:</strong> ${place.district}<br>
     <strong>Best time to visit:</strong> ${place.best}`;

  document.getElementById("mapLink").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(place.map);

  updateFavoriteButton();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateFavoriteButton() {
  if (!currentDestination) return;

  const favorites = getFavorites();
  const saved = favorites.includes(currentDestination.id);
  const button = document.getElementById("favoriteButton");

  button.textContent = saved ? "♥ Saved destination" : "♡ Save destination";
  button.style.background = saved ? "#e9eee7" : "transparent";
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".destination-card");
  if (card) openDestination(card.dataset.id);
});

grid.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".destination-card");
  if (card) {
    event.preventDefault();
    openDestination(card.dataset.id);
  }
});

document.getElementById("favoriteButton").addEventListener("click", () => {
  if (!currentDestination) return;

  let favorites = getFavorites();
  const id = currentDestination.id;

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Removed from favourites.");
  } else {
    favorites.push(id);
    showToast("Destination saved!");
  }

  saveFavorites(favorites);
  updateFavoriteButton();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

document.getElementById("categoryList").addEventListener("click", event => {
  const button = event.target.closest(".category");
  if (!button) return;

  selectedCategory = button.dataset.category;

  document.querySelectorAll(".category").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderDestinations();
});

searchInput.addEventListener("input", renderDestinations);

document.getElementById("searchButton").addEventListener("click", () => {
  renderDestinations();
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    renderDestinations();
    document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
  }
});

const tripSelect = document.getElementById("tripDestination");

destinations.forEach(place => {
  const option = document.createElement("option");
  option.value = place.id;
  option.textContent = place.name;
  tripSelect.appendChild(option);
});

document.getElementById("planButton").addEventListener("click", () => {
  const destinationId = Number(tripSelect.value);
  const days = Number(document.getElementById("tripDays").value);
  const budgetInput = document.getElementById("tripBudget").value;
  const budget = Number(budgetInput);
  const result = document.getElementById("plannerResult");

  if (!destinationId || !Number.isInteger(destinationId)) {
    showToast("Please select a destination.");
    return;
  }

  if (!Number.isInteger(days) || days < 1 || days > 30) {
    showToast("Enter a trip duration between 1 and 30 days.");
    return;
  }

  if (budgetInput === "" || !Number.isFinite(budget) || budget < 0) {
    showToast("Please enter a valid budget.");
    return;
  }

  const place = destinations.find(item => item.id === destinationId);
  const dailyBudget = budget / days;

  result.innerHTML = `
    <strong>Your trip plan is ready!</strong><br>
    Destination: ${place.name}<br>
    Duration: ${days} day(s)<br>
    Total budget: ₹${budget.toLocaleString("en-IN")} per person<br>
    Daily budget: ₹${dailyBudget.toLocaleString("en-IN", { maximumFractionDigits: 2 })}<br>
    <small>Remember to include travel, food, accommodation and entry fees in your budget. This is your budget estimate, not a confirmed trip price.</small><br>
    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}" target="_blank" rel="noopener" class="text-link">View destination on Maps ↗</a>
  `;

  result.hidden = false;
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderDestinations();

// Register the service worker for installation and offline caching.
if ("serviceWorker" in navigator &&
    (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => console.error("Service worker registration failed:", error));
  });
}
