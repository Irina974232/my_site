document.addEventListener("DOMContentLoaded", function () {
  // Мобильное меню
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-times");
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      mobileMenuBtn.querySelector("i").classList.remove("fa-times");
    });
  });

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Изменение шапки при скролле
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Анимации при загрузке
  const animateElements = document.querySelectorAll(".animate-pop-in");
  animateElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });

  // Видео placeholder
  const videoPlaceholder = document.querySelector(".video-placeholder");
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener("click", function () {
      // Здесь можно добавить код для открытия видео
      alert(
        "Видео будет воспроизведено в модальном окне или на новой странице"
      );
    });
  }

  // Анимация при наведении на карточки
  const cards = document.querySelectorAll(
    ".feature-card, .team-member, .value-card, .blog-post, .resource-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });

  // Активная ссылка в навигации
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (currentPage === linkPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
// Анимация счетчиков
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(animateCounters, 1);
    } else {
      counter.innerText = target;
    }
  });
}

// Запуск анимации при скролле до секции
window.addEventListener("scroll", function () {
  const resultsSection = document.querySelector(".results-section");
  if (isElementInViewport(resultsSection)) {
    animateCounters();
    window.removeEventListener("scroll", this);
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}
