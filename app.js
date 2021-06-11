const jokes = document.getElementById('jokes');
const button = document.getElementById('button');

button.addEventListener('click', getJokes)

getJokes();

async function getJokes() {

    const res = await fetch('https://api.chucknorris.io/jokes/random')

    const data = await res.json()

    jokes.innerHTML = data.value
}