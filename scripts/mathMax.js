//Math.max(...arr) SIMULATOR
function MathMaxArraySimulator() {
  /*html*/
  mainContainer.innerHTML = `
   <div class="index-of-container">
        <header>
          <h1 class="header"> MathMaxArray simulator</h1>
        </header>
        <div>
          <div class="input-field-wrapper">
          <div class="index-of-array-input-wrapper">
    <div class="input-grp">
      <label>Enter Array</label>
      <input id="arrayMax" type="text" placeholder='e.g 1, 2, 3, 4, 5' />
    </div>
    <div class="center-flex">
      <button class="classic-btn" onclick="getArrayMax()">
        Find Max Element Value
      </button>
    </div>
    <div class="result">
      <p></p>
    </div>
  </div>
          </div>
          <div class="simulator-doc-ref">
            <p>The MathMaxArray Simulator is a function created to mimic the function of <code>Math.max.apply(null, numArray)</code> or <code>Math.max(...arr)</code> methods which return the maximum element in a numeric array.
              <br> See details in MDN documentation. <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max">Math.max()</a>
            </p>
          </div>
        </div>
      </div>
   `;
  returnHomeBtn.classList.remove('invisible-me');
}

function findArrayMaxVal(arrayNum) {
  let maxVal = 0;
  maxVal = arrayNum[0];
  for (let i = 0; i < arrayNum.length; i++) {
    let currentVal = arrayNum[i];
    if (maxVal < currentVal) {
      maxVal = currentVal;
    }
  }
  return `The Maximum Element in the array is ${maxVal}`;
}

function getArrayMax() {
  let regex = /\s*,\s*/;
  const enteredArray = document.querySelector('#arrayMax').value.trim();
  const convertedArray = enteredArray.split(regex).map((x) => {
    return parseInt(x);
  });
  const searchResult = document.querySelector('.result p');
  if (enteredArray == '') {
    alert('Entered Array field cannot be empty');
  } else {
    const result = findArrayMaxVal(convertedArray);
    searchResult.textContent = result;
  }
}
