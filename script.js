const RootComposant = {
  data() {
    return {
      SalaireBrutAnnuel: 0,
      taux: 0.78,
    };
  },

  computed: {

    SalaireNetAnnuel: function () {
      return this.SalaireBrutAnnuel * this.taux;
    },

    SalaireBrutMensuel: function () {
      return this.SalaireBrutAnnuel / 12;
    },

    SalaireNetMensuel: function () {
      return this.SalaireNetAnnuel / 12;
    },
  },

  methods: {
    changeSalaireBrutAnnuel: function (e) {
      this.SalaireBrutAnnuel = e.target.value;
    },

    changeCadre: function (e) {
        if (e.target.checked === true) {
            this.taux = 0.75;
        } else {
            this.taux =  0.78;
        }
    },
  },
};

const Table = Vue.createApp(RootComposant);

Table.mount("#Table");
