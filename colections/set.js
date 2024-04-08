//um Set é um objeto que armazenam elementos únicos, que podem ser de qualquer tipo de dado

const charshets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(Array.from(charshets));

//size: retorna a quantidade de elementos no set
console.log(charshets.size);

//add: adiciona um elemento
charshets.add("UTF-16");
console.log(charshets);

//delete: remove um elemento
charshets.delete("ASCII");
console.log(charshets);

//has: verifica se um elemento existe
console.log(charshets.has("ASCII"));

//forEach: itera sobre o set

charshets.forEach((charshet) => {
  console.log(charshet);
});

//clear: remove todos os elementos
charshets.clear();


//Qual a diferença entre um set e um array?

//O set armazena elementos únicos, enquanto o array pode armazenar elementos duplicados


const array = [];

array.push(10);
array.push(10);
array.push(10);

console.log(array);

const set = new Set();

set.add(10);
set.add(10);

console.log(set);