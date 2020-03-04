/////////////////////////////////
/////////// Слайдер//////////////
/////////////////////////////////
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let bodyChangeSlide = document.querySelector('body');
let goodDealName = document.querySelector('.good-deal__name');
let currentSlide = "slider-1";

slide1.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-1")) {
        //Убирает предидущий класс
        bodyChangeSlide.classList.remove(currentSlide);
        //Меняет оглавление
        goodDealName.textContent = "Крем брюле и пломбир с малиновым джемом";
        //Находит предидущий активный баттон, убирает фон и добавляет фон текущему элементу
        let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide1.classList.add("current-slider-button");
        //Меняет оформление фона страницы
        bodyChangeSlide.classList.add("slider-1");
        //Устанавлиает текущий класс для последующего удаления при смене фона
        currentSlide = "slider-1";
    }
});

slide2.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-2")) {
        bodyChangeSlide.classList.remove(currentSlide);
        goodDealName.textContent = "Шоколадный пломбир и лимонный сорбет";
        let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide2.classList.add("current-slider-button");
        bodyChangeSlide.classList.add("slider-2");
        currentSlide = "slider-2";
    }
});

slide3.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bodyChangeSlide.classList.contains("slider-3")) {
        bodyChangeSlide.classList.remove(currentSlide);
        goodDealName.textContent = "Пломбир с помадкой и клубничный щербет";
        bodyChangeSlide.classList.add("slider-3");
       let resetButton = document.querySelector(".current-slider-button");
        resetButton.classList.remove("current-slider-button");
        slide3.classList.add("current-slider-button");
        currentSlide = "slider-3";
    }
});

//////////Форма//////////////////
////////Обратной/////////////////
//////////Связи//////////////////

let modalFeedback = document.querySelector(".feedback-modal-window");
let closeFeedbackWindow = modalFeedback.querySelector(".feedback-modal-window__close-modal");
let overlayFeedback = document.querySelector(".feedback-overlay");
let openFeedbackWindow = document.querySelector(".open-modal");
let nameInput = modalFeedback.querySelector("[name=name]");

openFeedbackWindow.addEventListener("click", function (evt) {
    //Убирает поведение по умолчанию
    evt.preventDefault();
    //Убирает анимацию закрытия, чтоб появившийся элемент при открытия не уменьшился.
    modalFeedback.classList.remove("close-animation");
    //Добавляет анимацию и делает видимым модальное окно и оверлей
    modalFeedback.classList.add("modal-animation");
    modalFeedback.classList.add("show-modal");
    overlayFeedback.classList.add("show-modal");
    //При открытии формы автоматически помещает фокус в поле ввода имени
    nameInput.focus();
});

closeFeedbackWindow.addEventListener("click", function (evt) {
    evt.preventDefault();
    //Убирает анимацию открытия
    modalFeedback.classList.remove("modal-animation");
    //Добавляет анимацию закрытия
    modalFeedback.classList.add("close-animation");
    //после проигрывания анимации скрывает модалку, хоть она уже и скрыта но влияет на доступность
    setTimeout(function () {
        modalFeedback.classList.remove("show-modal")
    }, 600);
    //скрывает оверлей
    overlayFeedback.classList.remove("show-modal");
    
});
