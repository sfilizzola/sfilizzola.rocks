const pro = document.getElementById("pro");
const fun = document.getElementById("fun");
const btnPro = document.getElementById("btn-pro");
const btnFun = document.getElementById("btn-fun");

const setMode = (mode) => {
  const isPro = mode === "pro";
  pro.classList.toggle("hidden", !isPro);
  fun.classList.toggle("hidden", isPro);
  btnPro.setAttribute("aria-pressed", String(isPro));
  btnFun.setAttribute("aria-pressed", String(!isPro));
  localStorage.setItem("mode", mode);
};

btnPro.addEventListener("click", () => setMode("pro"));
btnFun.addEventListener("click", () => setMode("fun"));

document.getElementById("year").textContent = new Date().getFullYear();
setMode(localStorage.getItem("mode") || "pro");


