let red = document.getElementById("red"),
    green = document.getElementById("green"),
    blue = document.getElementById("blue"),
    paragraph = document.querySelector("p");

red.addEventListener('change', () => paragraph.style.color = `rgb(${red.value}, ${blue.value}, ${green.value})`);
green.addEventListener('change', () => paragraph.style.color = `rgb(${red.value}, ${blue.value}, ${green.value})`);
blue.addEventListener('change', () => paragraph.style.color = `rgb(${red.value}, ${blue.value}, ${green.value})`);