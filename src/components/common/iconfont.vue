<template>
  <svg v-if="isSymbol" class="icon" :class="defaultClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
  <i v-else class="iconfont" :class="[iconClass,defaultClass]"><slot/></i>
</template>

<script>
export default {
  name: 'Iconfont',
  props: {
    iconClass: {
      type: String,
    },
    defaultClass: {
      type: String,
      default: ''
    },
    isSymbol: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
