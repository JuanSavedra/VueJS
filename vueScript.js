const vm = new Vue ({
    el: "#app",
    data: {
        currentColor: "blue",
        color: "blue"
    },
    methods: {
        alertMessage: () => {
            alert("Clicado")
        }
    }
});