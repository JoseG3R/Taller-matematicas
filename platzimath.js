const PlatziMath ={};

PlatziMath.esPar = function(lista) {
    //(numero % 2) true false

    /* if (lista.length % 2) {
        return false;
    }else{
        return true;
    } */

    return !(lista.length % 2);
}

PlatziMath.esiImpar = function (lista) {
    return lista.length % 2;
}

PlatziMath.calcularModa = function (lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
            
        }else{
            listaCount[elemento] = 1;       
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray,1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length -1];
    //console.log({listaCount,listaArray, listaOrdenada, listaOrdenadaMaxNumber});

    console.log('La moda es '+ listaOrdenadaMaxNumber[0]);

    const moda = listaOrdenadaMaxNumber[0];

    return moda;
}

PlatziMath.calcularMediana = function (listaDesordenada) {
    lista = PlatziMath.ordenarLista(listaDesordenada);

    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {

       /*  const indexMitad1ListaPar = (lista.length /2) -1;
        const indexMitad2ListaPar = lista.length / 2; */
        
        const mitad1ListaPar = lista[(lista.length /2) -1];
        const mitad2ListaPar = lista[lista.length / 2];

        const listaMitades = [mitad1ListaPar,mitad2ListaPar];

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);

        return medianaListaPar;

        /* const indexMitadListaParSup = Math.floor(lista.length /2);
        const indexMitadListaParInf = Math.floor(lista.length /2)-1;

        const medianaListaParSup = lista[indexMitadListaParSup];
        const medianaListaParInf = lista[indexMitadListaParInf];

        //console.log(indexMitadListaParInf,indexMitadListaParSup );
        //console.log(medianaListaParInf,medianaListaParSup);

        const medianaListaPar = (medianaListaParSup + medianaListaParInf)/2;
        
        //console.log(medianaListaPar);

        return medianaListaPar; */

    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];

        //console.log(indexMitadListaImpar);
        //console.log(medianaListaImpar);

        return medianaListaImpar;
    }
}

PlatziMath.calcularPromedio = function (lista) {
    
    /* let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    } */

    //Con métodod reduce

    /* function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos); */

    /* const sumarTodosElementos =
     (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    

    const sumaLista = lista.reduce(sumarTodosElementos); */

    const sumaLista = lista.reduce((a,b) => a + b); 

    const promedio = sumaLista / lista.length;


    //console.log(promedio);
    return promedio;

}

PlatziMath.promedioG = function (lista) {
    const multiplicacionLista = lista.reduce((a,b) => a * b);


    const promedioGeometrico=calcularRaiz(multiplicacionLista,lista.length);
    console.log(multiplicacionLista);
    return promedioGeometrico;
}

PlatziMath.calcularRaiz = function (number,n) {
    
    const raiz = Math.pow(number, 1/n);
    console.log(raiz);
    return raiz;

}

PlatziMath.esParOInpar = function (lista) {
    const cantidadLista = lista.length;

    if (cantidadLista % 2 ==0) {
        console.log('Es par');
        return
    }else{
        console.log('Es impar');
    }

}

PlatziMath.ordenarLista = function (listaDesordenada) {
    
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        
        /* if (valorAcumulado > nuevoValor) {
            return 1;
        }else if (valorAcumulado == nuevoValor) {
            return 0;
        }else if (valorAcumulado < nuevoValor) {
            return -1; 
        } */

        return valorAcumulado - nuevoValor;

        //return 5 - 10 -> -5; 
        //return 5 - 5 -> 0; 
        //return 10 - 5 -> 5; 

    }

    //const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort((a,b) => a-b);

    return lista;
}

PlatziMath.ordenarListaBidimensional = function (listaDesordenada, i) {
    
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}

