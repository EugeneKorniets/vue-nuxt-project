<template>
  <nav class="menu">
    <div class="menu__container">
      <logo></logo>
      <ul class="menu__items">
        <li
          class="menu__item"
          v-for="section in MENU"
          :key="section._id"
        >
          <router-link
            class="menu__link"
            :to="section.path"
          >
            {{ section.sectionName }}
          </router-link>
          <div class="menu__submenu-container">
            <div class="menu__submenu-wrapper">
              <div
                class="menu__submenu"
                v-for="category in section.categories"
                :key="category.id"
              >
                <h3 class="menu__submenu-heading">{{ category.categoryName }}</h3>
                <ul class="menu__submenu-links">
                  <li
                    class="menu__submenu-item"
                    v-for="subcategory in category.subcategories"
                    :key="subcategory.id"
                  >
                    <router-link
                      class="menu__submenu-link"
                      :to="subcategory.path"
                    >
                      {{ subcategory.subcategoryName }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'

  import Logo from '@/components/Logo'

  export default {
    name: "AppMenu",

    components: {
      Logo
    },

    computed: {
      ...mapState('menu', {
        MENU: 'menu'
      })
    }
  }
</script>
