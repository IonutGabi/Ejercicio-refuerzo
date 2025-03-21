// 1. Crea un programa que haga un cambio de euros a dólares. Y muestra el resultado por pantalla. `1 euro es 1.09 dólares`

const cambioEurosADolares = (numero: number) => {
  const cambio = 1.09;
  const resultado = numero * cambio;
  console.log(`${numero} euros son ${resultado} dólares`);
};

cambioEurosADolares(20);

// 2. Lo mismo que el anterior pero create un input y un botón en el que introduzcas la cantidad a convertir.

const calcularCambio = () => {
  const cantidadACambiar = document.querySelector(".cantidadACambiar");
  if (cantidadACambiar && cantidadACambiar instanceof HTMLInputElement) {
    const cantidad = cantidadACambiar.value;
    const cambio = 1.09;
    const resultado = parseInt(cantidad) * cambio;

    console.log(`${cantidad} euros son ${resultado} dólares`);
  }
};

const button = document.querySelector(".calcularCambio");
if (button && button instanceof HTMLButtonElement) {
  button.addEventListener("click", calcularCambio);
}

/* 3. Tenemos un servicio de soporte que nos facturan por horas, desarrolla un programa que le indiques el número de horas que ha realizado y calcule el total que hay que pagar.

 Nota la tarifa por hora puede ser un valor constante.

 Total a pagar = Horas trabajadas × Tarifa por hora */

let horasTrabajadas = 0;

const handleHorasTrabajadas = (): void => {
  const horasTrabajadasInput = document.querySelector(".horasTrabajadas");

  if (
    horasTrabajadasInput &&
    horasTrabajadasInput instanceof HTMLInputElement
  ) {
    horasTrabajadasInput.addEventListener("input", () => {
      horasTrabajadas = parseInt(horasTrabajadasInput.value);
    });
  }
};
const handleCalculoPagar = (): void => {
  const calculoPagar = document.querySelector(".calculoPagar");
  if (calculoPagar && calculoPagar instanceof HTMLButtonElement) {
    calculoPagar.addEventListener("click", () =>
      calculaTarifa(horasTrabajadas)
    );
  }
};
const calculaTarifa = (numero: number) => {
  const tarifaPorHora = 1.5;
  const resultado = numero * tarifaPorHora;
  console.log(`El total a pagar es ${resultado}`);
};
handleHorasTrabajadas();
handleCalculoPagar();

//  4. Queremos mostrar el día sin IVA, desarrolla una aplicación en la que le de un precio, calcule su IVA y me muestre el precio sin IVA y cuanto me ahorro en IVA, suponiendo que es un 21%.

const calculoIva = (numero: number) => {
  const iva = 1.21;
  const resultado = numero * iva;
  const ahorro = Math.round(resultado - numero);
  console.log(
    `El precio sin IVA es ${numero} €, con IVA es ${resultado} € y en IVA te ahorras ${ahorro} €`
  );
};
calculoIva(20);

// 5. Igual que el 4, pero eligiendo el tipo de IVA. Puedes crearte un select, con distintos tipos de iva y que se haga el cálculo.

const handleSelection = (
  domElement: HTMLSelectElement,
  callback: (iva: number) => void
): void => {
  domElement.addEventListener("change", async () => {
    const valorSeleccionado = parseInt(domElement.value);
    const iva = 1 + valorSeleccionado / 100;
    callback(iva);
  });
};

const precioConIva = (numero: number, iva: number): number => numero * iva;

const calculoIvaDinamico = (numero: number) => {
  const select = document.getElementById("ivaSelect");
  if (select && select instanceof HTMLSelectElement) {
    handleSelection(select, (iva) => {
      const resultado = precioConIva(numero, iva);
      const ahorro = Math.round(resultado - numero);
      console.log(
        `El precio sin IVA es ${numero} €, con IVA es ${resultado} € y en IVA te ahorras ${ahorro} €`
      );
    });
  }
};
calculoIvaDinamico(20);

// 6. ¡Por fin es viernes! Escribe un programa que te diga cuantas horas te quedan para llegar al viernes.
/*
> ¡¡PISTAS!!
> Para trabajar con fechas JavaScript nos ofrece el objeto [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
> Para obtener el día actual podemos usar la función: `getDay`.
> El siguiente paso sería obtener los días que faltan hasta el viernes: `(5 - dia Actual + 7) % 7`.
> Si los dias que faltan son igual a 0 y las horas mayores o igual a 0 los días que faltan son 7 y si no cumple esta condición
> el valor de días que faltan será el valor del paso anterior. */

const calculoDiasRestantes = (diaActual: number): number =>
  (5 - diaActual + 7) % 7;

const calculoHorasRestantes = (
  diaActual: number,
  horaActual: number
): number => {
  let diasRestantes = calculoDiasRestantes(diaActual);

  const horasRestantesHoy = 24 - horaActual;
  const horasRestantes = diasRestantes * 24 + horasRestantesHoy;

  return horasRestantes;
};

