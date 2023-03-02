const h1Tag = document.querySelector("h1");
const timeZoneContainerTag = document.querySelector(".timeZoneContainer");
const timeZoneLineTag = document.querySelector(".timeZoneLine");
const loadingPageContainerTag = document.querySelector(".loadingPageContainer");

let time = new Date();

setInterval(() => {
  time = new Date();
  h1Tag.textContent = "";
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  const second = time.getSeconds().toString().padStart(2, "0");

  h1Tag.innerText(`${hour}:${minute}:${second}`);
  timeZoneLineTag.style.width = `${h1Tag.offsetWidth}px`;
}, 999);

// sever

fetch("https://fakestoreapi.com/products")
  .then((respone) => {
    return respone.json();
  })
  .then((dataFromSever) => {
    loadingPageContainerTag.style.opacity = 0;
    setTimeout(() => {
      loadingPageContainerTag.style.display = "none";
    }, 1000);
    buildUI(dataFromSever);

    cardContainerTag.style.opacity = 1;
    timeZoneContainerTag.style.opacity = 1;
  })
  .catch((err) => (document.documentElement.innerText = `<h1>${err}</h1>`));

const cardContainerTag = document.querySelector(".cardContainer");

const buildUI = () => {
  data.forEach((element, i) => {
    cardContainerTag.innerHTML += `
    <div class='card' id=${i}>
      <div class='card-body'>
        <a title='click to see the product in full picture' target='_blank' href=${element.image} /><img src='${element.image}' /></a>
        <div class='innerLine'></div>
        <span>${element.title}</span>
        <h4 class='priceTag'>Price: <span>$${element.price}</span></h4>
        </div>
    </div>
    `;
  });
};
