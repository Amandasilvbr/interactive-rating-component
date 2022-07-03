const btns = document.querySelectorAll(".btn");
const submit = document.getElementById("submit-btn");
submit.addEventListener("click", submitClick);
let rating=0;

btns.forEach(btn => {
    btn.addEventListener("click", onClick);
    function onClick() {
        btn.style.color = "white";
        btn.style.backgroundColor = "hsl(217, 12%, 63%)";
        rating = btn.textContent;
    }
})

function submitClick(onClick) {
    document.getElementById("card-1").style.display = "none";
    document.getElementById("card-2").style.display = "block";
    document.querySelector("span").textContent = rating;
}