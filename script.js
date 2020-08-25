// const contenedor = document.querySelector('#contenedor')
//
//
// for(let i=1; i<=10; i++){
//     contenedor.innerHTML += `<h3>perro</h3> `
//   }

function tabla(numero){
    const tablaID = '#t'+ numero;
    const multi = 'multi' + numero;
    const multiID = '#'+multi;

     document.querySelector('#contenidoTablas').innerHTML += `

        <div id="${tablaID}" class="tabla">
            <h3>X  ${numero}</h3>
            <ul id='${multi}' class="multiplicacion">
            </ul>
        </div>

      `
     for(let i=1; i<=12; i++){
          document.querySelector(multiID).innerHTML += ` <li >${numero} x ${i} = ${i*numero} </li> `
       }
}

for(let i=1; i<=12; i++){
     tabla(i)
  }





  // function tabla(numero){
  //     const tablaID = '#t'+ numero;
  //     const multi = 'multi' + numero;
  //     const multiID = '#'+multi;
  //
  //      document.querySelector(tablaID).innerHTML += `
  //           <h3>Tabla del  ${numero}</h3>
  //           <tbody id='${multi}'>
  //           </tbody>
  //       `
  //      for(let i=1; i<=10; i++){
  //           document.querySelector(multiID).innerHTML += ` <tr> <td >${numero} x ${i} = ${i*numero} </td></tr> `
  //        }
  // }
  //
  // for(let i=1; i<=10; i++){
  //      tabla(i)
  //   }
