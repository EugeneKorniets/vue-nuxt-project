<template>
  <div class="promo-banner-line">
    <router-link
      class="promo-banner-line__banner promo-banner-line__banner-1"
      to="/catalog/women"
    >
      <div class="promo-banner__sticker">
        <p>Платья от <span>5 490.</span></p>
      </div>
    </router-link>
    <router-link
      class="promo-banner-line__banner promo-banner-line__banner-2"
      to="/catalog/men"
    >
      <div class="promo-banner__sticker">
        <p>Мужские куртки от <span>7 190.</span></p>
      </div>
    </router-link>
    <router-link
      class="promo-banner-line__banner promo-banner-line__banner-3"
      to="/catalog/girls"
    >
      <div class="promo-banner__sticker">
        <p>Юбки для девочек от <span>1 190.</span></p>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "PromoBannerLine",

    props: {
      bannersList: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .promo-banner-line__banner {
    position: relative;
    display: block;
    flex-basis: calc(33.33% - 10.66px);
    margin-right: 16px;
    padding-top: 33%;
    overflow: hidden;
    transition: .3s;
  }

  .promo-banner-line__banner:nth-child(3n) {
    margin-right: 0;
  }

  .promo-banner-line__banner:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  .promo-banner-line__banner-1 {
    background: var(--text-color-4);
  }

  .promo-banner-line__banner-2 {
    background: var(--text-accent-light);
  }

  .promo-banner-line__banner-3 {
    background: var(--text-accent-normal);
  }

  .promo-banner__sticker {
    position: absolute;
    width: 40%;
    padding: 20px;
    color: var(--text-color-3);
    font-size: 24px;
    line-height: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  .promo-banner__sticker span {
    white-space: nowrap;
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
  }

  .promo-banner-line__banner-1 .promo-banner__sticker {
    top: 14%;
    left: 0;
    text-align: left;
    background: var(--text-accent-normal);
  }

  .promo-banner-line__banner-2 .promo-banner__sticker {
    bottom: 0;
    left: 32%;
    text-align: center;
    background: var(--text-color-4);
  }

  .promo-banner-line__banner-3 .promo-banner__sticker {
    top: 0;
    right: 6%;
    text-align: right;
    background: var(--text-accent-light);
  }
</style>
