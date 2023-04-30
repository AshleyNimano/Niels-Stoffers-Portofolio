const logo = document.querySelector('#logo');

logo.classList.toggle('reverse-animation');

for(let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', function () {
  const navBar = document.querySelector(".hamburger-div");
  navBar.classList.toggle('active');
});
