/* Percentage Challenge */

const inputPrice = document.getElementById('price');
const inputCoupon = document.getElementById('coupon');
const calculatePercentage = document.getElementById('calculatePercentage');
const result = document.getElementById('result');

calculatePercentage.addEventListener('click',calcularPorcentaje);

/* const couponsObj = {
    'JuanDc_es_Batman': 50,
    'no_le_digas': 25,
    'hola': 15
}; */

const couponsList = [];

couponsList.push({
    name: 'JuanDc_es_Batman',
    discount: 30
});
couponsList.push({
    name: 'no_le_digas',
    discount: 20
});
couponsList.push({
    name: 'hola',
    discount: 10
});

function calcularPorcentaje() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

 if (!price || !coupon) {
    console.log(coupon);
        result.innerText = 'Por favor, llene todos los campos' ;
        return;
   }
    
   let discount;

   function isCouponInArray(couponElement) {
    return couponElement.name == coupon;

   }

   const couponInArray = couponsList.find(isCouponInArray);//{} 

   if (couponInArray) {
    discount = couponInArray .discount;
   }else{
    result.innerText = 'El cupón no es válido'
        return
   }

   console.log({
    coupon,
    discount,
    couponInArray,
    couponsList
   });

    /* if (couponsObj[coupon]) {
        discount =couponsObj[coupon]; 
    }else{
        result.innerText = 'El cupón no es válido'
        return
    } */



   /* Con objetos */

   /* if (coupon == arrayCoupons) {
    //console.log(arrayCoupons[coupon]);
    discount = arrayCoupons[coupon]
    }else{
       result.innerText = 'El cupón no es válido'
    return
   } */

   /* Con switch */

    /* switch (coupon) {
        case 'JuanDc_es_Batman':
            discount = 30;
            break;
        case 'no_le_digas':
            discount = 25;
            break;
    
        default:
            result.innerText = 'El cupón no es válido'
            return
            break;
    } */

/* Con if else */

    /* if (coupon == 'JuanDc_es_Batman') {
        discount = 30;
    }else if(coupon == 'no_le_digas'){
        discount = 25;
    }else{
        result.innerText = 'El cupón no es válido'
        return
    } */

        
    valorFinal = (price * (100 - discount))/100;

    result.innerText = `El precio final despues de restarle el ${coupon} es $${valorFinal} dólares` ;
    
}

/* Promedio */

const inputNumbers = document.getElementById('inputNumbers');
const btnAdd = document.getElementById('btnAdd');
const pNumbers = document.getElementById('pNumbers');
const btnCalculate = document.getElementById('calculate');
const pAverage = document.getElementById('average');

let numbersArray = [];

btnAdd.addEventListener('click', addNumbers)
btnCalculate.addEventListener('click', calculateAverage)

function addNumbers() {
    //console.log(inputNumbers.value);
    let number = Number(inputNumbers.value);
    numbersArray.push(number);
    //console.log(numbersArray);
    inputNumbers.value = '';

    let text = '';

    for (let i = 0; i < numbersArray.length; i++) {
        
        text = text + numbersArray[i] + ', ';

        pNumbers.innerText = text;
        
    }
}

function calculateAverage() {
    let average = 0;
    for (let i = 0; i < numbersArray.length; i++) {
          average += numbersArray[i];
          console.log(average);
    }
    console.log('Hola ', average);

    averageFinal = average / numbersArray.length;

    pAverage.innerText = 'El promedio es ' + averageFinal;

}