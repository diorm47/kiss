const stabs = document.querySelector(".tabs_list");
const stabButton = document.querySelectorAll(".filter_btn");
const scontents = document.querySelectorAll(".method_card");

if (stabs) {
  stabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("filter_btn")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      stabButton.forEach((btn) => {
        btn.classList.remove("active_filter_btn");
      });
      target.classList.add("active_filter_btn");

      scontents.forEach((content) => {
        content.classList.remove("active_method_card");
      });
      const element = document.getElementById(id);
      element.classList.add("active_method_card");
    }
  };
}
