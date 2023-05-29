let variable=['abcHola mundo']

//si el string empieza con abc
if(variable[0].match(/^abcHola mundo2*$/)){
    console.log('si')
}else{
    console.log('no')
}

let expresionR= new RegExp('ca','i');

let vector = ['camion','camion','coche','caliente']

let vectorn= vector.filter((valor)=>{
    if (valor.match(expresionR)) {
        return valor
    }
    return null
})
console.log(vectorn)



