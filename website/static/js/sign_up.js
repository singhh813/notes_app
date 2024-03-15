document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');
    const sign_upButton = document.querySelector('button'); document.addEventListener('mousemove', function (e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      background.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
    sign_upButton.addEventListener('click', function () {
        sign_upButton.classList.add('clicked');
      setTimeout(() => {
        sign_upButton.classList.remove('clicked');
      }, 300);
    });
  });
  
  const sign_upContainer = document.getElementById('sign_upContainer');
  
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        sign_upContainer.classList.add('no-animation');
    });
  
    input.addEventListener('blur', () => {
        sign_upContainer.classList.remove('no-animation');
    });
  });
  