const calculosDiasHastaElViernes = (numero: number) => {
  const hoy = new Date(numero);
  const diaActual = hoy.getDay();
  const horaActual = hoy.getHours();

  let diasRestantes = calculoDiasRestantes(diaActual);

  if (diasRestantes === 0 && horaActual >= 0) {
    diasRestantes = 7;
  } else {
    diasRestantes;
  }
  const horasRestantes = calculoHorasRestantes(diaActual, horaActual);

  console.log(
    `Faltan aproximadamente ${diasRestantes} días y ${horasRestantes} horas para el viernes`
  );
};

calculosDiasHastaElViernes(Date.now());

/* 7. Introduce un número por un input, y que te muestre la sucesión de [Fibonacci](https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci) según el número introducido.
Por ejemplo, si introduzco un 8, la salida tiene que ser: `0, 1, 1, 2, 3, 5, 8, 13`*/

const handleInputFibonacci = () => {
  const stringFibonacci = document.getElementById("fibonacci");
  if (stringFibonacci && stringFibonacci instanceof HTMLInputElement) {
    stringFibonacci.addEventListener("keydown", (e) => {
      const numeroParaFibonacci = parseInt(stringFibonacci.value);
      if (e.key === "Enter") {
        calculoSerieFibonacci(numeroParaFibonacci);
      }
    });
  }
};

const calculoSerieFibonacci = (numero: number) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  console.log(fibonacci);
};
handleInputFibonacci();

/*
 8. Realiza un programa que pida una hora y muestre un mensaje.
- Buenos días (6 a 12).
- Buenas Tardes (13 a 20).
- Buenas Noches (20 a 5).
*/

const muestraMensajeSegunHora = (numero: number) => {
  if (numero >= 6 && numero < 12) {
    console.log("Buenos Días");
  } else if (numero >= 12 && numero < 20) {
    console.log("Buenas Tardes");
  } else if (numero >= 20 || numero < 6) {
    console.log("Buenas Noches");
  }
};

muestraMensajeSegunHora(5);

/* 9. Una asignatura está compuesta por cuatro examenes, para aprobar hay que sacar más de un 3 en cada uno de ellos, y la media de los 4 examenes debe tener en total una puntuación de más de 5 (el examen se puntua de 0 a 10), crea un programa en el que introduzcas cuatro notas y te diga si eres apto o no.
Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):*/

const handleInputNotas = (domElement: NodeList, arrayNotas: number[]) => {
  domElement.forEach((nota) => {
    if (nota && nota instanceof HTMLInputElement) {
      const transformStringToNumber = parseInt(nota.value);
      arrayNotas.push(transformStringToNumber);
    }
  });
};

const calculoMedia = (arrayNotas: number[]): number => {
  const suma = arrayNotas.reduce((acc, nota) => acc + nota, 0);
  const media = Math.round(suma / arrayNotas.length);

  return media;
};

const handleMessage = (media: number) => {
  const parrafo = document.getElementById("mensaje");

  if (parrafo && parrafo instanceof HTMLParagraphElement) {
    media > 5
      ? (parrafo.textContent = "Apto")
      : (parrafo.textContent = "No Apto");
  }
};

const calcularNota = () => {
  const recogidaDeNotas = document.querySelectorAll("input[type='number']");

  if (recogidaDeNotas && recogidaDeNotas instanceof NodeList) {
    let arrayDeNotas: number[] = [];
    handleInputNotas(recogidaDeNotas, arrayDeNotas);
    const media = calculoMedia(arrayDeNotas);
    handleMessage(media);
  }
};
const botonCalcularNota = document.querySelector(".calcularNota");
if (botonCalcularNota && botonCalcularNota instanceof HTMLButtonElement) {
  botonCalcularNota.addEventListener("click", calcularNota);
}

/* 10. Amplia la nota del ejercicio anterior para que te de la nota, Insuficiente, Suficiente, Notable, Sobresaliente

- Insuficiente => 0 a 4
- Suficiente => 5 a 6
- Notable 7, 8, 9
- Sobresaliente => 10 */

const handleParagraph = (media: number) => {
  const parrafo = document.getElementById("mensaje");
  if (parrafo && parrafo instanceof HTMLParagraphElement) {
    let mensaje: string = "";
    if (media >= 0 && media <= 4) {
      mensaje = "Insuficiente";
    } else if (media >= 5 && media <= 6) {
      mensaje = "Suficiente";
    } else if (media >= 7 && media <= 9) {
      mensaje = "Notable";
    } else if (media === 10) {
      mensaje = "Sobresaliente";
    }
    parrafo.textContent = mensaje;
  }
};

