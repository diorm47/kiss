const tabs = document.querySelector(".tabs_list");
const tabButton = document.querySelectorAll(".revs_btn");
const contents = document.querySelectorAll(".reviews_block");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("revs_btn")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("revs_btn_active");
      });
      target.classList.add("revs_btn_active");

      contents.forEach((content) => {
        content.classList.remove("reviews_block_active");
      });
      const element = document.getElementById(id);
      element.classList.add("reviews_block_active");
    }
  };
}

