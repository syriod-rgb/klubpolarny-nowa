/* Pasek powrotu do nowej strony — wstrzykiwany na stronach archiwum */
(function(){
  var p = location.pathname;
  var i = p.indexOf('/archiwum/');
  var home = i >= 0 ? p.slice(0, i + 1) : '/';
  var bar = document.createElement('div');
  bar.id = 'pkp-bar';
  bar.innerHTML =
    '<a class="home" href="' + home + '">← POLSKI KLUB POLARNY</a>' +
    '<nav>' +
      '<a href="' + home + 'aktualnosci/">Aktualności</a>' +
      '<a href="' + home + 'galeria/">Galeria</a>' +
      '<a href="' + home + 'o-klubie/">O Klubie</a>' +
      '<a href="' + home + 'kontakt/">Kontakt</a>' +
    '</nav>' +
    '<span class="tag">Wersja archiwalna</span>';
  if (document.body) document.body.insertBefore(bar, document.body.firstChild);
})();
