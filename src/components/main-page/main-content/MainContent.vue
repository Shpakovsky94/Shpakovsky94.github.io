<template>
  <div class="main-content">
    <div class="container">
      <AccordionComponent/>
    </div>
  </div>
</template>

<script>
import AccordionComponent from './accordion/AccordionComponent.vue'
export default {
  name: 'MainContent',
  components: {
    AccordionComponent
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    padding-bottom: 50px;
  }

</style>