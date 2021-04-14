const popup = document.querySelector('.popup_edit_form');
const openPopupbtn = document.querySelector('.profile__button-edit');
const closePopupbtn = document.querySelector('.popup__close');


const openPopupBtnCard = document.querySelector('.profile__button-add');
const closePopupBtnCard = document.querySelector('.popup_close_img');


function openpopup(mod) {
    mod.classList.add('popup_opened');
}

function closepopup(mod) {
    mod.classList.remove('popup_opened');
}

function openpopupProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openpopup(popup)

}

openPopupbtn.addEventListener('click', () => openpopupProfile(popup));
closePopupbtn.addEventListener('click', () => closepopup(popup));

openPopupBtnCard.addEventListener('click', () => openpopup(popupCard));
closePopupBtnCard.addEventListener('click', () => closepopup(popupCard));



let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__info_input_name');
let jobInput = document.querySelector('.form__info_input_job');

let profileJob = document.querySelector('.profile__info-post');
let profileName = document.querySelector('.profile__info-name');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closepopup(popup);
};

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupCard = document.querySelector('.popup_insert_card');
const templateElement = document.querySelector('.template').content.querySelector('.element');
const popupCardForm = popupCard.querySelector('form_new_card');

const popupCardInputName = popupCard.querySelector("input[name='description']");
const popupCardInputLink = popupCard.querySelector("input[name='link']");

const popupCardButton = document.querySelector('.popup__button');
const cardElements = document.querySelector('.elements');

function addCard(e) {
    e.preventDefault()
    const inputNameCard = popupCardInputName.value
    const inputLinkCard = popupCardInputLink.value

    const cardElementTemplate = templateElement.cloneNode(true);
    const cardElementTitle = cardElementTemplate.querySelector('.elements__title');
    const cardElementImage = cardElementTemplate.querySelector('.elements__pic');

    cardElementTitle.textContent = inputNameCard;
    cardElementImage.src = inputLinkCard;
    cardElementImage.alt = cardElementTitle;

    cardElements.prepend(cardElementTemplate)
    closepopup(popupCard)
}

popupCardForm.addEventListener('submit', addCard);

function createCard(item) {
    const cardElementTemplate = templateElement.cloneNode(true);
    const cardElementTitle = cardElementTemplate.querySelector('.elements__title');
    const cardElementImage = cardElementTemplate.querySelector('.elements__pic');

    cardElementTitle.textContent = item.name;
    cardElementImage.src = item.link;
    cardElementImage.alt = item.name;

    const deleteButton = cardElementTemplate.querySelector('.element__button-basket')

    function deleteCard() {
        cardElement.remove()
    }

    deleteButton.addEventListener('click', deleteCard)

    const likeButton = cardElementTemplate.querySelector('.element__like');

    function like() {
        likeButton.classList.toggle('element__like-active')
    }

    likeButton.addEventListener('click', like);


    const popupImg = document.querySelector('.popup__enlarge-img');
    const elementTitle = cardElementTemplate.querySelector('.elements__title');
    const elementImage = cardElementTemplate.querySelector('.elements__pic');
    const image = popupImg.querySelector('.popup__image');
    const imageName = popupImg.querySelector('.popup__name-img');
    const imageClose = popupImg.querySelector('.popup_enlarge_close_img');


    function openPopupImage() {
        popupImg.classList.add('popup_opened')
        image.alt = elementTitle.textContent
        image.src = elementImage.src
        imageName.textContent = elementTitle.textContent

    }

    function closePopupImage() {
        popupImg.classList.remove('popup_opened')
    }

    elementImage.addEventListener('click', openPopupImage);
    imageClose.addEventListener('click', closePopupImage);

    cardElements.append(cardElementTemplate)

}

const masCards = initialCards.forEach(function masCardsAdd(item) {
    createCard(item)
});