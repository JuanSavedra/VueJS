const vm = new Vue ({
    el: "#app",
    data: {
        color: "default", 
        coordX: 0,
        coordY: 0
    },
    methods: {
        changeColor: function(color) {
            return this.color = color;
        },
        currentCoordenates: function(event) {
            this.coordX = event.clientX;
            this.coordY = event.clientY;
            return event;
        }
    }
});