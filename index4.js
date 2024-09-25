let pessoa=1800
let valor=150
let lucro
let lucroAnterior=0



lucro=(pessoa*valor)-1000

for(i=150;i>0;i--){

    if(lucro>lucroAnterior){

        lucroAnterior=lucro
        pessoa=pessoa+50
        valor=valor-10
        lucro=(pessoa*valor)-1000

       

    }

    else{

        break;
    }

}

console.log(valor)