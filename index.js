const daysText = document.querySelector('#days')
const hrsText = document.querySelector('#hours')
const minsText = document.querySelector('#minutes')
const secsText = document.querySelector('#seconds')

let today = new Date()
let yearNow = today.getFullYear()
let nextYear = yearNow + 1
f = Math.floor

setInterval(() => {
  today = new Date()
  yearNow = today.getFullYear()
  nextYear = yearNow + 1

  let ms = Date.parse(nextYear) - Date.now()
  let secs = f(ms/1000%60).toString().padStart(2, '0')
  let mins = f(ms/1000/60%60).toString().padStart(2, '0')
  let hrs = f(ms/1000/60/60%24).toString().padStart(2, '0')
  let days = f(ms/1000/60/60/24).toString()

  daysText.innerText = days
  hrsText.innerText = hrs
  minsText.innerText = mins
  secsText.innerText = secs
}, 1000)


