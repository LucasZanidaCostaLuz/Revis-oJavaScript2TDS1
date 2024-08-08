let metaLivros = 100;

let livrosLidos = ['Dom quixote', '20 mil léguas submarinas', 'Hábitos atômicos', 'A arte da guerra', 'Pequeno Principe'];

let quantoFalta = metaLivros - livrosLidos.length

for (let i = 0; i < livrosLidos.length; i++) { 
    console.log(livrosLidos[i]);  
}

if(livrosLidos.length >= metaLivros){
    console.log("Parabéns! Você atingiu sua meta de leitura!");
} else{
    console.log("Você está progredindo! Faltam ", quantoFalta ,"livros para atingir sua meta.");
}