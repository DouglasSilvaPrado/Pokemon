<template>
  <!-- conteudo -->
  <div class="container my-5">
    <!-- time -->
    <PokemonTeam />

    <div class="row mb-5">
      <!-- detalhes -->
      <PokemonDetails :pokemonSelected="pokemonSelected" />

      <!-- lista -->
      <PokemonList @on-select-pokemon="selectPokemon" />
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import IPokemon from "../interfaces/IPokemon";
import PokemonList from "../components/PokemonList.vue";
import api from "../services/api";
import PokemonDetails from "../components/PokemonDetails.vue";
import IPokemonDetails from "../interfaces/IPokemonDetails";
import PokemonTeam from "../components/PokemonTeam.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "App",
  setup() {
    const pokemonSelected = ref<IPokemonDetails | any>();
    const store = useStore();

    async function selectPokemon(pokemon: IPokemon) {
      api
        .getOne(pokemon.url)
        .then((res) => {
          pokemonSelected.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return {
      store,
      selectPokemon,
      pokemonSelected,
      allTeams: computed(() => store.state.allTeams),
    };
  },
  components: { PokemonList, PokemonDetails, PokemonTeam },
});
</script>

<style scoped>
</style>