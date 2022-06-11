<template>
  <div class="main-page">
    <div class=" container">
      <MainHeader/>
      <PreviewSection/>
      <MainContent/>
      <MainFooter/>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/main-page/header/MainHeader.vue'
import PreviewSection from '@/components/main-page/preview/PreviewSection.vue'
import MainContent from '@/components/main-page/main-content/MainContent.vue'
import MainFooter from '@/components/main-page/footer/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    PreviewSection,
    MainContent,
    MainFooter
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 980px;
    margin: 0 auto;
  }
</style>