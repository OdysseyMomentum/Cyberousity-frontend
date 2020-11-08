import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken2, // #E53935
                secondary: colors.orange.darken2, // #FFCDD2
                accent: colors.blue.accent4, // #3F51B5
            },
        },
    },
});
