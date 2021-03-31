const popup = document.querySelector('.popup');
const openPopupbtn = document.querySelector('.profile__button-edit');
const closePopupbtn = document.querySelector('.popup__close');




function openpopup() {
    popup.classList.add('popup__opened');
}

function closepopup() {
    popup.classList.remove('popup__opened');
}

openPopupbtn.addEventListener('click', openpopup);


closePopupbtn.addEventListener('click', closepopup);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__name-info');
let jobInput = document.querySelector('.form__job-info');

let ProfileJob = document.querySelector('.profile__info-post');
let ProfileName = document.querySelector('.profile__info-name');

function valuePopup() {

    nameInput.value = ProfileName.textContent;
    jobInput.value = ProfileJob.textContent;

};
valuePopup();


function formSubmitHandler(evt) {
    evt.preventDefault();
    ProfileName.textContent = nameInput.value;
    ProfileJob.textContent = jobInput.value;
    closepopup();
};

formElement.addEventListener('submit', formSubmitHandler);