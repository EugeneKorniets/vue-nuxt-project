<template>
  <nav class="header-bar">
    <div class="header-bar__container">
      <div
        class="header-bar__link-slot"
        v-for="link in linkList"
        :key="link.id"
      >
        <a
          class="header-bar__link"
          :href="link.path"
          @click.prevent="headerBarClickLink(link.id)"
        >{{ link.text }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeaderBar",

  props: {
    linkList: {
      type: Array
    }
  },

  methods: {
    headerBarClickLink (id) {
      this.$emit('header-click-link', id)
    }
  }
}
</script>
