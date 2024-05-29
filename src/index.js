function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b4697434f3a4b96oc63c0bff5tca4166";
  let prompt = `User instructions are:Generate a Spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert who likes to write short poems. Your mission is to generate a 4 line poem in basic html and separate each line. Do not include title of the poem. Sign the poem with 'Shecodes AI poet' inside a <strong> element at the end of the poem and NOT at the beginning. Leave a blank line between the poem and the signature. Make sure you follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="Generating">⏳ Generating a Spanish poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
