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
          <i class="bi bi-trash"></i>
        </button>
        <br>
        <button class="btn btn-info my-3" @click="editTeam(team)">
          <i class="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import router from "../Router";
import { useStore } from "../store";
import { ADICIONA_POKEMON, DELETE_TEAM } from "../store/mutations-type";

export default defineComponent({
  setup() {
    const store = useStore();

    function deleteTeam(team:any) {
      store.commit(DELETE_TEAM, team);
    }
    function editTeam(team:any) {
      for (let i = 0; i <= 4; i++) {
        store.commit(ADICIONA_POKEMON, team[i]);
      }
      deleteTeam(team);
      router.push("/");
    }
    
    return { allTeams: computed(() => store.state.allTeams), deleteTeam, editTeam };
  },
});
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
