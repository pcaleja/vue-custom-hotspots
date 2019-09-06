<template>
  <div class="c-hotspots">
    <vue-spot
      v-on="$listeners"
      v-for="(hotspot, index) in computedData"
      :key="index"
      :id="hotspot.id"
      :x="hotspot.x"
      :y="hotspot.y"
      :width="hotspot.width"
      :height="hotspot.height"
      :type="type"
    >
      <slot :hotspot="hotspot"></slot>
    </vue-spot>
  </div>
</template>

<script>
import VueSpot from "./BaseSpot.vue";
export default {
  inheritAttrs: false,
  components: {
    VueSpot
  },

  props: {
    data: {
      type: Array,
      required: true
    },

    type: {
      type: String,
      default: "default"
    }
  },

  computed: {
    computedData() {
      return this.data.map(d =>
        Object.assign({}, d, {
          id: `hs-${d.x}-${d.y}`
        })
      );
    }
  }
};
</script>

<style>
.c-hotspots {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
