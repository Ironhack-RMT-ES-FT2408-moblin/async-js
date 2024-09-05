console.log("probando")


let myStr = "Hola"
console.log(myStr)

myStr = "adios"
console.log(myStr)

// JS es un lenguaje SINCRONO
// JS tiene algunos aspectos y ejeciones asincronas

/* 
setTimeout( laFuncionParaEjecutar, tiempoQueTardaráEnMilisegundos )
*/


// setTimeout( () => {
//   console.log("Ejecutando esto a los 2 segundos") // 3
// }, 2000 ) // 2seg

// setTimeout( () => {
//   console.log("Ejecutando esto a los 4 segundos") // 4
// }, 4000 ) // 4seg

// setTimeout( () => {
//   console.log("Ejecutando esto a los 0 segundos") // 2
// }, 0 )

// console.log("despues del timeout") // 1

// JS primero va a reproducir todo lo sincrono!
// y luego lanza al mismo tiempo todas las ejecuciones asincronas


let contador = 0;
const intervaloId = setInterval(() => {
  contador++
  console.log("ejecutando esto", contador)
  if (contador >= 5) {
    console.log("deteniendo el intervalo")
    clearInterval( intervaloId )
  }
}, 1500)

console.log(intervaloId)

// const intervaloId2 = setInterval(() => {
//   console.log("ejecutando esto")
// }, 1500)

// console.log(intervaloId2)


// clearInterval => detener intervalos
// setTimeout(() => {
//   console.log("deteniendo el intervalo")
//   clearInterval( intervaloId )
// }, 7500)