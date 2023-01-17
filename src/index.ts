// Cuidado con 👻 any 👻
function cocinar(ingredientePrincipal: any, ingredienteSecundario: any) {
  return ingredientePrincipal + ingredienteSecundario;
}

// Tipos base explícitos e inicializados

const nombre: string = "Bruna";
let esCasada: boolean = true;
let poblacion: number = 220_000_000;

// Tipos base implícitos por inicializados

const nombreApellido = "Ana Secco";
let esSoltera = true;
let edad = 23;

// Arrays

const paises: string[] = [
  "Andorra",
  "Bangladés",
  "Botsuana",
  "Croacia",
  "Fiji",
];

let ahorros: Array<number> = [200, 100, 50, 500, 140];
let deuda: number[] = [100, 300, 150, 510, 340];

let esEuropeo: boolean[] = [true, false, false, true, false];

// Interface

interface Persona {
  fullname: string;
  age: number;
  dni: string;
  isSingle: boolean;
}
function printHuman(ps: Persona) {
  console.log(`Me llamo ${ps.fullname}`);
  console.log(`Tengo ${ps.age} años`);
  console.log(`Mi DNI es ${ps.dni}`);
  console.log(ps.isSingle ? "Estoy solter@" : "No estoy solter@");
}
printHuman({
  fullname: "Paula Oliveira",
  age: 25,
  dni: "02307759",
  isSingle: true,
});
