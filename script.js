let jugador = 0;
let maquina = 0;
let rondas = 0;
let maxRondas = 5;

function play(userChoice){

    if(rondas >= maxRondas) return;

    const opciones = ['piedra', 'papel', 'tijera'];
    const maquinaChoice = opciones[Math.floor(Math.random()*3)];

    let resultado ='';

    if(userChoice===maquinaChoice){
        resultado = 'Empate';
    }else if(
        (userChoice === 'piedra' && maquinaChoice === 'tijera') ||
        (userChoice === 'papel' && maquinaChoice === 'piedra') ||
        (userChoice === 'tijera' && maquinaChoice === 'papel') 
    ){
        resultado = `Ganaste! ${userChoice} vence a ${maquinaChoice}`;
        jugador++;
    }else{
        resultado = `Perdiste ${maquinaChoice} vence a ${userChoice}`;
        maquina++;
    }

    rondas++;

    document.getElementById('result').textContent = resultado;
    document.getElementById('puntaje').textContent = `Jugador: ${jugador} | Máquina: ${maquina} | Ronda: ${rondas}/${maxRondas}`;

    if(rondas==maxRondas){
        let ganador = '';
        if(jugador > maquina){
            ganador = '¡Ganaste la partida!'
        }else if(maquina < jugador){
            ganador = 'La máquina ganó esta vez'
        }else{
            ganador = '¡Empate total!'
        }
        document.getElementById('final').textContent = ganador;
    }

}

function resetGame (){
    jugador = 0;
    maquina = 0;
    rondas = 0;

    document.getElementById('result').textContent = '';
    document.getElementById('puntaje').textContent = 'Jugador = 0 | Máquina = 0 | Rondas = 0/5';
    document.getElementById('final').textContent = '';
}

