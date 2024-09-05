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


// let contador = 0;
// const intervaloId = setInterval(() => {
//   contador++
//   console.log("ejecutando esto", contador)
//   if (contador >= 5) {
//     console.log("deteniendo el intervalo")
//     clearInterval( intervaloId )
//   }
// }, 1500)

// console.log(intervaloId)

// const intervaloId2 = setInterval(() => {
//   console.log("ejecutando esto")
// }, 1500)

// console.log(intervaloId2)


// clearInterval => detener intervalos
// setTimeout(() => {
//   console.log("deteniendo el intervalo")
//   clearInterval( intervaloId )
// }, 7500)


const divNode = document.querySelector("#timer")
const h2Node = document.querySelector("#timer h2")
const btnNode = document.querySelector("#timer button")

btnNode.addEventListener("click", () => {

  setInterval(() => {
    h2Node.innerText++
  }, 1000)

  btnNode.remove()

  const h3Node = document.createElement("h3")
  h3Node.innerText = "Ha iniciado el timer!"

  divNode.append(h3Node)

  setTimeout(() => {
    h3Node.remove()
  }, 2000)

})