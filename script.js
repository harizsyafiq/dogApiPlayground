// https://dog.ceo/api/breeds/image/random
// .then - talking about Promises
// asynchronous programming

// stuff you dont have to wait for
console.log('Run 1st')

const bodyDiv = document.getElementById('body')
const dogImageDiv = document.getElementById('dogImage')
const dogButtonDiv = document.getElementById('dogButton')

bodyDiv.style.backgroundColor = 'black'
dogButtonDiv.style.backgroundColor = 'white'

// stuff you have to wait for
const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height='250' width='250'/>`
    })
}


dogButtonDiv.onclick = () => getNewDog()

console.log('Run 3rd')