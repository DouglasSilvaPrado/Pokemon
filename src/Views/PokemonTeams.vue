<template>
  <div class="container my-5">
    <h2>Times Pokemons</h2>
    <div class="row" v-for="team, key  in allTeams" :key="key">
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
        <button class="btn btn-danger my-3" @click="deleteTeam(team)">
          Excluir Time
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store";
import { DELETE_TEAM } from "../store/mutations-type";

export default defineComponent({
  setup() {
    const store = useStore();

    function deleteTeam(team:any) {
      store.commit(DELETE_TEAM, team);
    }
    
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
