document.addEventListener('DOMContentLoaded', function () {
  // récupère l'élément audio après le chargement du DOM
  var sound = document.getElementById('fnaf-sound');
  if (!sound) return;

 

  // ajoute l'écouteur au bouton de test de son (si présent)
  var playBtn = document.getElementById('play-sound');
  if (playBtn) {
    playBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      try {
        sound.currentTime = 0;
        sound.play().catch(function () {});
      } catch (e) {
        // ignore
      }
    });
  }

  // helper pour jouer le son (réutilisable)
  function playFnaf() {
    try {
      sound.currentTime = 0;
      sound.play().catch(function () {});
    } catch (e) {
      // ignore
    }
  }

  // jouer le son si on clique sur un lien vers #petit_renard
  document.querySelectorAll('a[href="#petit_renard"]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      // jouer immédiatement (clic utilisateur)
      playFnaf();
      // la navigation par ancre se produira normalement
    });
  });

  // jouer le son si le hash change vers #petit_renard (ex: navigation programmée)
  window.addEventListener('hashchange', function () {
    if (location.hash === '#petit_renard') {
      playFnaf();
    }
  });

  // si la page est chargée avec #petit_renard déjà présent, tenter de jouer
  if (location.hash === '#petit_renard') {
    playFnaf();
  }
});
