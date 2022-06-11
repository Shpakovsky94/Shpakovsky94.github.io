<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <div class="title">
        <slot name="accordion-title"></slot>
      </div>
      <div :class="['img-wrap', visible ? 'flipped' : '']"></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content opacity-50" v-show="visible">
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
    props: {},
    inject: ["Accordion"],
    data() {
        return {
            index: null,
        };
    },
    computed: {
        visible() {
            return this.index == this.Accordion.active;
        },
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = null;
            }
            else {
                this.Accordion.active = this.index;
            }
        },
        start(el) {
            el.style.height = el.scrollHeight + "px";
        },
        end(el) {
            el.style.height = null;
        },
    },
    created() {
        this.index = this.Accordion.count++;
    },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  display: block;
  background-color: rgba($color: black, $alpha: 0.05);
  margin: 0px auto;
  &:first-of-type {
    margin-top: 0px;
  }
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  transition: 0.3s;
  font-size: 16px;
  gap: 0px;
  position: relative;
  .title {
    margin-right: 50px;
  }

  .img-wrap {
    position: absolute;
    right: 5%;
    top: 50%;
    transition: 0.2s ease-in;
    background: url(~@/assets/accordion-btn.svg);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 14px;
    height: 7px;
  }

  .flipped {
    transform: rotate(180deg);
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
 @media only screen and (max-width: 980px) {
   .accordion__trigger {
     .img-wrap {
        right: 5px;
      }
   }
 }
</style>
