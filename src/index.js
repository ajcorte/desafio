let playerName = "Agnaldo";
console.log("Digite o nome do jogador: " + playerName);

let pontosXP = "6002";
console.log("Digite o total de XP do Heroi: " + pontosXP)

let nivelHero = "";

if (pontosXP <= 1000){
  nivelHero =  "Ferro";
}
if (pontosXP > 1000 && pontosXP < 2001){
  nivelHero = "Bronze";
}
if (pontosXP > 2000 && pontosXP < 5001) {
  nivelHero = "Prata";
}
if (pontosXP > 5000 && pontosXP < 7001){
  nivelHero = "Ouro";
}
if (pontosXP > 7000 && pontosXP < 8001){
  nivelHero = "Platina";
}
if (pontosXP > 8000 && pontosXP < 9001){
  nivelHero = "Ascendente";
}
if (pontosXP > 9000 && pontosXP < 10001){
  nivelHero = "Imortal";
}
if (pontosXP >= 10001){
  nivelHero = "Radiante";
}
console.log("O jogador " + playerName + " tem " + pontosXP + " pontos de XP e esta no nivel " + nivelHero +"!");

