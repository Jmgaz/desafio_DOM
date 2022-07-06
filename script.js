const listaRolls = [
    { id: 1, cantidad: 8, ingredientes: "Kani Kama, Omelette, Queso", precio: 500 },
    { id: 2, cantidad: 8, ingredientes: "Kani Kama, Palta, Queso", precio: 544 },
    { id: 3, cantidad: 8, ingredientes: "Kani Kama, Omelette, Palta, Queso", precio: 585 },
    { id: 4, cantidad: 8, ingredientes: "Salmón ahumado, Omelette, Queso", precio: 997 },
    { id: 5, cantidad: 8, ingredientes: "Salmón ahumado, Palta, Queso", precio: 1041 },
    { id: 6, cantidad: 8, ingredientes: "Salmón ahumado, Omelette, Palta, Queso", precio: 1082 },
    { id: 7, cantidad: 8, ingredientes: "Langostinos, Omelette, Queso", precio: 704 },
    { id: 8, cantidad: 8, ingredientes: "Langostinos, Palta, Queso", precio: 749 },
    { id: 9, cantidad: 8, ingredientes: "Langostinos, Omelette, Palta, Queso", precio: 789 },
    { id: 10, cantidad: 1, ingredientes: "Nigiris de Salmón ahumado", precio: 0 },

];

const listaCombos = [
    { 
        id:1,
        nombre: "10 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[9].cantidad*2 + " " + listaRolls[9].ingredientes,
        precio: 1000
    },
    { 
        id:2,
        nombre: "15 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " + listaRolls[9].cantidad*3 + " " + listaRolls[9].ingredientes,
        precio: 1500
    },
    { 
        id:3,
        nombre: "20 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " + listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - "+ listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " + listaRolls[9].cantidad*4 + " " + listaRolls[9].ingredientes,
        precio: 2000
    },
    { 
        id:4,
        nombre: "30 PIEZAS",
        rolls: listaRolls[0].cantidad/2 + " piezas de " + listaRolls[0].ingredientes + " - " + listaRolls[7].cantidad/2 + " piezas de " + listaRolls[7].ingredientes + " - " +listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " + listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " + listaRolls[8].cantidad/2 + " piezas de " + listaRolls[8].ingredientes + " - " + listaRolls[4].cantidad/2 + " piezas de " + listaRolls[4].ingredientes + " - " + listaRolls[9].cantidad*6 + " " + listaRolls[9].ingredientes,
        precio: 3000
    },
    { 
        id:5,
        nombre: "40 PIEZAS",
        rolls: listaRolls[0].cantidad + " piezas de " + listaRolls[0].ingredientes + " - " +
        listaRolls[7].cantidad + " piezas de " + listaRolls[7].ingredientes + " - " +
        listaRolls[3].cantidad/2 + " piezas de " + listaRolls[3].ingredientes + " - " +
        listaRolls[2].cantidad/2 + " piezas de " + listaRolls[2].ingredientes + " - " +
        listaRolls[8].cantidad/2 + " piezas de " + listaRolls[8].ingredientes + " - " + listaRolls[4].cantidad/2 + " piezas de " + listaRolls[4].ingredientes + " - " +
        listaRolls[9].cantidad*8 + " " + listaRolls[9].ingredientes,
        precio: 4000
    }
]

console.log(listaRolls[0]);
console.log(listaCombos);

let contenedorCombos = document.getElementById("contenedor-combos")

for(const combo of listaCombos){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${combo.id}`
    columna.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${combo.nombre}</h5>
                <p class="card-text"> Ingredientes: ${combo.rolls}</p>
                <p class="card-text">Precio: <b>$${combo.precio}</b> </p>
                <p class="card-text">También tenemos alternativas vegetarianas y veganas</p>
            </div>
        </div>`

contenedorCombos.append(columna)
}