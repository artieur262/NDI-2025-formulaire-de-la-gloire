document.addEventListener('DOMContentLoaded', function () {
  const sound = document.getElementById('fnaf-sound');
  if (!sound) return;

  const playFnaf = () => {
    sound.currentTime = 0;
    const p = sound.play();
    if (p && p.catch) p.catch(() => {});
  };
  
  if (location.hash === '#petit_renard') playFnaf();
  window.addEventListener('hashchange', function () {
    if (location.hash === '#petit_renard') playFnaf();
  });
});
