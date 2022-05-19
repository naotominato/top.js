function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');

//

const target1 = document.getElementById('menu');
target1.addEventListener('click', () => {
  target1.classList.toggle('open');
});

//

const tabs = document.getElementsByClassName('tab-menu__item');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}

function tabSwitch() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content__item')[index].classList.add('show');
}

//

const target2 = document.getElementById('menu1');
target2.addEventListener('click', () => {
  target2.classList.toggle('open1');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
});

//９　モーダルウィンドウ

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});