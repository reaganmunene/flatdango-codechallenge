// Code here
// Your code here
const urlLocator = "http://localhost:3000/beers/";

function loadFilms() {
  fetch(urlLocator)
    .then(response => response.json())
    .then(films => {
      const firstFilm = films[0];
      displayFilmDetails(firstFilm);
    })
    .catch(error => console.log(error));
}
  // Create movie list
  const filmList = document.getElementById("films");
  films.forEach(film => {
    const li = document.createElement("li");
    li.classList.add("film", "item");
    li.textContent = film.title;
    li.addEventListener("click", () => setMovieDetails(film));
    filmList.appendChild(li);
  });

// Set movie details on page
function setMovieDetails(movie) {
const poster = document.getElementById("poster");
poster.setAttribute("src", movie.poster);

const title = document.getElementById("title");
title.textContent = movie.title;

const runtime = document.getElementById("runtime");
runtime.textContent = movie.runtime + " minutes";

const showtime = document.getElementById("showtime");
showtime.textContent = movie.showtime;

const ticketNum = document.getElementById("ticket-num");
const availableTickets = movie.capacity - movie.tickets_sold;
ticketNum.textContent = availableTickets + " remaining tickets";

const buyTicket = document.getElementById("buy-ticket");
buyTicket.disabled = (availableTickets === 0);
buyTicket.addEventListener("click", () => {
  if (availableTickets > 0) {
    ticketNum.textContent = (availableTickets - 1) + " remaining tickets";
    movie.tickets_sold++;
    buyTicket.disabled = (availableTickets - 1 === 0);
  }
});

const filmInfo = document.getElementById("film-info");
filmInfo.textContent = movie.description;
}
document.addEventListener("DOMContentLoaded", loadFilms);