let menuToggle = document.getElementById("menuToggle")
let navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active")
})

let navigationLinks = document.querySelectorAll(".nav-links a")

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active")
    })
})

let revealElements = document.querySelectorAll(".reveal")

let revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active")
                revealObserver.unobserve(entry.target)
            }
        })
    },
    {
        threshold: 0.15
    }
)

revealElements.forEach(function (element) {
    revealObserver.observe(element)
})

let developerCard = document.getElementById("developerCard")

developerCard.addEventListener("mousemove", function (event) {
    let rectangle = developerCard.getBoundingClientRect()
    let x = event.clientX - rectangle.left
    let y = event.clientY - rectangle.top
    let centerX = rectangle.width / 2
    let centerY = rectangle.height / 2
    let rotateX =
        ((y - centerY) / centerY) * -8
    let rotateY =
        ((x - centerX) / centerX) * 8
    developerCard.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"
})

developerCard.addEventListener("mouseleave", function () {
    developerCard.style.transform =
        "rotateX(0deg) rotateY(0deg)"
})

let footerText = document.querySelector("footer p")
let currentYear = new Date().getFullYear()

footerText.textContent =
    "© " + currentYear + " BRENKY. DIGITAL DEVELOPER."

let sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", function () {
    let currentSection = ""
    sections.forEach(function (section) {
        let sectionTop = section.offsetTop
        let sectionHeight = section.offsetHeight
        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id")
        }
    })
    navigationLinks.forEach(function (link) {
        link.classList.remove("active")
        let href = link.getAttribute("href")
        if (href === "#" + currentSection) {
            link.classList.add("active")
        }
    })
})

let speed = document.getElementById("speed")
let passing = document.getElementById("passing")
let shooting = document.getElementById("shooting")
let stamina = document.getElementById("stamina")
let speedValue = document.getElementById("speedValue")
let passingValue = document.getElementById("passingValue")
let shootingValue = document.getElementById("shootingValue")
let staminaValue = document.getElementById("staminaValue")
let performanceScore = document.getElementById("performanceScore")

function calculatePerformance() {
    let speedScore = Number(speed.value)
    let passingScore = Number(passing.value)
    let shootingScore = Number(shooting.value)
    let staminaScore = Number(stamina.value)
    let total = speedScore + passingScore + shootingScore + staminaScore
    let average = Math.round(total / 4)

    speedValue.textContent = speedScore
    passingValue.textContent = passingScore
    shootingValue.textContent = shootingScore
    staminaValue.textContent = staminaScore
    performanceScore.textContent = average
}

speed.addEventListener(
    "input",
    calculatePerformance
)

passing.addEventListener(
    "input",
    calculatePerformance
)

shooting.addEventListener(
    "input",
    calculatePerformance
)

stamina.addEventListener(
    "input",
    calculatePerformance
)

calculatePerformance()