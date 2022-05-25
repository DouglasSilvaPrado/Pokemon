<template>
  <!-- conteudo -->
  <div class="container my-5">
    <!-- time -->
    <PokemonTeam />

    <div class="row mb-5">
      <!-- detalhes -->
      <PokemonDetails />

      <!-- lista -->
      <PokemonList />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";
import PokemonTeam from "../components/PokemonTeam.vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: { PokemonList, PokemonDetails, PokemonTeam },
});
</script>

<style scoped>
</style>