<template>
  <div>
    <nuxt :theme="THEME"/>
    <ThemeToggle></ThemeToggle>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import ThemeToggle from '@/components/ThemeToggle'

  export default {
    components: {
      ThemeToggle
    },

    computed: {
      ...mapState('theme', {
        THEME: 'theme'
      })
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  /* themes */
  #app[theme='light'] {
    --bg-body: #fbfaf9; /* основной фон - светлый для светлой, темный для темной */
    --bg-panel: #29558c; /* вторичный фон - не меняется */
    --bg-borders: #dfdfdf; /* фон для границ */
    --bg-elements: #9b9b9b; /* фон для элементов */
    --text-color-1: #f6f3ee; /* светлый для светлой темы, темный для темной */
    --text-color-2: #29558c; /* темный для светлой темы, светлый для темной */
    --text-color-3: #f6f3ee; /* светлый для обоих тем */
    --text-color-4: #29558c; /* темный для обоих тем */
    --text-color-5: #81a0aa; /* нормальный цвет для обоих тем */
    --text-color-6: #1b293a; /* сильно темный цвет для светлой темы и светлый для темной */
    --text-accent: #ff6535; /* яркий акцент для обоих тем */
    --text-accent-light: #ffa05a; /* светлый акцент для обоих тем */
    --text-accent-normal: #81a0aa; /* темный акцент для обоих тем */
    --overlay: rgba(0,0,0,0.7); /* подложка попапа */
  }

  #app[theme='dark'] {
    --bg-body: #1b293a; /* основной фон - светлый для светлой, темный для темной */
    --bg-panel: #29558c; /* вторичный фон - не меняется */
    --bg-borders: #81a0aa; /* фон для границ */
    --bg-elements: #81a0aa; /* фон для элементов */
    --text-color-1: #1b293a; /* светлый для светлой темы, темный для темной */
    --text-color-2: #f6f3ee; /* темный для светлой темы, светлый для темной */
    --text-color-3: #f6f3ee; /* светлый для обоих тем */
    --text-color-4: #29558c; /* темный для обоих тем */
    --text-color-5: #81a0aa; /* нормальный цвет для обоих тем */
    --text-color-6: #fbfaf9; /* сильно темный цвет для светлой темы и светлый для темной */
    --text-accent: #ff6535; /* яркий акцент для обоих тем */
    --text-accent-light: #ffa05a; /* светлый акцент для обоих тем */
    --text-accent-normal: #81a0aa; /* темный акцент для обоих тем */
    --overlay: rgba(0,0,0,0.7); /* подложка попапа */
  }
</style>
