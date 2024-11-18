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
