// import jsonFile from '/opt/files/estonia-for-ukraine.json'
import store from '@/store/store.js'
import axios from './axios.js'
import json from '../../estonia-for-ukraine.json'

export default {
  data () {
    return {
      // siteContent: {}
    }
  },
  methods: {
    translate (textBlock) {
      if (this.commonData[textBlock]) {
        let textOnCurrentLanguage = this.commonData[textBlock][this.chosenLanguage]
        if (textOnCurrentLanguage) {
          return textOnCurrentLanguage
        } else {
          return this.commonData[textBlock]['ua']
        }
      }
    },
    goToLink (link) {
      window.open(link)
    },
    async axiosTest () {
      store.dispatch('setCommonData', json)
    },
    async axiosAuthCode () {
      const authCode = await this.$gAuth.getAuthCode();
      console.log("axiosAuthCode", authCode);
      await axios.handleClickGetAuthCode(authCode)
    },
  },
  computed: {
    chosenLanguage () {
      return store.state.chosenLanguage
    },
    commonData () {
      return store.state.commonData
    }
  },
  // created () {
  //   // this.siteContent = jsonFile
  // }
}