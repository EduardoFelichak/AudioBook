const btnPlayPause = document.getElementById('play-pause');
const btnAvancar = document.getElementById('proximo');
const btnVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo')
const capitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function configPause(btn){
    btn.classList.remove('bi-play-circle-fill');
    btn.classList.add('bi-pause-circle-fill');
}

function configPlay(btn){
    btn.classList.remove('bi-pause-circle-fill');
    btn.classList.add('bi-play-circle-fill');
}

function play(){
    audioCapitulo.play();
    taTocando = true;
    configPause(btnPlayPause);
}

function pause(){
    audioCapitulo.pause();
    taTocando = false;
    configPlay(btnPlayPause);
}

btnPlayPause.addEventListener('click', ()=>{
    if(!taTocando){
        play();
    }else{
        pause();
    }
})

btnAvancar.addEventListener('click', ()=>{
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = `./dom-casmurro/${capituloAtual}.mp3`
    if(taTocando){
        play();
    }else{
        pause();
    }
    capitulo.innerText = `Capítulo ${capituloAtual}`;
})

btnVoltar.addEventListener('click', ()=>{
    if (capituloAtual === numeroCapitulos-9){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./dom-casmurro/${capituloAtual}.mp3`
    play();
    capitulo.innerText = `Capítulo ${capituloAtual}`;
})