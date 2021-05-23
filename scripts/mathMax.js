//INDEXOF SIMULATOR
function MathMaxArraySimulator() {
  /*html*/
  mainContainer.innerHTML = `
   <div class="index-of-container">
        <header>
          <h1 class="header"> MathMaxArray simulator</h1>
        </header>
        <div>
          <div class="index-of-select-wrapper">
            <select id="indexOfVarType" class="index-of-select" onchange="toggleArrayOrString()">
              <option value="default">Choose Variable Type</option>
              <option value="Arr">Array</option>
              <option value="Str">String</option>
            </select>
          </div>
          <div class="input-field-wrapper">
          </div>
          <div class="simulator-doc-ref">
            <p>The indexOf Simulator is a function created to works similar to the indexOf() method for arrays and
              strings which returns the first index at which a given element/value can be found in an array/string, or
              -1 if it is not present.
              <br> See details in MDN documentation. <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">For
                the Array method</a> | <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf">For
                the String
                method</a>
            </p>
          </div>
        </div>
      </div>
   `;
  returnHomeBtn.classList.remove('invisible-me');
}
