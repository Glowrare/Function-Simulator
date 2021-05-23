//INDEXOF SIMULATOR
function IndexOfSimulator() {
  /*html*/
  mainContainer.innerHTML = `
   <div class="index-of-container">
        <header>
          <h1 class="header">indexOf simulator</h1>
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

function toggleArrayOrString() {
  const indexOfVarType = document.querySelector('#indexOfVarType');
  const indexOfType = indexOfVarType.value;
  const indexOfArrayInputWrapper = document.querySelector(
    '.index-of-array-input-wrapper'
  );
  const indexOfStringInputWrapper = document.querySelector(
    '.index-of-string-input-wrapper'
  );
  if (indexOfType == 'Str') {
    showIndexOfStringFields();
  } else if (indexOfType == 'Arr') {
    showIndexOfArrayFields();
  } else if (indexOfType == 'default') {
    if (indexOfArrayInputWrapper) {
      indexOfArrayInputWrapper.remove();
    } else if (indexOfStringInputWrapper) {
      indexOfStringInputWrapper.remove();
    }
  }
}

function showIndexOfArrayFields() {
  const indexOfInputField = document.querySelector('.input-field-wrapper');
  /*html */
  indexOfInputField.innerHTML = `
  <div class="index-of-array-input-wrapper">
    <div class="input-grp">
      <label>Enter Array</label>
      <input id="indexOfArray" type="text" placeholder='e.g  "Anthony", "Patrick", "Jane", "Ham" or 1,2,3,4' />
    </div>
    <div class="input-grp">
      <label>Search Element</label>
      <input id="indexOfElement" type="text" placeholder='e.g "Anthony" or 1' />
    </div>
    <div class="input-grp">
      <label>From Index (Optional)</label>
      <input id="indexOfArrayOptional" type="text" placeholder="number" />
    </div>
    <div class="center-flex">
      <button class="classic-btn" id="indexOfStringBtn" onclick="getIndexOfArray()">
        Find indexof
      </button>
    </div>
    <div class="result">
      <p></p>
    </div>
  </div>
  `;
}

function showIndexOfStringFields() {
  const indexOfInputField = document.querySelector('.input-field-wrapper');
  /*html */
  indexOfInputField.innerHTML = `
  <div class="index-of-string-input-wrapper">
    <div class="input-grp">
      <label>Enter string</label>
      <input id="indexOfString" type="text" placeholder="e.g “Welcome to string indexOf simulator”" />
    </div>
    <div class="input-grp">
      <label>Search Value</label>
      <input id="indexOfValue" type="text" placeholder='e.g  "string"' />
    </div>
    <div class="input-grp">
      <label>From Index (Optional)</label>
      <input id="indexOfStringOptional" type="text" placeholder="number" />
    </div>
    <div class="center-flex">
      <button class="classic-btn" id="indexOfStringBtn" onclick="getIndexOfString()">Find indexof</button>
    </div>
    <div class="result">
      <p></p>
    </div>
  </div>
  `;
}

function indexOfSimulator(word, char, type, startIndex = 0) {
  for (let k = startIndex; k < word.length; k++) {
    let charLength = char.length;
    let newString = '';
    if (charLength > 1) {
      let firstChar = char.substring(0, 1);

      if (word[k] == firstChar) {
        let firstIndex = k;
        for (let i = 0; i < charLength; i++) {
          const eachChar = char[i];
          if (eachChar == word[k]) {
            newString = newString + word[k];
            k++;
          }
          if (i == charLength - 1 && newString == char) {
            // return firstIndex;
            return `The index of ${char} in the entered ${type} "${word}" starting from index ${startIndex} is ${firstIndex}`;
          } else if (i == charLength - 1 && newString !== char) {
            // return -1;
            return `The index of ${char} in the entered ${type} "${word}" starting from index ${startIndex} is -1`;
          }
        }
      }
    } else if (word[k] == char) {
      // return k;
      return `The index of ${char} in the entered ${type} "${word}" starting from index ${startIndex} is ${k}`;
    }
  }
  // return -1;
  return `The index of ${char} in the entered ${type} "${word}" starting from index ${startIndex} is -1`;
}

function getIndexOfString() {
  const enteredString = document.querySelector('#indexOfString').value.trim();
  const searchValue = document.querySelector('#indexOfValue').value.trim();
  const optionalIndex = document.querySelector('#indexOfStringOptional').value;
  const searchResult = document.querySelector('.result p');
  const type = 'Array';

  if (enteredString == '' || searchValue == '') {
    alert('Entered string/Search value cannot be empty');
  } else if (optionalIndex == '') {
    const result = indexOfSimulator(enteredString, searchValue, type);
    searchResult.textContent = result;
  } else if (isNaN(parseInt(optionalIndex))) {
    const userChoice = confirm(
      'Invalid "Start Index" provided. Would you like to proceed with the default of 0?'
    );
    if (userChoice === true) {
      const result = indexOfSimulator(enteredString, searchValue, type);
      searchResult.textContent = result;
    } else {
      return;
    }
  } else {
    const result = indexOfSimulator(
      enteredString,
      searchValue,
      type,
      parseInt(optionalIndex)
    );
    searchResult.textContent = result;
  }
}

function getIndexOfArray() {
  let regex = /\s*,\s*/;
  const enteredArray = document
    .querySelector('#indexOfArray')
    .value.trim()
    .split(regex);
  const searchValue = document
    .querySelector('#indexOfElement')
    .value.trim()
    .split(',');
  const optionalIndex = document.querySelector('#indexOfArrayOptional').value;
  const searchResult = document.querySelector('.result p');
  const type = 'Array';
  if (enteredArray == '' || searchValue == '') {
    alert('Entered string/Search value cannot be empty');
  } else if (optionalIndex == '') {
    const result = indexOfSimulator(enteredArray, searchValue, type);
    console.log(
      `enteredArray ==> ${enteredArray}; searchValue ==> ${searchValue}`
    );
    searchResult.textContent = result;
  } else if (isNaN(parseInt(optionalIndex))) {
    const userChoice = confirm(
      'Invalid "Start Index" provided. Would you like to proceed with the default of 0?'
    );
    if (userChoice === true) {
      const result = indexOfSimulator(enteredArray, searchValue, type);
      searchResult.textContent = result;
    } else {
      return;
    }
  } else {
    const result = indexOfSimulator(
      enteredArray,
      searchValue,
      type,
      parseInt(optionalIndex)
    );
    searchResult.textContent = result;
  }
}
