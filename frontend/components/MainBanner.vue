<template>
  <div class="main-banner">
    <div class="main-banner__block">
      <div class="main-banner__figure-1"></div>
      <div class="main-banner__figure-2"></div>
      <div class="main-banner__figure-3"></div>
      <h1 class="main-banner__heading">Sale</h1>
      <nav class="main-banner__links">
        <router-link
          to="/catalog/women"
          class="main-banner__link"
        >Женщины</router-link>
        <router-link
          to="/catalog/men"
          class="main-banner__link"
        >Мужчины</router-link>
        <router-link
          to="/catalog/girls"
          class="main-banner__link"
        >Девочки</router-link>
        <router-link
          to="/catalog/boys"
          class="main-banner__link"
        >Мальчики</router-link>
      </nav>
    </div>
    <style>
      .main-banner__block {
        position: relative;
        display: block;
        width: 100%;
        padding-top: 40%;
        background: transparent;
        overflow: hidden;
      }
      .main-banner__block:hover .main-banner__figure-2 {
        left: -10%;
        transform: rotate(45deg) skew(-45deg) translate3d(-10px, 0, -15px);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .main-banner__block:hover .main-banner__figure-3 {
        left: 0;
        transform: rotate(45deg) skew(-45deg) translate3d(10px, 0, 15px);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .main-banner__heading {
        position: absolute;
        top: 13%;
        right: 6%;
        color: var(--text-accent);
        font-size: 104px;
        line-height: 124px;
        text-transform: uppercase;
        text-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .main-banner__figure-1 {
        position: absolute;
        top: 0;
        left: -40%;
        width: 150%;
        height: 170%;
        background: var(--text-color-4);
        transform: rotate(45deg);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .main-banner__figure-2 {
        position: absolute;
        top: -6%;
        left: -8%;
        width: 50%;
        height: 50%;
        background: var(--text-accent-light);
        transform: rotate(45deg) skew(-45deg);
        transition: .2s;
      }
      .main-banner__figure-3 {
        position: absolute;
        top: -10%;
        left: -2%;
        width: 50%;
        height: 30%;
        background: var(--text-accent-normal);
        transform: rotate(45deg) skew(-45deg);
        transition: .2s;
      }
      .main-banner__links {
        position: absolute;
        bottom: 2%;
        left: 2%;
        display: flex;
        width: 56%;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .main-banner__link {
        display: block;
        flex-basis: 38%;
        margin: 10px 20px;
        padding: 18px;
        color: var(--text-color-3);
        font-size: 26px;
        line-height: 34px;
        text-align: center;
        text-decoration: none;
        border: 1px solid transparent;
        box-sizing: border-box;
        transition: .1s;
      }
      .main-banner__link:hover {
        border: 1px solid var(--text-color-3);
      }
    </style>
  </div>
</template>

<script>
  export default {
    name: "MainBanner"
  }
</script>
