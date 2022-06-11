<template>
  <div class="main-footer">
    <div class="row">
      <div class="email">
        <h4>
          {{translate('email_h1')}}
        </h4>
        <a :href="`mailto:${translate('email_p1')}`">
          {{translate('email_p1')}}
        </a>
      </div>
      <div class="social">
        <h4>
          {{translate('social_h1')}}
        </h4>
        <a
          id="facebookLink"
          href="#id"
          @click="goToLink(translate('social_link1'))"
        >
            <div class="facebook-icon"></div>
        </a>
        <span>
          {{translate('social_p1')}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MainFooter',
    methods: {
  }
}
</script>

<style lang="scss" scoped>
.main-footer {
  border-top: 1px solid #e3e3e3;
  width: 100%;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    a {
      text-decoration: none;
      color: black;
      transition: 0.2s ease-in;
      &:hover {
        color:red;
      }
    }
    .email {
      align-self: flex-start;
      text-align: center;
      h4 {
        margin: 0;
        margin-bottom: 20px;
      }
    }
    .social {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 20px;
      h4 {
        margin: 0;
      }
      .facebook-icon {
        background: url(https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_24,h_24,al_c,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
      }
    } 
  }
}
 @media only screen and (max-width: 600px) {
  .main-footer {
    .row {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .email {
        align-self: center;
      }
    }
  }
 }
</style>