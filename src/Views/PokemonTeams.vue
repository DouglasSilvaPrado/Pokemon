<template>
  <div class="container my-5">
    <h2>Times Pokemons</h2>
    <div class="row" v-for="team  in allTeams" :key="team.id">
      <div class="col my-3 bg-ligth" v-for="(pokemon, key) in team" :key="key">
        <router-link :to="`/pokemon/${pokemon.id}`">
          <div class="card card-pokemon v">
            <h2 class="text-capitalize">{{ pokemon.name }}</h2>
            <img
              :src="pokemon.sprites.other.dream_world.front_default"
              alt="Pokemon-pincipal"
            />
          </div>
        </router-link> 
      </div>

      <div class="col">
        <button disabled class="btn btn-danger my-3" @click="deleteTeam(team.id)">
          Excluir Time
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "../store";
import { DELETE_TEAM, GET_TEAMS } from "../store/actions-type";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch(GET_TEAMS);

    function deleteTeam(id: number) {
      store.dispatch(DELETE_TEAM, id);
      relod();
    }

    function relod() {
      setTimeout(() => {
        store.dispatch(GET_TEAMS);
      }, 1000);
    }

    onMounted(() => {
      relod();
    });
    return { allTeams: computed(() => store.state.allTeams), deleteTeam };
  },
});
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
