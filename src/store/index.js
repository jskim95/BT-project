import Vue from 'vue'
import Vuex from 'vuex'

import insideStore from './insideStore/insideData'
import newsRoomStore from './newsRoomStore/newsRoomData'
import trendStore from './trendStore/trendData'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        inside: insideStore,
        newsRoom: newsRoomStore,
        trend: trendStore,
    }
})
