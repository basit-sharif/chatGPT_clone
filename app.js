import { OpenAI } from "langchain/llms/openai";

let button = document.getElementById('submitButton');
const backButton = document.getElementById("backButton");

button.addEventListener('click', buttonFU);
async function buttonFU() {
    const inputValue = document.getElementById("inputField");
    const removeable = document.getElementById("removeable");
    const non_removeable = document.getElementById("non_removeable");
    const headingans = document.getElementById("headingans");
    removeable.classList.add("hidden");
    non_removeable.classList.remove("hidden");
    let result = await main(inputValue.value);

    headingans.innerText = result
}
backButton.addEventListener('click', async function () {
    const inputValue = document.getElementById("inputField");
    const removeable = document.getElementById("removeable");
    const non_removeable = document.getElementById("non_removeable");
    const headingans = document.getElementById("headingans");
    removeable.classList.remove("hidden");
    non_removeable.classList.add("hidden");
    // let result = await main(inputValue.value);

    headingans.innerText = ""
});

const llm = new OpenAI({
    openAIApiKey: "",         // provide here your api key
    temperature: 0.9,
});
async function main(question) {
    console.log(question)
    const result = await llm.predict(question);
    console.log("result: ", result)
    return result
}


document.body.addEventListener("keydown", myFunction);

function myFunction(event) {
    var keyCode = event.keyCode;
    if (keyCode === 13) {
        buttonFU();
    }
}