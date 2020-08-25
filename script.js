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

     document.querySelector('#contenedor').innerHTML += `
      <table id="${tablaID}">
          <h3>Tabla del  ${numero}</h3>
          <tbody id='${multi}'>
          </tbody>
      </table>
      `
     for(let i=1; i<=10; i++){
          document.querySelector(multiID).innerHTML += ` <tr> <td >${numero} x ${i} = ${i*numero} </td></tr> `
       }
}

for(let i=1; i<=10; i++){
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
