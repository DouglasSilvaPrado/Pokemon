<template>
  
  <!-- conteudo -->
  <div class="container my-5">
    <!-- time -->
    <PokemonTeam
      :teamPokemon="myTeamPokemon"
      @on-remove-pokemon="removePokemon"
      @on-save-team="saveTeam"
    />

    <div class="row mb-5">
      <!-- detalhes -->
      <PokemonDetails
        :pokemonSelected="pokemonSelected"
        @on-add-pokemon="addPokemon"
      />

      <!-- lista -->
      <PokemonList  @on-select-pokemon="selectPokemon" />
    </div>
  </div>
  
</template>


<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import IPokemon from "../interfaces/IPokemon";
import PokemonList from "../components/PokemonList.vue";
import api from "../services/api";
import PokemonDetails from "../components/PokemonDetails.vue";
import IPokemonDetails from "../interfaces/IPokemonDetails";
import PokemonTeam from "../components/PokemonTeam.vue";
import { useStore } from "../store";
import { ADICIONA_POKEMON, REMOVER_POKEMON } from "../store/mutations-type";
import { ASAVE_TEAM } from "../store/actions-type";
import router from "../Router";

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

    function addPokemon(pokemon: IPokemonDetails, namePokemon: string) {
      if(namePokemon === ""){
        alert("Escolha um nome para seu pokemon");
        return;
      }
      pokemon.name = namePokemon;
      store.commit(ADICIONA_POKEMON, pokemon);
    }

    function removePokemon(pokemon:  IPokemonDetails) {
      if (confirm(`Deseja remover o ${pokemon.name} do seu time ?`)) {
        store.commit(REMOVER_POKEMON, pokemon);
      }
    }
    async function saveTeam() {
      alert("Time salvo com sucesso");
      store.dispatch(ASAVE_TEAM, store.state.myTeamPokemon);
      router.push("/teams");  
    }

    return {
      store,
      selectPokemon,
      pokemonSelected,
      addPokemon,
      myTeamPokemon: computed(() => store.state.myTeamPokemon),
      allTeams: computed(() => store.state.allTeams),
      removePokemon,
      saveTeam,
    };
  },
  components: { PokemonList, PokemonDetails, PokemonTeam },
});
</script>

<style scoped>

</style>