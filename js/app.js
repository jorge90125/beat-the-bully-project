//Character Class
class Character {
    constructor() {
    this.name = ``
    this.str = 0
    this.int = 0
    this.dex = 0
    this.skllft = 10
    }
}

//Consts
const mainId = document.querySelector(`#main`)
const introClass = document.querySelectorAll(`.intro`)
const skillsClass = document.querySelectorAll(`.skills`)
const battleClass = document.querySelectorAll(`.battle`)

const nameSelect = document.querySelector(`#nameInput`)
const submitName = document.querySelector(`#nameSubmit`)

const strStat = document.querySelector(`#strStat`)
const strDwn = document.querySelector(`#strDwn`)
const strUp = document.querySelector(`#strUp`)

const intStat = document.querySelector(`#intStat`)
const intDwn = document.querySelector(`#intDwn`)
const intUp = document.querySelector(`#intUp`)

const dexStat = document.querySelector(`#dexStat`)
const dexDwn = document.querySelector(`#dexDwn`)
const dexUp = document.querySelector(`#dexUp`)

const skillsLeft = document.querySelector(`#skillLeft`)
const skillsBackBtn = document.querySelector(`#skillsBackBtn`)
const startBattle = document.querySelector(`#startBattle`)

const playerStats = []
const beginBattle = document.querySelector(`#beginBattle`)
const playerHealth = document.querySelector(`#playerHealth`)
const bullyHealth = document.querySelector(`#bullyHealth`)
const charBattleName = document.querySelector(`#charBattleName`)
const char3StatsStr = document.querySelector(`#char3StatsStr`)
const char3StatsInt = document.querySelector(`#char3StatsInt`)
const char3StatsDex = document.querySelector(`#char3StatsDex`)
const bully3StatsStr = document.querySelector(`#bully3StatsStr`)
const bully3StatsInt = document.querySelector(`#bully3StatsInt`)
const bully3StatsDex = document.querySelector(`#bully3StatsDex`)
const characterImgBattle = document.querySelector(`#characterImgBattle`)
const bullyImgBattle = document.querySelector(`#bullyImgBattle`)
const battleLog = document.querySelector(`#battleLog`)
const battleBackBtn = document.querySelector(`#battleBackBtn`)

const stats = document.querySelectorAll(`.stats`)

//INTRO
//create character and set health
const character = new Character()
strStat.innerHTML = character.str
intStat.innerHTML = character.int
dexStat.innerHTML = character.dex
skillsLeft.innerHTML = character.skllft
let playerHP = 10
playerHealth.innerHTML = `${playerHP}/10 HP`
let bullyHP = 10
bullyHealth.innerHTML = `${bullyHP}/10 HP`

//set bully skills points
const bullyStats = []
const getBullyStat = () => {
    const randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const max = 10
    let num1 = randomBetween(0, max-2)
    let num2 = randomBetween(0, max-1-num1)
    let num3 = max - num1 - num2
    bullyStats.push(num1, num2, num3)
}
getBullyStat()

//Submit name and go to skills
const intro = ()  =>  {
    if(nameSelect.value === ``) {
        alert(`Please choose a name!`)
        return
    } else {
    character.name = nameSelect.value
    }
    mainId.style.backgroundImage = "url('images/skills-bg.jpeg')"
    introClass.forEach((element) => {
        element.style.display = `none`
    })
    skillsClass.forEach((element) => {
        element.style.display = `block`
    })
}

