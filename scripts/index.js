const popup = document.querySelector('.popup');
const openPopupbtn = document.getElementById('profile__button-open');
const closePopupbtn = document.querySelector('.form__close');
const overlayPopup = document.querySelector('.popup__overlay');


function openpopup() {
    popup.classList.add('popup__visible');
}

function closepopup() {
    popup.classList.remove('popup__visible');
}

openPopupbtn.addEventListener('click', function() {
    openpopup();
});

closePopupbtn.addEventListener('click', function() {
    closepopup();
});
overlayPopup.addEventListener('click', function() {
    closepopup();
});


let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__name-info')
let jobInput = document.querySelector('.form__description-info')


function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput = document.querySelector('.form__name-info').value;
    jobInput = document.querySelector('.form__description-info').value;
    let name = document.querySelector('.profile__info-name');
    let job = document.querySelector('.profile__info-post');
    name.textContent = nameInput;
    job.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);