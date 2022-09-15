//console.log(salarios);
function encontrarPersona(personaEnBusqueda) {
    /* const persona = salarios.find((persona)=>{
        return persona.name == personaEnBusqueda;
    });
    return persona */

    return salarios.find(persona=>persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos; 
    /* const salarios =[];
    for (let i = 0; i < trabajos.length; i++) {

        const element = trabajos[i].salario;
        salarios.push(element);        
    }
    console.log(salarios); */

    const salarios = trabajos.map(function (elemento) {
        //console.log(salarios);
        return elemento.salario
    });
    //console.log(salarios);
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
   // console.log(medianaSalarios);

    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos; 
    
    let porcentajesCrecimiento  = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;        
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);   
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

//Análisis empresarial

const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

//console.log({empresas});

/* function calcularMedianaEmpresas(nombreEmpresa,anio) {
    const empresa = nombreEmpresa; 
    const year = anio;

    console.log(empresas[empresa][year]);

    const medianaEmpresa = PlatziMath.calcularMediana(empresas[empresa][year]);

    return medianaEmpresa;

} */

function medianaEmpresaYear(nombre,year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    }else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año');
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    }else{
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year)=>{
            return medianaEmpresaYear(nombre,year);
        })
        console.log(listaMedianaYears);

    let porcentajesCrecimiento  = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];        
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);   
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;

    }
}

// Análisis general

function medianaGeneral() {
    /* const nombres = salarios.map(persona => persona.name);
    const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona(nombre)); */
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;

}

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    
    return medianaTop10;
}

function sumarArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result += element;
    }
    return result;
}

function calcularTodoElDinero() { 

    let dinero = [];

   for ( empresa in empresas) {
    //console.log(empresas[empresa]);
    for (const year in empresas[empresa]) {
        //console.log(empresas[empresa][year]);
       
        let acumulado =sumarArray(empresas[empresa][year]);

        //console.log(sumarArray(empresas[empresa][year]));

        dinero.push(acumulado);
        
        let total = sumarArray(dinero); 

        ////console.log(total);

        return total;
    }
   }
}