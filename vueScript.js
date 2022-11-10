const vm = new Vue ({
    el: "#app",
    data: {
        count: 0
    },
    methods: {
        addToCounter: function() {
            this.count++;
        }
    }
});