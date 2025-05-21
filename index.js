const baseURL = "https://www.thecolorapi.com";
const pickerInput = document.getElementById("picker");
const selectInput = document.getElementById("selector");
const buttonSubmit = document.getElementById("submit");
const colorHexArray = document.getElementsByClassName("color-hex");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");

let scheme = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"];

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault;

  const url = `${baseURL}/scheme?hex=${pickerInput.value.slice(1, 7)}&mode=${
    selectInput.value
  }&count=5`;

  fetchColor(url);
});

const renderColor = () => {
  p1.style.backgroundColor = scheme[0];
  p2.style.backgroundColor = scheme[1];
  p3.style.backgroundColor = scheme[2];
  p4.style.backgroundColor = scheme[3];
  p5.style.backgroundColor = scheme[4];

  c1.innerText = scheme[0];
  c2.innerText = scheme[1];
  c3.innerText = scheme[2];
  c4.innerText = scheme[3];
  c5.innerText = scheme[4];
};


Array.from(colorHexArray).forEach(div => {
    div.addEventListener("click", function () {
        const colorHex = this.innerText; // Get the hex color
        navigator.clipboard.writeText(colorHex).then(() => {
            alert("Copied to clipboard: " + colorHex); // Notify user
        }).catch(err => {
            console.error("Error copying: ", err);
        });
    });
});



const fetchColor = (url) => {
  fetch(url)
    .then((data) => data.json())
    .then((response) => {
      const data = response.colors;
      scheme = data.map((color) => color.hex.value);
      renderColor();
    });
};

renderColor();
