// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)


const mouse = document.querySelectorAll('.mouse');
console.log(mouse);
window.addEventListener('mousemove', (e) => {
  mouse.forEach((mouse)=> {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
  })
});

const links = document.querySelectorAll('.links');
console.log(links);

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
