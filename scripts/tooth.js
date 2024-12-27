const teeth = document.querySelectorAll(".tooth");

let selectedTeeth = [];

teeth.forEach((tooth) => {
  tooth.addEventListener("click", () => {
    const toothId = tooth.id;

    if (selectedTeeth.includes(toothId)) {
      tooth.classList.remove("selected_tooth");
      selectedTeeth = selectedTeeth.filter((id) => id !== toothId);
    } else {
      if (selectedTeeth.length === 2) {
        const firstToothId = selectedTeeth.shift();
        document
          .getElementById(firstToothId)
          .classList.remove("selected_tooth");
      }

      tooth.classList.add("selected_tooth");
      selectedTeeth.push(toothId);
    }

    console.log("Selected teeth:", selectedTeeth);
  });
});
