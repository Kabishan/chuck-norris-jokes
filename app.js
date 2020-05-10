document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let UIJokes = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          UIJokes += `<li>${joke.joke}</li>`;
        });
      } else UIJokes += '<h5>Something went wrong</h5>';

      document.querySelector('.jokes').innerHTML = UIJokes;
    }
  };

  xhr.send();

  e.preventDefault();
}
