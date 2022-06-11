<template>
  <ul class="accordion">
    <AccordionItem v-for="chapter in contentChapters" :key="chapter.name">
      <template #accordion-title>
        <h2>
          {{ translate(`acc_${chapter.name}_h1`) }}
        </h2>
      </template>
      <template #accordion-content>
        <span
          class="text-content"
          v-for="subChapter in chapter.subChapters"
          :key="subChapter"
        >
          <a
            v-if="subChapter.includes('_link')"
            :id="subChapter"
            href="#id"
            @click="goToLink(translate(subChapter))"
          >
            {{ translate("tag_hyperlink") }}
          </a>
          <a
            v-else-if="subChapter.includes('_email')"
            :href="`mailto:${translate(subChapter)}`"
          >
            {{ translate(subChapter) }}
          </a>
          <div v-else-if="subChapter.includes('_img')">
            <br />
            <img
              :class="
                subChapter.includes('album') ? 'album-image' : 'portrait-image'
              "
              :src="translate(subChapter)"
            />
          </div>
          <div v-else-if="subChapter.includes('_video')" class="container">
            <br />
            <iframe class="responsive-iframe" :src="translate(subChapter)" allowfullscreen>
            </iframe>
          </div>
          <h3 v-else-if="subChapter.includes('_h2')">
            <br />
            {{ translate(subChapter) }}
          </h3>
          <p v-else>
            <br />
            {{ translate(subChapter) }}
          </p>
        </span>
      </template>
    </AccordionItem>
  </ul>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";
export default {
  components: {
    AccordionItem,
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
      contentChapters: [],
    };
  },
  methods: {
    createContentChapter(string) {
      let chapterItem = {
        name: string.split("_")[1],
        subChapters: [],
      };
      this.contentChapters.push(chapterItem);
    },
    fillContentChapters() {
      for (let key in this.commonData) {
        if (key.includes("acc") && key.includes("h1")) {
          this.createContentChapter(key);
        }
      }
      this.contentChapters.forEach((item, index) => {
        for (let key in this.commonData) {
          if (key.includes(item.name) && !key.includes("h1")) {
            this.contentChapters[index].subChapters.push(key);
          }
        }
      });
    },
  },
  watch: {
    commonData() {
      this.fillContentChapters();
    },
  },
  provide() {
    return { Accordion: this.Accordion };
  },
  mounted() {
    this.axiosTest();
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  .accordion__item {
    padding: 18px 40px 20px;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    .text-content {
      p {
        display: inline;
        text-align: start;
        font-size: 18px;
      }
      a {
        color: blue;
        text-decoration: none;
        font-size: 18px;
      }
      h3 {
        display: inline;
      }
    }
  }
  .accordion__item:last-child {
    border-bottom: none;
  }
}
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.album-image {
  width: 100%;
}
.portrait-image {
  width: 45%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
@media only screen and (max-width: 600px) {
  .portrait-image {
    width: 100%;
    position: static;
    transform: initial;
  }
}
</style>