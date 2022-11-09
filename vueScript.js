const vm = new Vue ({
    el: "#app",
    data: {
        currentColor: "blue",
        color: "blue"
    },
    methods: {
        showEvent: function(event) {
            alert(event)
        }
    }
});