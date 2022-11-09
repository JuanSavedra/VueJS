const vm = new Vue ({
    el: "#app",
    data: {
        balanceIsVisible: false,
        balance: 1212.59
    },
    methods: {
        showBalance: function() {
            this.balanceIsVisible = !this.balanceIsVisible;
        }
    }
});