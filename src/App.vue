<template>
  <div>
    <header>
      <h1>Vue Custom Hotspots</h1>
      <ul>
        <li>Hotspots that can be easily customized.</li>
        <li>Easily mappable using rulers and grid.</li>
      </ul>
    </header>

    <h2>Demo</h2>
    <figure>
      <vue-hotspots
        :data="hotspotsSetOne"
        @click="toggleTooltip($event)"
        type="pulse"
      >
        <template v-slot:default="{ hotspot }">
          <div
            :class="`c-tooltip ${defineTooltipPosition(hotspot)}`"
            v-show="toggledHotspotOne === hotspot.id"
          >
            {{ hotspot.label }}
          </div>
        </template>
      </vue-hotspots>
      <vue-ruler />
      <img src="@/assets/graphic-baking-bread-knife-brown.jpg" />
    </figure>

    <figure>
      <vue-hotspots
        :data="hotspotsSetTwo"
        type="custom"
        @mouseenter="toggledHotspotTwo = $event.target.id"
        @mouseexit="toggledHotspotTwo = ''"
      >
        <template v-slot:default="{ hotspot }">
          <div
            :class="`c-tooltip ${defineTooltipPosition(hotspot)}`"
            v-show="toggledHotspotTwo === hotspot.id"
          >
            {{ hotspot.label }}
          </div>
        </template>
      </vue-hotspots>
      <vue-ruler />
      <img src="@/assets/graphic-bean-black-rice-cereal.jpg" />
    </figure>

    <h2>Code Sample</h2>
    <pre>{{ codeSample.replace(" / ", "/") }}</pre>
  </div>
</template>

<script>
import VueRuler from "@/components/BaseRuler.vue";
import VueHotspots from "@/components/BaseHotspots.vue";

