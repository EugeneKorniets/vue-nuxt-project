<template>
  <div id="app" class="app-container">
    <header class="page-header">
      <no-ssr>
        <AppHeaderBar
          :linkList="HEADER_BAR_LINK_LIST"
          @header-click-link="headerBarClickLinkHandler"
        ></AppHeaderBar>
      </no-ssr>
      <AppMenu></AppMenu>
    </header>

    <main class="page-content">
      <div class="page-content__container">
        <h1 class="page-content__heading--1">Каталог</h1>
        <h2 class="page-content__heading--2">Мальчики</h2>
      </div>
    </main>

    <footer class="page-footer">
      <div class="page-footer__container">
        <h1 class="page-content__heading--1">Footer</h1>
      </div>
    </footer>

    <no-ssr>
      <AppPopup
        :isActive="isActivePopup"
        :heading="'Выберите город'"
        :loadingContent="cityListLoading"
        @close-popup="togglePopup"
      >
        <ul
          class="list"
          v-if="CITY_LIST.length"
        >
          <li
            v-for="city in CITY_LIST"
          >{{ city.cityName }}</li>
        </ul>
      </AppPopup>
    </no-ssr>
  </div>
</template>

<script>
  import AppMenu from '@/components/AppMenu'
  import AppHeaderBar from '@/components/AppHeaderBar'
  import AppPopup from '@/components/AppPopup'

  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      AppMenu,
      AppHeaderBar,
      AppPopup
    },

    data: function () {
      return {
        isActivePopup: false,

        cityListLoading: false
      }
    },

    computed: {
      ...mapState('city', {
        CITY_LIST: 'cityList'
      }),

      ...mapState('static', {
        HEADER_BAR_LINK_LIST: 'headerBarLinkList'
      })
    },

    methods: {
      ...mapActions('city', {
        LOAD_CITY_LIST: 'loadCityList'
      }),

      togglePopup () {
        this.isActivePopup = !this.isActivePopup
      },

      headerBarClickLinkHandler (id) {
        if (id === 1) {
          this.togglePopup()
          this.cityListLoading = true
          this.LOAD_CITY_LIST()
            .then(() => {
              console.log('Список городов загружен')
            })
            .catch((err) => {
              console.log('Ошибка загрузки списка городов. Ошибка: ' + err)
            })
            .finally(() => {
              this.cityListLoading = false
            })
        }
        if (id === 2) {
          this.$router.push('/stores')
        }
      }
    },

    async fetch ({ store }) {
      await store.dispatch('menu/loadMenu')
    }
  }
</script>
