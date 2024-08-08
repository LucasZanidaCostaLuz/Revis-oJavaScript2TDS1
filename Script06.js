let arsenal = ["Mega Blaster","Megaforce Blaster","Robo Blaster","Robo Blade", "Wild Sword"]

let ordemAtaque = []

ordemAtaque.push('Gibson')
ordemAtaque.push(arsenal[4]);
ordemAtaque.push(arsenal[2]);
ordemAtaque.push(arsenal[0]);
ordemAtaque.push(arsenal[3]);
ordemAtaque.push(arsenal[1]);

for (let i = 0; i < ordemAtaque.length; i++) {    
    if(i == 0){
        console.log('meu nome é ', ordemAtaque[i]);
    } else {
        console.log('Ataque', i, ordemAtaque[i]);
    }
}
