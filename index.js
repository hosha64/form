const savebtn = document.getElementById("save");
savebtn.setAttribute("disabled", "disabled");
const checkvalidation = { name: false, family: false };
function disablesavebtn() {
  if (checkvalidation.name && checkvalidation.family) {
    savebtn.removeAttribute("disabled");
  } else {
    savebtn.setAttribute("disabled", "disabled");
  }
}

const el = document.querySelectorAll("input");
console.table(el[0].value);

el.forEach((title, index) => {
  title.addEventListener("input", function (e) {
    const val = e.target.getAttribute("id");
    const a = document.getElementById(val);
    console.log(a.getAttribute);

    if (e.target) {
      savebtn.removeAttribute("disabled");
    } else {
      savebtn.setAttribute("disabled", "disabled");
    }
  });
});
