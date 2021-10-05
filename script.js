const parag_presentation = document.querySelector(".txt-animation")

const typewriter = new Typewriter(parag_presentation,{
    loop: true,
    delay: 75,

});

const pres = "I am Oussama ACHEMLAL     "

/*affichage texte de présentation animé*/
typewriter.pause(2500)
        .typeString('I am Oussama ACHEMLAL')
        .pauseFor(300)
        /*.pauseFor(300)*/
        .typeString(',  I am a <strong> Web developper </strong> ')
        .deleteChars(pres.length)
        .typeString(' <strong>      I am a <span style="color: #27ae60;"> front end </span> developper</strong>')
        .pauseFor(2500)
        .start();

/* fonction pour bnt burger */
function myFunction(x) {
    x.classList.toggle("change");

}

const btn_burger = document.querySelector('.menu-btn-burger');
document.addEventListener('click', function(event) {
  if (!event.target.matches('.nav-menu')) return;
  btn_burger.classList.toggle('nav-open');
});

        