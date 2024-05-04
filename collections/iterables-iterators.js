


// São convenções implementadas por Arrays, Maps, sets e strings que os tornam iteráveis por meio de um protocolo de iteração.Arrays

const languages = ["Fortran", "Lisp", "COBOL"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

for (let i in languages){
    console.log(languages[i])
}

languages.forEach((language)=> {
    console.log(language)
})


for(let language of languages){
    console.log(language)
}

//Pode ser aplicado a outros tipos de dados, como strings, maps e sets