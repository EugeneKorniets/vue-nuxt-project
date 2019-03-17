<template>
	<div
		class="popup"
		v-if="isActive"
	>
		<div
			class="popup__overlay"
			@click="hidePopup"
		>
			<div
				class="popup__window"
				@click.stop
			>
				<button
					class="popup__close-btn"
					title="Закрыть"
					@click="hidePopup"
				>Закрыть</button>
				<h3 class="popup__heading">{{ heading }}</h3>
				<div
					class="popup__loading"
					v-if="loadingContent"
				></div>
				<transition name="fade">
					<div
						class="popup__content"
						v-if="!loadingContent"
					>
						<slot></slot>
					</div>
				</transition>
			 </div>
		</div>
	</div>
</template>

<script>
export default {
  name: "AppPopup",

	props: {
    isActive: {
      type: Boolean,
      default: false
    },
		heading: {
      type: String
		},
		loadingContent: {
      type: Boolean,
			default: false
		}
  },

	methods: {
    hidePopup () {
      this.$emit('close-popup')
		}
	}
}
</script>
