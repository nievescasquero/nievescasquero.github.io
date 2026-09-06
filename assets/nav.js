(function(){
  var toggle = document.getElementById('nc-nav-toggle');
  var menu = document.getElementById('nc-mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function(){
    var isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
