const popup = document.querySelector('.popup');
const openPopupbtn = document.querySelector('.profile__button-edit');
const closePopupbtn = document.querySelector('.popup__close');




function openpopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closepopup() {
    popup.classList.remove('popup_opened');
}

openPopupbtn.addEventListener('click', openpopup);


closePopupbtn.addEventListener('click', closepopup);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__info_input_name');
let jobInput = document.querySelector('.form__info_input_job');

let profileJob = document.querySelector('.profile__info-post');
let profileName = document.querySelector('.profile__info-name');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closepopup();
};

formElement.addEventListener('submit', formSubmitHandler);