document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.xml")
    .then(response => response.text())
    .then(xmlString => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xmlString, "text/xml");
            let movies = data.getElementsByTagName("movie");
            let container = document.getElementById("movieContainer");

            for (let i = 0; i < movies.length; i++) {
                let title = movies[i].getElementsByTagName("title")[0].textContent;
                let year = movies[i].getElementsByTagName("year")[0].textContent;
                let genre = movies[i].getElementsByTagName("genre")[0].textContent;
                let director = movies[i].getElementsByTagName("director")[0].textContent;
                let summary = movies[i].getElementsByTagName("summary")[0].textContent;
                let poster = movies[i].getElementsByTagName("poster")[0].textContent;

                let movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                movieCard.innerHTML = `
                    <img src="${poster}" alt="Movie Poster">
                    <div class="movie-info">
                        <h3>${title} (${year})</h3>
                        <p><strong>Genre:</strong> ${genre}</p>
                        <p><strong>Director:</strong> ${director}</p>
                        <p>${summary}</p>
                    </div>
                `;

                container.appendChild(movieCard);
            }
        })
        .catch(error => console.error("Error loading XML:", error));
});
