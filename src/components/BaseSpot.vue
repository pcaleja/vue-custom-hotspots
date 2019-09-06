<template>
  <div
    v-on="$listeners"
    :class="`c-spot c-spot--${type}`"
    :style="computedStyle"
    :id="id"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    x: {
      type: Number,
      required: true
    },

    y: {
      type: Number,
      required: true
    },

    width: {
      type: String,
      default: "1rem"
    },

    height: {
      type: String,
      default: "1rem"
    },

    type: {
      type: String,
      default: "default"
    }
  },

  computed: {
    computedStyle() {
      return {
        top: `calc(${this.y}% - (${this.height} / 2))`,
        left: `calc(${this.x}% - (${this.width} / 2))`,
        width: this.width,
        height: this.height
      };
    }
  }
};
</script>

<style>
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 1rem rgba(255, 0, 0, 0);
  }
}

.c-spot {
  position: absolute;
  z-index: 5;
  cursor: pointer;
}

.c-spot--default {
  border-radius: 50%;
  background: red;
}

.c-spot--pulse {
  border-radius: 50%;
  background: red;
}

.c-spot--pulse:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: red;
  cursor: pointer;
  animation: pulse 2s infinite;
}
</style>
