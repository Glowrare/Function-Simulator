//.join() SIMULATOR
function joinSimulator() {
  /*html*/
  mainContainer.innerHTML = `
   <div class="index-of-container">
        <header>
          <h1 class="header"> Join simulator</h1>
        </header>
        <div>
          <div class="input-field-wrapper">
          <div class="index-of-array-input-wrapper">
    <div class="input-grp">
      <label>Enter Array</label>
      <input id="arraytoJoin" type="text" placeholder='e.g Banana, Orange, Apple, Mango' />
    </div>
    
    <div class="input-grp">
      <label>Separator (Optional)</label>
      <input id="separatorOptional" type="text" placeholder="Default is comma (,)" />
    </div>
    <div class="center-flex">
      <button class="classic-btn" onclick="getjoinedString()">
        Get Result
      </button>
    </div>
    <div class="result">
      <p></p>
    </div>
  </div>
          </div>
          <div class="simulator-doc-ref">
            <p>The join Simulator function works like join() method which returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
              <br> See details in MDN documentation. <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">Array.prototype.join()</a>
            </p>
          </div>
        </div>
      </div>
   `;
  returnHomeBtn.classList.remove('invisible-me');
}

function joinArrayIntoString(array, separator = ',') {
  let newString = array[0];
  for (let i = 1; i < array.length; i++) {
    newString = `${newString}${separator}${array[i]}`;
  }
  return `Joined string ==> ${newString}`;
}

function getjoinedString() {
  let regex = /\s*,\s*/;
  const enteredArray = document
    .querySelector('#arraytoJoin')
    .value.trim()
    .split(regex);
  const optionalSeparator = document.querySelector('#separatorOptional').value;
  const searchResult = document.querySelector('.result p');

  if (enteredArray == '') {
    alert('Entered Array cannot be empty');
  } else if (optionalSeparator == '') {
    const result = joinArrayIntoString(enteredArray);
    searchResult.textContent = result;
  } else {
    const result = joinArrayIntoString(enteredArray, optionalSeparator);
    searchResult.textContent = result;
  }
}
