var Sturbucks = {

    coffe: {
        latte: 'coffee',
        americano: 'coffee',
        expresso: 'coffee'
    },
    tea: {
        green: 'tea',
        black: 'tea',
        fruit: 'tea'
    }

}

var order = prompt('Выберите напиток coffee: latte, americano, expresso. Tea: black, green, fruit')

if (order in Sturbucks.tea) {
    alert('Ordered')
}else if (order in Sturbucks.coffee) {
    alert('Ordered')
}else {
    alert('Error')
}