  function toExchangeImage(element) {
  const mainImg = document.getElementById("mainProductImage");
  mainImg.src = element.src;
  mainImg.alt = element.alt;
}