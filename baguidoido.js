// negocio q faz o tempo funcionar (check)
function formatTimeRemaining(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Função para atualizar a contagem regressiva (chekeke)
function updateCountdown() {
  const countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach((element) => {
    const endTime = new Date(element.dataset.endTime).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining > 0) {
      element.textContent = '' + formatTimeRemaining(timeRemaining);
    } else {
      element.textContent = 'Item lançado!';
    }
  });
}

// Atualiza a contagem regressiva a cada sec
setInterval(updateCountdown, 1000);