export default {
  components: {
    VueRuler,
    VueHotspots
  },

  data() {
    return {
      toggledHotspotOne: "",
      toggledHotspotTwo: "",
      hotspotsSetOne: [
        { x: 25, y: 15, label: "Butter" },
        { x: 15, y: 50, label: "Flour" },
        { x: 85, y: 83, label: "Brown Sugar?" },
        { x: 50, y: 50, label: "Graham Crackers" },
        { x: 40, y: 90, label: "White Sugar?" },
        { x: 60, y: 10, label: "Cream Cheese" }
      ],

      hotspotsSetTwo: [
        { x: 39, y: 60, label: "Green" },
        { x: 59, y: 11, label: "Red" },
        { x: 90, y: 20, label: "Brown" },
        { x: 80, y: 75, label: "White" }
      ],

      codeSample: `
  <template>
    <figure>
      <vue-hotspots
        :data="hotspotsSetOne"
        @click="toggleTooltip($event)"
        type="pulse"
      >
        <template v-slot:default="{ hotspot }">
          <div
            :class="\`c-tooltip \${defineTooltipPosition(hotspot)}\`"
            v-show="toggledHotspotOne === hotspot.id"
          >
            {{ hotspot.label }}
          </div>
        </template>
      </vue-hotspots>
      <vue-ruler />
      <img src="@/assets/graphic-baking-bread-knife-brown.jpg" />
    </figure>

    <figure>
      <vue-hotspots
        :data="hotspotsSetTwo"
        type="custom"
        @mouseenter="toggledHotspotTwo = $event.target.id"
        @mouseexit="toggledHotspotTwo = ''"
      >
        <template v-slot:default="{ hotspot }">
          <div
            :class="\`c-tooltip \${defineTooltipPosition(hotspot)}\`"
            v-show="toggledHotspotTwo === hotspot.id"
          >
            {{ hotspot.label }}
          </div>
        </template>
      </vue-hotspots>
      <vue-ruler />
      <img src="@/assets/graphic-bean-black-rice-cereal.jpg" />
    </figure>
  </template>

  <script>
    import VueRuler from "@/components/BaseRuler.vue";
    import VueHotspots from "@/components/BaseHotspots.vue";

    export default {
      components: {
        VueRuler,
        VueHotspots,
      },

      data() {
        return {
          toggledHotspotOne: "",
          toggledHotspotTwo: "",
          hotspotsSetOne: [
            { x: 25, y: 15, label: "Butter" },
            { x: 15, y: 50, label: "Flour" },
            { x: 85, y: 83, label: "Brown Sugar?" },
            { x: 50, y: 50, label: "Graham Crackers" },
            { x: 40, y: 90, label: "White Sugar?" },
            { x: 60, y: 10, label: "Cream Cheese" }
          ],
          hotspotsSetTwo: [
            { x: 39, y: 60, label: "Green" },
            { x: 59, y: 11, label: "Red" },
            { x: 90, y: 20, label: "Brown" },
            { x: 80, y: 75, label: "White" }
          ]
        }
      },

      methods: {
        defineTooltipPosition(hotspot) {
          const position = hotspot.x > 50 ? "left" : "right";
          return \`c-tooltip--\${position}\`;
        },

        toggleTooltip(event) {
          const id = event.target.id;
          this.toggledHotspotOne =
            this.toggledHotspotOne === id ? "" : event.target.id;
        }
      }
    }
  < / script>

  <style>
    .c-tooltip {
      position: absolute;
      top: 50%;
      background: rgba(0, 0, 0, 0.8);
      padding: 0.25rem 0.5rem;
      transform: translateY(-50%);
      border-radius: 5px;
      color: #fff;
      font-size: 0.8rem;
      cursor: initial;
    }

    .c-tooltip:after {
      content: "";
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .c-tooltip--left {
      right: calc(100% + 0.5rem);
    }

    .c-tooltip--left:after {
      border-left: 5px solid #000;
      left: 100%;
    }

    .c-tooltip--right {
      left: calc(100% + 0.5rem);
    }

    .c-tooltip--right:after {
      border-right: 5px solid #000;
      right: 100%;
    }

    @keyframes fade {
      0% {
        background: rgba(218, 165, 32, 0.6);
      }
      100% {
        background: rgba(218, 165, 32, 1);
      }
    }

    .c-spot--custom:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: fade 2s infinite alternate;
      border: 2px solid white;
    }
  </style>
      `
    };
  },

  methods: {
    defineTooltipPosition(hotspot) {
      const position = hotspot.x > 50 ? "left" : "right";
      return `c-tooltip--${position}`;
    },

    toggleTooltip(event) {
      const id = event.target.id;
      this.toggledHotspotOne =
        this.toggledHotspotOne === id ? "" : event.target.id;
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  color: #525252;
}

header {
  margin-bottom: 1rem;
}

figure {
  margin: 0;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
}

img {
  width: 100%;
  vertical-align: top;
}

pre {
  background: rgb(38, 38, 38);
  color: rgb(160, 209, 210);
  overflow: auto;
}

h1 {
  margin-bottom: 0;
}

ul {
  padding-left: 1.5rem;
}

.c-tooltip {
  position: absolute;
  top: 50%;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.25rem 0.5rem;
  transform: translateY(-50%);
  border-radius: 5px;
  color: #fff;
  font-size: 0.8rem;
  cursor: initial;
}

.c-tooltip:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.c-tooltip--left {
  right: calc(100% + 0.5rem);
}

.c-tooltip--left:after {
  border-left: 5px solid #000;
  left: 100%;
}

.c-tooltip--right {
  left: calc(100% + 0.5rem);
}

.c-tooltip--right:after {
  border-right: 5px solid #000;
  right: 100%;
}

@keyframes fade {
  0% {
    background: rgba(218, 165, 32, 0.6);
  }
  100% {
    background: rgba(218, 165, 32, 1);
  }
}
.c-spot--custom:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: fade 2s infinite alternate;
  border: 2px solid white;
}
</style>
