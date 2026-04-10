const buttons = Array.from(document.querySelectorAll(".format-btn"));
const image = document.getElementById("certificate-image");
const pdf = document.getElementById("certificate-pdf");

const sources = {
  png: "assets/CERTIFICATE -  MDJ FORGE LTD -1.jpg",
  pdf: "assets/CERTIFICATE -  MDJ FORGE LTD -1.pdf",
};

function setFormat(format) {
  const isPng = format === "png";

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.format === format);
  });

  if (image) {
    image.style.display = isPng ? "block" : "none";
    image.src = sources.png;
  }

  if (pdf) {
    pdf.style.display = isPng ? "none" : "block";
    pdf.src = sources.pdf;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setFormat(button.dataset.format);
  });
});

setFormat("png");
