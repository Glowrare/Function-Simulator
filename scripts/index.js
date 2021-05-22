const mainContainer = document.querySelectorAll('main')[0];
const returnHomeBtn = document.querySelector('.back-home-btn');
const homePage = document.querySelector('.homepage');

if (!homePage) {
  returnHomeBtn.classList.remove('invisible-me');
} else {
  returnHomeBtn.classList.add('invisible-me');
}

function showHomePage() {
  /*html*/
  mainContainer.innerHTML = `
  <div class="homepage">
        <header>
          <h1 class="header uppercase">Function Simulator</h1>
        </header>
        <div>
          <ul class="simulator-list-wrapper">
            <li class="simulator-list">
              <button type="button" onclick="showIndexOfPage()">indexOf simulator</button>
            </li>
          </ul>
        </div>
      </div>
  `;
  returnHomeBtn.classList.add('invisible-me');
}
