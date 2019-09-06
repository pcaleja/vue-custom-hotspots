<template>
  <div class="c-ruler">
    <div class="c-ruler__edge c-ruler__edge--horizontal">
      <div></div>
      <div v-for="n in 9" :key="n">{{ n * 10 }}</div>
      <div></div>
    </div>

    <div class="c-ruler__edge c-ruler__edge--vertical">
      <div></div>
      <div v-for="n in 9" :key="n">{{ n * 10 }}</div>
      <div></div>
    </div>

    <div class="c-ruler__grid c-ruler__grid--horizontal">
      <div v-for="n in 11" :key="n"></div>
    </div>

    <div class="c-ruler__grid c-ruler__grid--vertical">
      <div v-for="n in 11" :key="n"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.c-ruler {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: monospace;
  font-size: 0.8rem;
}

.c-ruler__edge {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 1;
}

.c-ruler__edge--vertical {
  height: 100%;
  writing-mode: vertical-lr;
}

.c-ruler__edge--vertical > div {
  height: 1px;
}

.c-ruler__edge--horizontal {
  width: 100%;
}

.c-ruler__edge--horizontal > div {
  width: 1px;
}

.c-ruler__grid {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
}

.c-ruler__grid > div {
  background: #99e9ee;
}

.c-ruler__grid--horizontal {
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.c-ruler__grid--horizontal > div {
  height: 1px;
  width: 100%;
}

.c-ruler__grid--vertical {
  width: 100%;
  height: 100%;
}

.c-ruler__grid--vertical > div {
  height: 100%;
  width: 1px;
}
</style>
