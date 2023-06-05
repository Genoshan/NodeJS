// - 1º Entrega - Calculadora Positiva

const sumar = (sumando1, sumando2) => {
    return new Promise((resolve, reject) => {
        if(sumando1 === 0 || sumando2 === 0){
            reject('Operacion innecesaria')
        }
        if (sumando1+sumando2 < 0 ){
            reject('La calculadora solo debe devolver valores positivos')
        }
        else{
            resolve(sumando1+sumando2)
        }
    })
}
const restar = (minuendo, sustraendo) => {
    return new Promise((resolve, reject) => {
        if(minuendo === 0 || sustraendo === 0){
            reject('Operacion Invalida')
        }
        if(minuendo - sustraendo < 0){
            reject('La Calculadora solo puede devolver valores positvos')

        }else{
            resolve(minuendo-sustraendo)
        }
    })
}
const multiplicar = (factor1, factor2) => {
    return new Promise((resolve, reject) => {
        if(factor1*factor2 < 0 ){
            reject('La calculadora solo puede devolver valores positivos')

        }else{
            resolve(factor1*factor2)
        }
    })
}
const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se puede dividir entre cero')

        }else{
            resolve(dividendo/divisor)
        }
    })
}

//Invocaciones de funciones

 const funcionAsincronaSuma = async() => {
    try{
        let resultado = await sumar(5,20)
        console.log(resultado);
    }
    catch (error){
        console.log(error);
    }
}
funcionAsincronaSuma();

 const funcionAsincronaResta = async() => {
    try{
        let resultado = await restar(5,3)
        console.log(resultado);
    }
    catch (error){
        console.log(error);
    }
}
funcionAsincronaResta();

 const funcionAsincronaMultiplicar = async() => {
    try{
        let resultado = await multiplicar(5,-30)
        console.log(resultado);
    }
    catch (error){
        console.log(error);
    }
}
funcionAsincronaMultiplicar();

 const funcionAsincronaDividir = async() => {
    try{
        let resultado = await dividir(5,3)
        console.log(resultado);
    }
    catch (error){
        console.log(error);
    }
}
funcionAsincronaDividir();