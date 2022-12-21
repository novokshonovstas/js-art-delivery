import { validateForNum } from "./validateForNum";

const modals = () => {
  let isModalOpen = false;

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    validateForNum('[name="phone"]');

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        isModalOpen = true;

        if (e.target) {
          e.preventDefault();
        }
        if (destroy) {
          item.remove();
        }

        windows.forEach((item) => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });
        modal.style.display = "block";

        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  /* пульсация подарка про наведении мыши на первый блок на странице - main и на саму модалку popup-gift 
    - разные классы анимации */
  function activateAnimationGift() {
    const fixedGifts = document.querySelectorAll("img[data-gift]");
    const mainGiftIcon = document.querySelector(".fixed-gift");
    const mainSection = document.querySelector(".main");

    // при наводе мышки на секию main - анимация подарка
    mainSection.addEventListener("mouseover", () => {
      mainGiftIcon.classList.add("animated", "pulse");
    });
    // если подарок удален - удаляем обработчик событий
    if (!mainGiftIcon) {
      mainSection.removeEventListener(() => activateAnimationGift);
    }
    // перебираем две картинки подарка и активируем разные анимаци при наведении на сам подарок и подарок внутри модалки
    fixedGifts.forEach((gift) => {
      let secondImg = !gift.classList.contains("fixed-gift");
      // подарок внутри модалки
      if (secondImg) {
        document.querySelector(".popup-gift").addEventListener("mouseover", () => {
            gift.classList.add("animated", "tada");
          });
        // подарок на главной странице
      } else {
        gift.addEventListener("mouseover", () => {
          gift.classList.add("animated", "pulse");
        });
      }
    });
  }

  activateAnimationGift();

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          isModalOpen = true;
        }
      });

      if (!isModalOpen) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  //функция открытия модального окна при скролле до конца страницы
  function showModalByScroll(selector) {
    window.addEventListener("scroll", () => {
      // для поддержки старых браузеров два вариант синтаксиса scrollHeight
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // если модальное окно не было открыто пользователем и он доскролил до конца старницы, то вызвать модальное окно по селктору из аргумента '.fixed-gift' - при вызове функции
      if (
        !isModalOpen &&
        window.pageYOffset + document.documentElement.clientHeight >=
          scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  // showModalByTime(".popup-consultation", 40000);
  showModalByScroll(".fixed-gift");
};

export default modals;
