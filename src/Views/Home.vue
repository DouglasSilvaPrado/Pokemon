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


<script setup lang="ts">
import PokemonList from "../components/PokemonList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";
import PokemonTeam from "../components/PokemonTeam.vue";


</script>
