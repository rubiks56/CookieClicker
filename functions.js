//function - named sequence of code, repeated, reused
let cookieClicked = document.getElementById('start')
let cookieNumberEl = document.getElementById('cookietext')
let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')
let doubleButton = document.getElementById('double')
let autoButton = document.getElementById('auto')
let confetti = document.getElementById('confetti')
let autoButtonUpgrade = document.getElementById('auto2')
let scoreChange = 1
let autoScoreChange = 1
let autoClickOn = 1
let AutoClickCount = 1
let autoClickShow = true
let AutoClickUpgradeShow = true
let showOrHide = true
let cookieType = 0

console.log('Code running')
let clickCount = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor
    (max));
}
function doublePoints() {
    scoreChange = 2
    doubleButton.classList.add('remove')
}
function doStuff() {
    console.Y('Running doStuff function')
}

function updateCookieText() {
    cookieNumberEl.innerHTML = `You have pressed the cookie ${clickCount} times.`
    console.log ('cookie text updated')
}

function pressStart() {
    clickCount = clickCount + scoreChange
    console.log(`Button was clicked ${clickCount} times`)
    updateCookieText()
    if (clickCount === 10) {
        if (scoreChange === 1) {
            console.log('cookie button show')
            doubleButton.classList.remove('remove')
        }
    }
    if (clickCount === 100 || clickCount === 101) {
        if (autoScoreChange === 1) {
            console.log ('autoclicker button show')
            autoButton.classList.remove('remove')
        }
    }
    
    if (clickCount === 500 || clickCount === 501) {
        autoButtonUpgrade.classList.remove('remove')
    }
    if(clickCount % 5 === 0){
        cookieType = getRandomInt(5)
    }
    
    

    
}
cookieClicked.addEventListener('click', pressStart)



function doubleClicked() {
    console.log('Double button clicked')

}
function shrink() {
    cookieClicked.classList.add('shrink')
    console.log('shrink')
}

function grow() {
   cookieClicked.classList.remove('shrink')
   console.log('grow')
}

function showCookie() {
    if (!showOrHide) {
        showButton.classList.remove('remove')
        removeButton.classList.add('remove')
    }
    else {
            showButton.classList.add('remove')
        removeButton.classList.remove('remove')
        }
    cookieClicked.classList.remove('remove')
    console.log('showing cookie')
    showOrHide = true
  
}

function removeCookie() {
    if (!showOrHide) {
        showButton.classList.remove('remove')
        removeButton.classList.add('remove')
        }
    else {
            showButton.classList.add('remove')
        removeButton.classList.remove('remove')
        }
    cookieClicked.classList.add('remove')
    console.log('hiding cookie')
    showOrHide = false

}

function AutoClick() {
    clickCount = clickCount + AutoClickCount
    updateCookieText()
}

function AutoClickActivate() {
    autoButton.classList.add('remove')
    if (autoClickShow = true) {
        window.setInterval(AutoClick, 1000);
        autoClickShow = false
    }
    
}

function AutoClickUpgrade() {
    autoButtonUpgrade.classList.add('remove')
    if (AutoClickUpgradeShow = true) {
        AutoClickCount = 5
        AutoClickUpgradeShow = false
    }
}




cookieClicked.addEventListener('mousedown', shrink)
cookieClicked.addEventListener('mouseup', grow)
showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', removeCookie)
doubleButton.addEventListener('click', doublePoints)
autoButton.addEventListener('click', AutoClickActivate)
autoButtonUpgrade.addEventListener('click', AutoClickUpgrade)
console.log('End of script')