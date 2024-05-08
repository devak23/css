console.log("Hello World");
const button = document.querySelector(".btn-open");
const factList = document.querySelector(".fact-list");
console.dir(button);
console.log(factList);

button.addEventListener("click", () => {
  const form = document.querySelector(".fact-form");

  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    button.textContent = "Close";
  } else {
    form.classList.add("hidden");
    button.textContent = "Share a fact";
  }
});
