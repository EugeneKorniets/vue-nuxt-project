<template>
  <div class="logo">
    <router-link
      class="logo__link"
      :to="path"
      :title="title"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Logo",

    props: {
      text: {
        type: String,
        default: 'LOGO'
      },

      path: {
        type: String,
        default: '/'
      },

      title: {
        type: String,
        default: 'Главная'
      }
    }
}
</script>
