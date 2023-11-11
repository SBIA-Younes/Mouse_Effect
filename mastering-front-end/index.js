// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)


window.addEventListener('mousemove', (e) => {
  console.log(`Position X: ${e.pageX}\nPosition Y: ${e.pageY}`);
  round_1.style.left = e.pageX + 'px';
  round_1.style.top = e.pageY + 'px';
  round_2.style.left = e.pageX + 'px';
  round_2.style.top = e.pageY + 'px';
  round_3.style.left = e.pageX + 'px';
  round_3.style.top = e.pageY + 'px';
  console.log(e.target);

});

const links = document.querySelectorAll('.links');
console.log(links);

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
