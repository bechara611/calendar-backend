let variable='abcHola mundo'

//si el string empieza con abc
if(variable.match(/^abcHola mundo*$/)){
    console.log('si')
}else{
    console.log('no')
}




// Match a string that ends with abc, similar to LIKE '%abc'
if (theString.match(/^.*abc$/)) 
{ 
    /*Match found */
}