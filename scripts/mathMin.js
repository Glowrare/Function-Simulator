//Math.min(...arr) SIMULATOR
function MathMinArraySimulator() {
  /*html*/
  mainContainer.innerHTML = `
   <div class="index-of-container">
        <header>
          <h1 class="header"> MathMinArray simulator</h1>
        </header>
        <div>
          <div class="input-field-wrapper">
          <div class="index-of-array-input-wrapper">
    <div class="input-grp">
      <label>Enter Array</label>
      <input id="arrayMin" type="text" placeholder='e.g 1, 2, 3, 4, 5' />
    </div>
    <div class="center-flex">
      <button class="classic-btn" onclick="getArrayMin()">
        Find Min Element Value
      </button>
    </div>
    <div class="result">
      <p></p>
    </div>
  </div>
          </div>
          <div class="simulator-doc-ref">
            <p>The MathMinArray Simulator is a function created to mimic the function of <code>Math.min.apply(null, numArray)</code> or <code>Math.min(...arr)</code> methods which return the minimum element in a numeric array.
              <br> See details in MDN documentation. <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min">Math.min()</a>
            </p>
          </div>
        </div>
      </div>
   `;
  returnHomeBtn.classList.remove('invisible-me');
}

function findArrayMinVal(arrayNum) {
  let minVal = 0;
  minVal = arrayNum[0];
  for (let i = 0; i < arrayNum.length; i++) {
    let currentVal = arrayNum[i];
    if (minVal > currentVal) {
      minVal = currentVal;
    }
  }
  return `The Minimum Element in the array is ${minVal}`;
}

function getArrayMin() {
  let regex = /\s*,\s*/;
  const enteredArray = document.querySelector('#arrayMin').value.trim();
  const convertedArray = enteredArray.split(regex).map((x) => {
    return parseInt(x);
  });
  const searchResult = document.querySelector('.result p');
  if (enteredArray == '') {
    alert('Entered Array field cannot be empty');
  } else {
    const result = findArrayMinVal(convertedArray);
    searchResult.textContent = result;
  }
}
