const vm = new Vue ({
    el: "#app",
    data: {},
    methods: {
        sum: function sum(number1, number2) {
            return number1 + number2;
        },
        subtraction: function(number1, number2) {
            return number1 - number2;
        },
        multiplication: (number1, number2) => {
            return number1 * number2;
        },
        division(number1, number2) {
            return number1 / number2;
        }
    }
});