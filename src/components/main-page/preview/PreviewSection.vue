<template>
  <div class="preview-section">
    <div class="container">
      <div class="head-block">
        <div class="img-wrapper"></div>
        <h2>
          {{ translate("init_h1") }}
        </h2>
      </div>
      <div class="text-block">
        <p>
          {{ translate("init_p1") }}
        </p>
        <div class="fload-right">
          {{ translate("init_p2") }}
          {{translate("createdTime") }}
        </div>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewSection",
  methods: {},
};
</script>

<style scoped>
.preview-section {
  padding: 10px 0px 0px;
}
.head-block {
  display: flex;
  gap: 50px;
}
.img-wrapper {
  width: 55%;
  height: 269px;
  background: url(~@/assets/logo.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.fload-right {
  float: right;
}
h2 {
  margin: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 64px;
  line-height: 83px;
  text-align: start;
  align-self: center;
  cursor: pointer;
  color: black;
}
p {
  padding-top: 20px;
  margin: 0;
  text-align: start;
  font-size: 26px;
  line-height: 38px;
}
@media only screen and (max-width: 980px) {
  .preview-section {
    padding: 0 30px;
  }
  .head-block {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .img-wrapper {
    order: 2;
    width: 100%;
    height: 180px;
    background-size: contain;
  }
  h2 {
    order: 1;
    font-size: 48px;
    line-height: 63px;
  }
  p {
    padding-top: 10px;
    margin: 0;
    text-align: start;
    font-size: 20px;
    line-height: 29px;
  }
}
</style>