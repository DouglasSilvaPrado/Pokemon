<template>
  <div class="container my-5">
    <h2>Times Pokemons</h2>
    <div class="row" v-for="(team, key) in allTeams" :key="key">
      <div class="col my-3 bg-ligth" v-for="pokemon in team" :key="pokemon.id">
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
        <br />
        <button class="btn btn-info my-3" @click="editTeam(team)">
          <i class="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import router from "../Router";
import { useStore } from "../store";
import { ADICIONA_POKEMON } from "../store/mutations-type";
import { ADELETE_TEAM } from "../store/actions-type";
import IPokemonDetails from "../interfaces/IPokemonDetails";


    const store = useStore();

    function deleteTeam(team: IPokemonDetails[]): void {
        store.dispatch(ADELETE_TEAM, team);
    }
    function editTeam(team: IPokemonDetails[]) {
      for (let i = 0; i <= 4; i++) {
        store.commit(ADICIONA_POKEMON, team[i]);
      }
      deleteTeam(team);
      router.push("/");
    }

    const allTeams = computed(() => {
      return store.state.allTeams;
    });
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
