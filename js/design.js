const designOptions = ["option-1", "option-2", "option-3", "option-4"];

let design = "";
if (!localStorage.getItem("design")) {
    design = "option-2";
} else {
    design = localStorage.getItem("design");
}
document.querySelector("body").setAttribute("data-design", design);

document
    .querySelector("input[value='" + design + "']")
    .setAttribute("checked", true);


function updateDesign() {
    let design = document.querySelector("input[name='theme']:checked").value;
    localStorage.setItem("design", design);
    document.querySelector("body").setAttribute("data-design", design);
}