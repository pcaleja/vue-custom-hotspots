import VueHotspots from "@/components/BaseHotspots.vue"
import VueRuler from "@/components/BaseRuler.vue"

export { VueHotspots, VueRuler };

export default {
  install(Vue) {
    Vue.component(VueHotspots);
    Vue.component(VueRuler);
  }
};
