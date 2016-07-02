import Vue from 'vue'
import Vuex from 'vuex'
import musicList from "./modules/musicList"
import middlewares from './middlewares'

//Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        musicList
    },
    strict: Vue.config.debug,
    middlewares
})