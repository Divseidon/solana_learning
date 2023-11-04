import { createStore } from 'vuex'

import juno from '@/modules/juno/store'

const store = createStore({
  modules: {
    juno,
  }
})

export default store
