const message = document.getElementById("form-message");
const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const participants = Number(document.getElementById("participants").value);
  if (name === "" || email === ""|| participants <= 0) {
    message.textContent = "Впиши своє ім'я";

  } else {
    message.textContent = "Реєстрація успішна!";
  }
});const calculateButton = document.getElementById("calculate");
const priceMessage = document.getElementById("price-message");

calculateButton.addEventListener("click", function () {
    const tickets = Number(document.getElementById("tickets").value);
const ticketPrice = Number(document.getElementById("category").value);
const price = tickets * ticketPrice;
    let discount = 0;

    if (tickets >= 5) {
      discount = price * 0.2;
    } else if (tickets >= 3) {
      discount = price * 0.1;
    }
    const promo = document.getElementById("promo").value;
    let promoDiscount = 0;
    
    if (promo === "EVENT50") {
      promoDiscount = 50;
    }
    
    let total = price - discount - promoDiscount;
    
    if (total < 0) {
      total = 0;
    }
    
    priceMessage.textContent = "Початкова вартість: " + price + " грн. Знижка: " + discount + " грн. Промокод: " + promoDiscount + " грн. До сплати: " + total + " грн";
});