//SKILLS
//change strength stat
const strengthMinus = () => {
    if (character.str === 0) {
        return
    } else {
        character.str --
        strStat.innerHTML = character.str
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const strengthPlus = () => {
    if (character.str === 10 || character.skllft === 0) {
        return
    } else {
        character.str ++
        strStat.innerHTML = character.str
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//change intelligence stat
const intMinus = () => {
    if (character.int === 0) {
        return
    } else {
        character.int --
        intStat.innerHTML = character.int
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const intPlus = () => {
    if (character.int === 10 || character.skllft === 0) {
        return
    } else {
        character.int ++
        intStat.innerHTML = character.int
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//change dexterity stat
const dexMinus = () => {
    if (character.dex === 0) {
        return
    } else {
        character.dex --
        dexStat.innerHTML = character.dex
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const dexPlus = () => {
    if (character.dex === 10 || character.skllft === 0) {
        return
    } else {
        character.dex ++
        dexStat.innerHTML = character.dex
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//back button
const backToIntro = () => {
    skillsClass.forEach((element) => {
        element.style.display = `none`
    })
    introClass.forEach((element) => {
        element.style.display = `flex`
    })
    mainId.style.backgroundImage = "url('images/intro-bg.jpeg')"
}

//BATTLE
//Start battle button on skills screen thats sets character and bully ready for battle
const toBattle = () => {
    if (character.skllft !== 0) {
        alert(`Please properly allocate skill points.`)
        return
    } else {
        playerStats.push(character.str)
        playerStats.push(character.int)
        playerStats.push(character.dex)
        mainId.style.backgroundImage = "url('images/fight-bg.jpeg')"
        skillsClass.forEach((element) => {
            element.style.display = `none`
        })
        battleClass.forEach((element) => {
            element.style.display = `block`
        })
        charBattleName.innerHTML = character.name
        char3StatsStr.innerHTML = `Str: ${character.str}`
        char3StatsInt.innerHTML = `Int: ${character.int}`
        char3StatsDex.innerHTML = `Dex: ${character.dex}`
        bully3StatsStr.innerHTML = `Str: ${bullyStats[0]}`
        bully3StatsInt.innerHTML = `Int: ${bullyStats[1]}`
        bully3StatsDex.innerHTML = `Dex: ${bullyStats[2]}`
    }
}

//Each turn function and end of game
const fight = () => {
    if (playerHP === 0) {
        alert(`Terrible news. The bully has maintained dominance and defeated you. This page will now refresh. Feel free to play again!`)
        location.reload()
    } else if (bullyHP === 0) {
        alert(`Huzzah! You have vanquished your foe. The marginalized yougins of the schoolyard rejoice! You win! This page will now refresh. You should try playing again! <3`)
        location.reload()
    } else {
        const playerPlay = Math.floor(Math.random() * playerStats.length)
        const playerChoice = playerStats[playerPlay]
        const bullyPlay = Math.floor(Math.random() * bullyStats.length)
        const bullyChoice = bullyStats[bullyPlay]
        if (playerChoice === bullyChoice) {
            const newMsg = document.createElement(`p`)
            newMsg.innerText = `Player attack power is ${playerChoice} and Bully attack power is ${bullyChoice}. It's a tie!`
            battleLog.appendChild(newMsg)
        } else if (playerChoice > bullyChoice) {
            bullyHP --
            bullyHealth.innerHTML = `${bullyHP}/10 HP`
            characterImgBattle.src = "../beat-the-bully-project/images/kirby-swing-gif.gif"
            setTimeout(() => {
                characterImgBattle.src = "../beat-the-bully-project/images/kirby-sprite.png"
            }, 1000)
            const newMsg = document.createElement(`p`)
            newMsg.innerText = `Player attack power is ${playerChoice} and Bully attack power is ${bullyChoice}. Player deals damage!`
            battleLog.appendChild(newMsg)
        } else {
            playerHP --
            playerHealth.innerHTML = `${playerHP}/10 HP`
            bullyImgBattle.src = "../beat-the-bully-project/images/dio-punching-gif.gif"
            setTimeout(() => {
                bullyImgBattle.src = "../beat-the-bully-project/images/dio-standing-gif.gif"
            }, 1500)
            const newMsg = document.createElement(`p`)
            newMsg.innerText = `Oh no! Player attack power is ${playerChoice} and Bully attack power is ${bullyChoice}. Bully deals damage!`
            battleLog.appendChild(newMsg)
        }
    }
}

//Autofight Interval
const setFightInterval = () => {
    beginBattle.style.display = `none`
    setInterval(fight, 2000)
}

//battle back button
const stopFightInterval = () => {
    clearInterval(setFightInterval)
}
const backToSkills = () => {
    stopFightInterval()
    battleClass.forEach((element) => {
        element.style.display = `none`
    })
    skillsClass.forEach((element) => {
        element.style.display = `block`
    })
}

//buttons
submitName.addEventListener(`click`, intro)
strDwn.addEventListener(`click`, strengthMinus)
strUp.addEventListener(`click`, strengthPlus)
intDwn.addEventListener(`click`, intMinus)
intUp.addEventListener(`click`, intPlus)
dexDwn.addEventListener(`click`, dexMinus)
dexUp.addEventListener(`click`, dexPlus)
skillsBackBtn.addEventListener(`click`, backToIntro)
startBattle.addEventListener(`click`, toBattle)
beginBattle.addEventListener(`click`, setFightInterval)
battleBackBtn.addEventListener(`click`, backToSkills)