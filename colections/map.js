//objeto que armazena um conjunto de chaes e valores que podem ser de qualquqer tipo de dado
const timeUnits = new Map([
  ["second", 1],
  ["minute", 60],
  ["hour", 3600],
]);

// console.log(Array.from(timeUnits));

// size: retorna a quantidade de elementos no mapa.

console.log(timeUnits.size);
// set: adiciona um oar de chave e valor

timeUnits.set("day", 86400);

console.log(timeUnits);

// forEach: itera sobre o mapa
timeUnits.forEach((value, key) => {
  console.log(key, value);
});

//HAS: Verifica se uma chave existe no mapa

console.log(timeUnits.has("hour"));

// get: Retorna o valor de uma chave

console.log(timeUnits.get("hour"));

//delete: Remove um par chave/valor

timeUnits.delete("day");

console.log(timeUnits);
// clear: Remove todos os pares chave/valor

timeUnits.clear();

console.log(timeUnits);

//Qual diferença entre um objeto e um mapa?

//As chaves do mapa podem ser de qualquer tipo de dado, enquanto as chaves do objeto são sempre strings ou symbols

const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);

//return string, string, string, string

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));

//return Number, String, Boolean, String

//WeakMap: é um objeto similar ao map quer permite apenas chaves do tipo Object, mantem as referencias de forma fraca, sendo volátil e não
//Serve para implementar colecao com referencia fraca para nao se preocupar com memory leak

const wm1 = new WeakMap();

const obj1 = {};
const obj2 = {};

//set: adiciona um par chave/valor
wm1.set(obj1, "Object 1");
wm1.set(obj2, "Object 2");
//has: verifica se uma chave existe no mapa
console.log(wm1.has(obj1));
//get: retorna o valor de uma chave
console.log(wm1.get(obj1));
//delete: remove um par chave/valor
wm1.delete(obj1);

const areas = new WeakMap();

const rectangle1 = {
  x: 10,
  y: 2,
};

const rectangle2 = {
  x: 5,
  y: 3,
};

function calcArea(rectangle) {
  if (areas.has(rectangle)) {
    console.log("Usando cache");
    return areas.get(rectangle);
  }
  const area = rectangle.x * rectangle.y;
  areas.set(rectangle, area);
  return area;
}

console.log(calcArea(rectangle1));
console.log(calcArea(rectangle2));
