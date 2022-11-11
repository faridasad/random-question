const qs = document.querySelectorAll(".Question")
document.body.onkeyup = (e) => {
    qs.forEach(q => {
      q.style.border = "none"
    })

    if (e.keyCode === 82) { // R
        const random = Math.floor(Math.random() * qs.length)
        qs[random].scrollIntoView({behavior: "smooth" /* or <behavior: "auto"> for instant scroll */, block: "center"});
        qs[random].style.border = "3px solid blueviolet";
}}