// Nav shadow on scroll
(function(){
  var nav = document.querySelector('.site-nav');
  if(!nav) return;
  window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
})();

// Mobile nav
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if(!toggle||!links) return;
  toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ links.classList.remove('open'); }); });
})();
