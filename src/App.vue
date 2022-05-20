<template>
  <div class="container">
    <div class="row conteudo-tela-pokemons">
      <!-- detalhes -->
      <PokemonDetails :pokemonSelected="pokemonSelected" />

      <!-- lista -->
      <PokemonList :pokemons="pokemons" @on-select-pokemon="selectPokemon" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import IPokemon from "./interfaces/IPokemon";
import PokemonList from "./components/PokemonList.vue";
import api from "./services/api";
import PokemonDetails from "./components/PokemonDetails.vue";
import IPokemonDetails from "./interfaces/IPokemonDetails";

export default defineComponent({
  name: "App",
  setup() {
    const pokemons = ref<IPokemon[]>([]);
    const pokemonSelected = ref<IPokemonDetails>();

    async function getPokemons(): Promise<void> {
      api.getAll().then((res) => {
        pokemons.value = res.data.results;
      });
    }

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

    onMounted(() => {
      getPokemons();
    });

    return { pokemons, selectPokemon, pokemonSelected };
  },
  components: { PokemonList, PokemonDetails,}
});
</script>

<style scoped>
.conteudo-tela-pokemons {
  margin-bottom: 100px;
}
</style>