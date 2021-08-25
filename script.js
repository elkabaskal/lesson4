'use strict';

/* Задание 1
function getMyObject(inputNumber) {

    var objNum = {};
    var arrNumber = [];

    if (!Number.isInteger(inputNumber) || inputNumber < 0 || inputNumber > 999) {
        console.log('Вы ввели некорректное значение, объект пуст!');
        return objNum;
    } else {
        inputNumber = String(inputNumber);
        var arrNumber = inputNumber.split('');
        if (arrNumber.length == 3) {
            objNum = {
                'hundreds': arrNumber[arrNumber.length - 3],
                'tens': arrNumber[arrNumber.length - 2],
                'units': arrNumber[arrNumber.length - 1],
            }
        } else if (arrNumber.length == 2) {
            objNum = {
                'hundreds': 0,
                'tens': arrNumber[arrNumber.length - 2],
                'units': arrNumber[arrNumber.length - 1],
            }
        } else {
            objNum = {
                'hundreds': 0,
                'tens': 0,
                'units': arrNumber[arrNumber.length - 1],
            }
        }
    }

    console.log(objNum);
    return objNum;
}
getMyObject(555); */




const card = {
    goods: [{
            id: 1,
            typeofgoods: 'for_man',
            quantity: '5',
            price: '300',
        },
        {
            id: 2,
            typeofgoods: 'for_kids',
            quantity: '2',
            price: '500',
        },
        {
            id: 3,
            typeofgoods: 'for_woman',
            quantity: '3',
            price: '200',
        },
        {
            id: 4,
            typeofgoods: 'for_pet',
            quantity: '1',
            price: '400',
        },
    ]

};

function countBasketPrice() {
    let sum = 0;
    for (let i = 0; i < card.goods.length; i++) {
        let result = card.goods[i].quantity * card.goods[i].price;
        sum += result;
    }
    console.log(sum);
    return sum;
}
countBasketPrice()