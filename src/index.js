let playerName = "Agnaldo";

let nivelHeroi = "";

let pontosXP = "8368";

if (pontosXP <= 1000){
  nivelHeroi =  "Ferro";
}
if (pontosXP > 1000 && pontosXP < 2001){
  nivelHeroi = "Bronze";
}
if (pontosXP > 2000 && pontosXP < 5001) {
  nivelHeroi = "Prata";
}
if (pontosXP > 5000 && pontosXP < 7001){
  nivelHeroi = "Ouro";
}
if (pontosXP > 7000 && pontosXP < 8001){
  nivelHeroi = "Platina";
}
if (pontosXP > 8000 && pontosXP < 9001){
  nivelHeroi = "Ascendente";
}
if (pontosXP > 9000 && pontosXP < 10001){
  nivelHeroi = "Imortal";
}
if (pontosXP >= 10001){
  nivelHeroi = "Radiante";
}
console.log("O jogador " + playerName + " tem " + pontosXP + " pontos de XP e esta no nivel " + nivelHeroi +"!");

