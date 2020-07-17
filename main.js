const genJoke = document.getElementById('joke');
const getjoke = document.getElementById('getjoke');

getjoke.addEventListener('click',generateJoke);
generateJoke();
async function generateJoke(){
  //call ican has api
  const jokeRes = await fetch('https://icanhazdadjoke.com/',{
                              headers:{
                                'Accept':'application/json'
                              }
                              });
  const joke = await jokeRes.json();
  //set the new joke
  genJoke.innerHTML = joke.joke;
}

