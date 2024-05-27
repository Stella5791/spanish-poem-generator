function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "me basta con saber",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "me basta con saber";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
