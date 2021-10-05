const parag_presentation = document.querySelector(".txt-animation")

const typewriter = new Typewriter(parag_presentation,{
    loop: true,
    delay: 75,

});

const pres = "I am Oussama ACHEMLAL     "

typewriter.pause(2500)
        .typeString('I am Oussama ACHEMLAL')
        .pauseFor(300)
        /*.pauseFor(300)*/
        .typeString(',  I am a <strong> Web developper </strong> ')
        .deleteChars(pres.length)
        .typeString(' <strong>      I am a <span style="color: #27ae60;"> front end </span> developper</strong>')
        .pauseFor(2500)
        .start();

function myFunction(x) {
    x.classList.toggle("change");
}
        