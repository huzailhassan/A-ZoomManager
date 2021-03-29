import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#BB86FC',
            secondary: '#242424',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
