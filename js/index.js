const vm = new Vue({
  el: "#app",
  data: {},
  methods: {
    sendAlert: function sendAlert(alertMessage) {
      return alert(alertMessage);
    },
  },
});
