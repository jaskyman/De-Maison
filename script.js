// promo.js

const promoEndDate = new Date();
promoEndDate.setDate(promoEndDate.getDate() + 5); // 5-day countdown

function updateCountdown() {
  const now = new Date();
  const timeLeft = promoEndDate - now;

  if (timeLeft <= 0) {
    document.getElementById("promo1").innerText = "Promo ended!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s left`;

  document.getElementById("promo1").innerText = countdownText;

}

setInterval(updateCountdown, 1000);