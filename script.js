//Getting tags from HTML//

const button = document.getElementById('btn');
const jokes = document.getElementById('jokes-content');

const getJokes = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText).value;
        jokes.innerHTML = `${data}`;
      } else {
        jokes.innerHTML = 'Something went wrong!!!';
      }
    }
  };
  xhr.send();
};

//Event Listeners//

button.addEventListener('click', getJokes);
document.addEventListener('DOMContentLoaded', getJokes);
