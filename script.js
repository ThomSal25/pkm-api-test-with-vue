import { loadPkm, fetchHandler } from "./shared/api.js";

Vue.createApp({
  data() {
    return {
      pokemon: [],
    };
  },
  async mounted() {
    await loadPkm();
    return (this.pokemon = jsonData);
    // const res = await fetch(
    //   "https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0"
    // );
    // const jsonData = await res.json();
    // return (this.pokemon = jsonData);
  },
  computed: {},
  methods: {},
}).mount("#app");
