<template>
  <div class="header">
    <div class="row">
      <button
        v-for="(language) in languageList"
        :key="language"
        :class="['lng-btn', {'active-lng': language == chosenLanguage}]"
        @click="changeLanguage (language)"
      >
        {{language}}
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  name: 'MainHeader',
  data () {
    return {
      languageList: []
    }
  },
  methods: {
    changeLanguage (language) {
      store.dispatch ('changeLanguage', language)
    }
  },
  computed: {
    chosenLanguage () {
      return store.state.chosenLanguage
  }
  },
  watch: {
    commonData (value) {
      this.languageList = Object.keys(value.language_key) 
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 15px 30px;
    background: #e3e3e3;
  }
  .lng-btn {
    padding: 5px 10px;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    background: transparent;
    transition: 0.2s ease-in;
  }
  .lng-btn:hover {
    color: white;
    background: #8f8e8e;
  }
  .row {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .active-lng {
    color: white;
    background: #8f8e8e;
  }
</style>