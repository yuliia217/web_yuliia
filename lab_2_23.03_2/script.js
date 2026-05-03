// зберігаємо дані
localStorage.setItem("userAgent", navigator.userAgent);
localStorage.setItem("platform", navigator.platform);

// відображаємо у футері
const footer = document.querySelector("footer");

footer.innerHTML += `
  <p>Browser: ${localStorage.getItem("userAgent")}</p>
  <p>OS: ${localStorage.getItem("platform")}</p>
`;
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(res => res.json())
  .then(data => {
    const container = document.createElement("div");

    data.forEach(comment => {
      const p = document.createElement("p");
      p.textContent = comment.email + ": " + comment.body;
      container.appendChild(p);
    });

    document.body.appendChild(container);
  });
  setTimeout(() => {
  alert("Залиште відгук!");
}, 60000);
const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
  document.body.style.background = "white";
  document.body.style.color = "black";
} else {
  document.body.style.background = "#111";
  document.body.style.color = "white";
}
function toggleTheme() {
  if (document.body.style.background === "black") {
    document.body.style.background = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
}