const mostrarNota = () => {
  const recogidaDeNotas = document.querySelectorAll("input[type='number']");

  if (recogidaDeNotas && recogidaDeNotas instanceof NodeList) {
    let arrayDeNotas: number[] = [];
    handleInputNotas(recogidaDeNotas, arrayDeNotas);
    const media = calculoMedia(arrayDeNotas);
    handleParagraph(media);
  }
};
const botonMostrarNota = document.querySelector(".calcularNota");
if (botonMostrarNota && botonMostrarNota instanceof HTMLButtonElement) {
  botonMostrarNota.addEventListener("click", mostrarNota);
}

// 11. Muestra los números multiples de 5 de 0 a 100 usando un bucle for.

const calculaNumerosMultiplesCincoConBucleFor = () => {
  const num = 5;
  for (let i = 0; i < 101; i++) {
    const resultado = num * i;
    console.log(`Números múltiplos de 5: ${resultado}`);
  }
};

calculaNumerosMultiplesCincoConBucleFor();

// 12. Muestra los números multiples de 5 de 0 a 100 usando un bucle while.

const calculaNumerosMultiplesCincoConBucleWhile = () => {
  const num = 5;
  let i = 0;

  while (i < 101) {
    const resultado = num * i;
    i++;
    console.log(`Números múltiplos de 5: ${resultado}`);
  }
};

calculaNumerosMultiplesCincoConBucleWhile();

// 13. Un usuario me dice un número del 0 al 10 y le saco la tabla de multiplicar de ese número.

const mostrarTablaMultiplicar = (numero: number) => {
  for (let i = 0; i < 11; i++) {
    const resultado = numero * i;

    console.log(
      `Tabla de multiplicar del ${numero}\n ${numero} x ${i} = ${resultado}`
    );
  }
};

mostrarTablaMultiplicar(8);

/* 14. Escribe un programa que me diga si un número que introducido por teclado es primo o no.
> Recuerda que un número primo es aquel que es mayor que uno y tiene únicamente dos divisores: él mismo y el 1 */

const muestraSiEsPrimo = (numero: number) => {
  let contador = 0;
  let i = 1;

  while (i <= numero) {
    if (numero <= 1) {
      console.error("El numero debe ser mayor de 1");
    }
    if (numero % i === 0) {
      contador++;
    }
    i++;
  }
  contador === 2
    ? console.log(`${numero} es primo`)
    : console.log(`${numero} no es primo`);
};

const numero = parseInt(prompt("Introduce un número:") || "0");
muestraSiEsPrimo(numero);

/* 15. Escribe un programa que te calcula el número factorial de un numero (no uses librerías externas).
  > Un factorial es un número que es el producto de todos los números enteros desde 1 a N
  > ejemplo `1 x 2 x 3 x 4 x 5 = 120`. */

const calcularFactorial = (numero: number) => {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
    console.log(`El factorial del ${numero} es ${resultado}`);
  }
};

calcularFactorial(5);

/* 16. En una encuesta, introducimos 10 valores (o un array de N), con el numero de hijos de cada familia, queremos obtener: el minimo, el maximo, la media, la moda.
Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):
*/

const recogerNumeros = (domElement: NodeList, arrayNotas: number[]) => {
  domElement.forEach((numero) => {
    if (numero && numero instanceof HTMLInputElement) {
      const transformStringToNumber = parseInt(numero.value);
      arrayNotas.push(transformStringToNumber);
    }
  });
};

const obtenerMinimo = (arrayNumeros: number[]): number =>
  Math.min(...arrayNumeros);
const obtenerMaximo = (arrayNumeros: number[]): number =>
  Math.max(...arrayNumeros);

const calcularModa = (numero: number, arrayNumero: number[]): number => {
  for (let i = 0; i < arrayNumero.length; i++) {
    if (arrayNumero.filter((num) => num === arrayNumero[i]).length > 1) {
      numero = arrayNumero[i];
    }
  }
  return numero;
};

const calcularDatosFamilia = () => {
  const recogidaNumeros = document.querySelectorAll("input[type='number']");

  if (recogidaNumeros && recogidaNumeros instanceof NodeList) {
    let arrayDeNumeros: number[] = [];
    let moda: number = 0;
    recogerNumeros(recogidaNumeros, arrayDeNumeros);

    const minimo = obtenerMinimo(arrayDeNumeros);
    const maximo = obtenerMaximo(arrayDeNumeros);

    const media = calculoMedia(arrayDeNumeros);
    const laModa = calcularModa(moda, arrayDeNumeros);

    const parrafo = document.getElementById("mensaje");
    if (parrafo && parrafo instanceof HTMLParagraphElement) {
      parrafo.textContent = `El mínimo es ${minimo}, el máximo es ${maximo}, la media es ${media} y la moda es ${laModa}`;
    }
  }
};

const botonDatosFamilia = document.querySelector(".calcular");
if (botonDatosFamilia && botonDatosFamilia instanceof HTMLButtonElement) {
  botonDatosFamilia.addEventListener("click", calcularDatosFamilia);
}
