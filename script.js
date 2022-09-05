const form = document.querySelector('#form')
const inputMessage = document.querySelector('#input-message')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  HandleNewWave()
})

let arrayListWaves = []

function HandleNewWave() {
  if (arrayListWaves.length > 5) {
    return
  }
  let inputMessageValue = inputMessage.value
  arrayListWaves.push(inputMessageValue)
  ShowMessage(inputMessageValue)
  CountWaves()

}

function ShowMessage(inputMessageValue) {
  const messageResult = document.querySelector('#message-result')
  const name = document.querySelector('#name')
  messageResult.innerHTML += `<p>Message from ${name.value}</p> <p>Message: ${inputMessageValue}</p>`
}

function CountWaves() {
  const count = document.querySelector('#count-waves')
  count.innerHTML = `Count Waves:${arrayListWaves.length}`
}