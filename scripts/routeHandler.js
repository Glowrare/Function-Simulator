let navBtns = Array.from(document.getElementsByClassName('simulator-navbtns'));

navBtns.forEach((nav) => {
  let id = nav.id;

  nav.addEventListener('click', (ev) => {
    history.pushState({ id: id }, '', `/#${id}`);
    let pageTitle = `${id.slice(0, -9)} ${id.slice(-9)}`;
    document.title = pageTitle;
    function callRelatedFxn(fxnName) {
      window[fxnName]();
    }
    callRelatedFxn(id);
    window.scrollTo(0, 0);
  });
});

document.getElementById('aboutPage').addEventListener('click', (ev) => {
  history.pushState({ id: 'aboutPage' }, '', '/#aboutPage');
  document.title = 'About FS Project';
  aboutPage();
  window.scrollTo(0, 0);
});

if (location.hash == '#aboutPage') {
  document.title = 'About FS Project';
  history.replaceState({ id: 'aboutPage' }, '');
  aboutPage();
} else if (!location.hash || location.hash.slice(-9) !== 'Simulator') {
  history.replaceState({ id: null }, '', './');
  document.title = 'Function Simulator';
  window.scrollTo(0, 0);
} else {
  let hash = location.hash.replace('#', '');
  document.title = `${hash.slice(0, -9)} ${hash.slice(-9)}`;
  history.replaceState({ id: hash }, '');
  function callRelatedFxn(fxnName) {
    window[fxnName]();
  }
  callRelatedFxn(hash);
  window.scrollTo(0, 0);
}
