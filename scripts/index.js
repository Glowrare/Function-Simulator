const mainContainer = document.querySelectorAll('main')[0];
const returnHomeBtn = document.querySelector('.back-home-btn');
const homePage = document.querySelector('.homepage');

if (!homePage) {
  returnHomeBtn.classList.remove('invisible-me');
} else {
  returnHomeBtn.classList.add('invisible-me');
}

function aboutPage() {
  /*html*/
  mainContainer.innerHTML = `
  <div class="about-project">
    <header>
      <h1 class="header uppercase">Function Simulator</h1>
    </header>
    <div>
      <p>
        Function Simulator Project is an open source project created by Ajibolanle Gloria to write custom vanilla JS function logic to mimic diverse JS methods. <br />
        
        <br />
        The primary aim of this exercise is to practice logic reasoning and basic DOM manipulation. The functions can also be adapted for diverse related use in individual projects. <br />
        <br />
        The project is open source so collaboration and suggestions are welcome for improvement and to create a robust function base.
      </p>
    </div>
  </div>
  `;
  returnHomeBtn.classList.remove('invisible-me');
}
