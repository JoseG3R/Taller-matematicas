const inputEncontrarPersona = document.getElementById('encontrarPersona');
const btnBuscar = document.querySelector('.btnBuscar');
const resultContainer = document.querySelector('.result-container');
const selectPerson = document.getElementById('selectPerson');

let nombre = inputEncontrarPersona;
btnBuscar.addEventListener('click',buscar);
selectPerson.addEventListener('click',nombresEnSelect)

function nombresEnSelect() {

    console.log('select');

    console.log(selectPerson.value);

    for (let i = 0; i < salarios.length; i++) {
        const element = salarios[i];
        //console.log(element.name);
        const options = document.createElement('option');
        options.setAttribute('value',element.name);
        options.innerText = element.name;
        //console.log(options);
        selectPerson.appendChild(options)

        //console.log(options.value);

        if (selectPerson.value != 'Seleccionar Persona') {
            resultContainer.innerText = '';
            let result = encontrarPersona(selectPerson.value),
            resultTitle = document.createElement('h3');

            resultTitle.innerText = 'Historial de empleos y salarios de '+selectPerson.value;
            resultContainer.appendChild(resultTitle);

            if (result) {
                let trabajos = result.trabajos;
                    console.log(trabajos);
                for (let i = 0; i < trabajos.length; i++) {
                    const element = trabajos[i];

                    let parrafo = document.createElement('p');
                    
                    parrafo.innerText = `Trabajo en la empresa ${element.empresa} durante el año ${element.year} con un salario de $${element.salario}`;

                    resultContainer.appendChild(parrafo);
                }   
                insertarMediana(selectPerson.value);
                insertarProyeccion(selectPerson.value);
            } 
        }else{
        resultContainer.innerText = "No hay ninguna persona con ese nombre";

        } 
    }
}

nombresEnSelect();
resultContainer.innerText ='';

function buscar() {
   // console.log(selectPerson.options[0].text);
    //console.log(nombre.value);

   //console.log('click');

    resultContainer.innerText = '';
    let result = encontrarPersona(nombre.value),
        resultTitle = document.createElement('h3');

    resultTitle.innerText = 'Historial de empleos y salarios '+nombre.value;
    resultContainer.appendChild(resultTitle);

    if (result) {
    let trabajos = result.trabajos;

        for (let i = 0; i < trabajos.length; i++) {
            const element = trabajos[i];

            let parrafo = document.createElement('p');
            
            parrafo.innerText = `Trabajo en la empresa ${element.empresa} durante el año ${element.year} con un salario de $${element.salario}`;

            resultContainer.appendChild(parrafo);
        }   
    
    insertarMediana(nombre.value);
    insertarProyeccion(nombre.value);

    }else{

        resultContainer.innerText = "No hay ninguna persona con ese nombre";
    }
}

function insertarMediana(nombre) {
    const persona = document.createElement('p');
    persona.setAttribute('class','bold');
    persona.innerText = 'La mediana de los salarios en el paso de los años es  $'+medianaPorPersona(nombre);
    resultContainer.appendChild(persona);
    //console.log(persona);
}

function insertarProyeccion(nombre) {
    const persona = document.createElement('p');
    persona.setAttribute('class','bold');
    persona.innerText = 'La proyección de su salario futuro es de  $'+Math.floor(proyeccionPorPersona(nombre));
    resultContainer.appendChild(persona);
    //console.log(persona);
}
