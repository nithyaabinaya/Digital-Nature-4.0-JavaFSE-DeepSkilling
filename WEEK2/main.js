console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded");

document.getElementById("loading").style.display = "none";

// 2. Data Types and Operators
const eventName = "Music Night";
const eventDate = "2025-06-10";
let availableSeats = 50;
console.log(`${eventName} is on ${eventDate} with ${availableSeats} seats.`);

// 3. Conditionals, Loops, Error Handling
const events = [
  { name: "Music", date: "2025-07-01", seats: 5 },
  { name: "Workshop", date: "2023-05-01", seats: 0 },
];

events.forEach(e => {
  if (new Date(e.date) > new Date() && e.seats > 0) {
    console.log("Upcoming:", e.name);
  }
});

try {
  let selectedEvent = events[0];
  if (selectedEvent.seats <= 0) throw "No seats";
  selectedEvent.seats--;
} catch (err) {
  console.error("Registration failed:", err);
}

// 4. Functions, Closures
function addEvent(name, date, category) {
  events.push({ name, date, seats: 10, category });
}

function registerUser(eventName) {
  const e = events.find(e => e.name === eventName);
  if (e && e.seats > 0) e.seats--;
}

function filterEventsByCategory(cat, cb) {
  return events.filter(e => cb(e.category));
}

const tracker = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};
const e1 = new Event("Yoga", "2025-08-10", 5);
console.log(Object.entries(e1));

// 6. Arrays and Methods
const musicEvents = events.filter(e => e.name === "Music");
const cards = events.map(e => `${e.name} on ${e.date}`);
console.log(cards);

// 7. DOM Manipulation
const container = document.querySelector("#eventsContainer");
function renderEvents() {
  container.innerHTML = "";
  events.forEach(e => {
    const div = document.createElement("div");
    div.textContent = `${e.name} (${e.seats} seats)`;
    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.onclick = () => {
      registerUser(e.name);
      renderEvents();
    };
    div.appendChild(btn);
    container.appendChild(div);
  });
}
renderEvents();

// 8. Event Handling
$("#registerBtn").click(function (e) {
  e.preventDefault();
  alert("Thanks for registering!");
});

$("#registrationForm select").on("change", function () {
  console.log("Fee for", this.value);
});

$("#registrationForm input[name='name']").on("keydown", function (e) {
  console.log("Key pressed:", e.key);
});

// 9. Async JS
function fetchEvents() {
  document.getElementById("loading").style.display = "block";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched:", data.slice(0, 3));
    })
    .catch(err => console.error("Fetch failed", err))
    .finally(() => {
      document.getElementById("loading").style.display = "none";
    });
}

async function fetchAsync() {
  try {
    document.getElementById("loading").style.display = "block";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Async Data:", data.slice(0, 2));
  } catch (e) {
    console.error(e);
  } finally {
    document.getElementById("loading").style.display = "none";
  }
}

fetchAsync();

// 10. Modern Features
const displayEvent = ({ name, date }) => console.log(name, date);
displayEvent({ name: "Art", date: "2025-08-01" });
const clonedEvents = [...events];

// 11. Forms
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  if (!name || !email) return alert("All fields required");
  console.log("Submitting:", name, email);
});

// 12. AJAX Sim
function sendRegistration(data) {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(data => alert("Registered successfully!"))
      .catch(() => alert("Submission failed"));
  }, 1000);
}

// 13. Debugging
console.log("Debug point");

// 14. jQuery + Framework Benefit
$("#eventsContainer div").fadeOut(200).fadeIn(200);
// Benefit: React/Vue provide component lifecycle management and state reactivity.
