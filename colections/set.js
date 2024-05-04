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


//WeakSet: é um ojbeto que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável


//acoes
//add: adiciona um elemento
//has: retorna true se um elemento existe
//delete: remove um elemento

const ws1 = new WeakSet();

const obj1 = {};
const obj2 = {};

ws1.add(obj1);
ws1.add(obj2);
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));

//Serve para criar coleções de elementos sem se preocupar com possíveis memory leaks (vazamentos de memória)

const circles = new WeakSet();

function Circle(radius) {
  circles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function() {
  if (!circles.has(this)) {
    throw "Invalid object";
  }
  return Math.PI * Math.pow(this.radius, 2);
}

const circle1 = new Circle(10);
const circle2 = {
  radius: 5,
};
console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
