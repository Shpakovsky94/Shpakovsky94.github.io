import { createStore } from 'vuex'

export default createStore({
  state: {
    chosenLanguage: 'ua',
    commonData: {}
  },
  mutations: {
    CHANGE_LANGUAGE (state, newLanguage) {
      state.chosenLanguage = newLanguage
    },
    SET_COMMON_DATA (state, newLanguage) {
      state.commonData = newLanguage
    }
  },
  actions: {
    changeLanguage (context, newLanguage) {
      context.commit ('CHANGE_LANGUAGE', newLanguage)
    },
    setCommonData (context, newLanguage) {
      context.commit ('SET_COMMON_DATA', newLanguage)
    },
  }
})