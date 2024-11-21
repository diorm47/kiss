function searchToggle() {
  document
    .querySelector(".search_wrapper")
    .classList.toggle("active_search_wrapper");
}

function menuToggle() {
  document
    .querySelector(".mob_menu_wrapper")
    .classList.toggle("visible_mob_menu_wrapper");
}

document.querySelectorAll(".faq_item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("faq_item_active");

    document.querySelectorAll(".faq_item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("faq_item_active");
      }
    });
  });
});
