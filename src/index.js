// import './styles/main.scss'; // Don't delete :)
// import smile from './scripts/smile.js'; // Feel free to delete :)

// // All of your javascript should go here :)


// const remDays = document.querySelector(".days")
// const remHours = document.querySelector(".hours")
// const remMinutes = document.querySelector(".minutes")
// const remSeconds = document.querySelector(".seconds")
// document.querySelector(".days").textContent = "sdfsfa"
// document.querySelector("h2").textContent = "adfad"
const newYear = new Date('1 January 2023');
console.log("🚀 ~ newYear", newYear)


// console.log("🚀 ~ diff", diff)
// console.log("🚀 ~ days", diff / (1000 * 60 * 60 * 24))
// console.log("🚀 ~ hours", diff % (1000 * 60 * 60 * 24))

const days = 1000 * 60 * 60 * 24
const hours = 1000 * 60 * 60
const minutes = 1000 * 60
const seconds = 1000



function countDown() {
    const now = Date.now() // ms from 1/1/1970
    const diff = newYear - now

    const daysLeft = Math.floor(diff / (days))
    const hoursLeft = Math.floor((diff % days) / hours)
    const minutesLeft = Math.floor(((diff % days) % hours) / minutes)
    const secondsLeft = Math.floor(((diff % days) % hours) % minutes / seconds)

    const remDays = (document.querySelector(".days").textContent = `${daysLeft} days`)
    const remHours = (document.querySelector(".hours").textContent = `${hoursLeft} hours`);
    const remMinutes = (document.querySelector(".minutes").textContent =
    `${minutesLeft} minutes`);
    const remSeconds = (document.querySelector(".seconds").textContent =
    `${secondsLeft} seconds`);
}

const interval = setInterval(countDown, 1000)


