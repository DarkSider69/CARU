'use strict'

const changeLanguageButton = document.querySelector('.change-language');
const changeLanguageModal = document.querySelector('.language-dropdown');
const loginIc = document.querySelector('.log-in');
const logInModal = document.querySelector('.login-modal');
const closeIc = document.querySelector('.close-X');
const flagCon = document.querySelector('.flag-container');
const flagConDrop = document.querySelector('.flag-container-dropdown');
const tel = document.querySelector('.tel');
const notNineSymb = document.querySelector('.put-9-sym')
const formSubmit = document.querySelector('.form-submit')
const flagContainer = document.querySelector('.flag-container')

// change language box hide/show function
changeLanguageButton.addEventListener('click', function() {
    changeLanguageModal.classList.toggle('hidden');
})

// login modal functions
        // 1.close-open function
loginIc.addEventListener('click', function() {
    logInModal.classList.add('display')
    logInModal.style.display = 'flex'
})

closeIc.addEventListener('click', function() {
    logInModal.classList.remove('display')
    logInModal.style.display = 'none'
})

// dial code box open/close
flagCon.addEventListener('click', function(){
    flagConDrop.classList.toggle('hidden')
})

// formSubmit button function
formSubmit.addEventListener('click', function() {
    if(tel.value.length != 9) {
        tel.style.borderColor = 'red'
        flagContainer.style.borderColor = 'red'
        notNineSymb.textContent = 'შეიყვანეთ 9 სიმბოლო!'
    } else if(tel.value.length === 9) {
        tel.style.borderColor = '#11BB00'
        flagContainer.style.borderColor = '#11BB00'
    }
})

// end of Header function :D

