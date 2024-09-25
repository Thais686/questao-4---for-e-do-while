let pessoa=1800
let valor=150
let lucro
let lucroAnterior



lucro=(pessoa*valor)-1000


do{


lucroAnterior=lucro
    pessoa=pessoa+50

    valor=valor-10

    lucro=(pessoa*valor)-1000


}while(lucro>lucroAnterior)

console.log(valor)