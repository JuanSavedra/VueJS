const vm = new Vue({
  el: "#app",
  data: {
    currentColor: "white",
  },
  methods: {
    setColor: function (color) {
      this.currentColor = color;
      return color;
    },
  },
});
