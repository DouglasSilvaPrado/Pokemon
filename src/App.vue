<template>
  <div class="container">
    <div class="row conteudo-tela-pokemons">
      <!-- detalhes -->
      <PokemonDetails :pokemonSelected="pokemonSelected" @on-add-pokemon="addPokemon" />

      <!-- lista -->
      <PokemonList :pokemons="pokemons" @on-select-pokemon="selectPokemon" />
    </div>
    <!-- time -->
    <PokemonTeam :teamPokemon="myTeamPokemon" @on-remove-pokemon="removePokemon" />
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import IPokemon from "./interfaces/IPokemon";
import PokemonList from "./components/PokemonList.vue";
import api from "./services/api";
import PokemonDetails from "./components/PokemonDetails.vue";
import IPokemonDetails from "./interfaces/IPokemonDetails";
import PokemonTeam from "./components/PokemonTeam.vue";

export default defineComponent({
  name: "App",
  setup() {
    const pokemons = ref<IPokemon[]>([]);
    const pokemonSelected = ref<IPokemonDetails>();
    const myTeamPokemon = ref(<IPokemonDetails[]>[])

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

    function addPokemon(pokemon: IPokemonDetails) {  
      myTeamPokemon.value.push(pokemon);
    }

    function removePokemon(pokemon: IPokemonDetails) {
      if(confirm(`Deseja remover o ${pokemon.name} do seu time ?`)){
        myTeamPokemon.value = myTeamPokemon.value.filter((p) => p.name !== pokemon.name);
      }
      
    }

    onMounted(() => {
      getPokemons();
    });

    return { pokemons, selectPokemon, pokemonSelected, addPokemon, myTeamPokemon, removePokemon };
  },
  components: { PokemonList, PokemonDetails, PokemonTeam }
});
</script>

<style scoped>
.conteudo-tela-pokemons {
  margin-bottom: 100px;
}
</style>