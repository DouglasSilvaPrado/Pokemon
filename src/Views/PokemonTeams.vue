<template>
  <div class="container my-5">
    <h2>Times Pokemons</h2>
    <div class="row" v-for="team in allTeams" :key="team.id">
      <div class="col my-3 bg-ligth" v-for="(pokemon, k) in team" :key="k">
        <div class="card card-pokemon v">
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <img
          :src="pokemon.sprites.other.dream_world.front_default"
          alt="Pokemon-pincipal"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store";
import { GET_TEAMS } from "../store/actions-type";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch(GET_TEAMS);
    window.onload = () => {
      store.dispatch(GET_TEAMS);
    };
    return { allTeams: computed(() => store.state.allTeams) };
  },
});
</script>
