<template>
	<div class="theme-toggle">
		<button
			class="theme-toggle__button"
			title="Переключить тему"
			@click="toggleTheme"
		>
			<transition-group name="fade-replace">
				<span
					class="theme-toggle__icon theme-toggle__icon--light"
					v-if="THEME === 'light'"
					:key="'1'"
				></span>
				<span
					class="theme-toggle__icon theme-toggle__icon--dark"
					v-else
					:key="'2'"
				></span>
			</transition-group>
			<span
				class="theme-toggle__button-text"
				:class="THEME === 'dark' ? 'theme-toggle__button-text--dark' : ''"
			>{{ THEME === 'dark' ? 'Ночная' : 'Дневная' }} тема</span>
		</button>
	</div>
</template>

<script>
// TODO Подключить vuex-persisted-state для сохранения стейта хранилища
import { mapState, mapActions } from 'vuex'

export default {
	name: "ThemeToogle",

	computed: {
	  ...mapState('theme', {
	    THEME: 'theme'
		})
	},

	methods: {
    ...mapActions('theme', {
      SET_DARK_THEME: 'setDarkTheme',
      SET_LIGHT_THEME: 'setLightTheme'
    }),

    toggleTheme() {
      if (this.THEME === 'dark') {
        this.SET_LIGHT_THEME()
      } else
        this.SET_DARK_THEME()
    }
  }
}
</script>
