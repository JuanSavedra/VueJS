const vm = new Vue ({
    el: "#app",
    data: {
        number1: 2,
        number2: 2
    },
    methods: {
        sum: function sum() {
            return this.number1 + this.number2;
        },
        subtraction: function() {
            return this.number1 - this.number2;
        },
        multiplication: () => {
            return 2 * 2; //Não pode recuperar os atributos do data por this
        },
        division() {
            return this.number1 / this.number2;
        }
    }
});