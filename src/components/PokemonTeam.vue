<template>
  <div class="row" v-if="teamPokemon.length > 0">
    <h1 class="text-center mb-4">Seu Time Pokemon</h1>
    <div class="col-12 col-md-12">
        <div class="row listagem-pokemons">
        <div class="card card-pokemon v" v-for="pokemon in teamPokemon" :key="pokemon.name">     
          <img
            :src="pokemon.sprites.other.dream_world.front_default"
            :alt="pokemon.name"
          />
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <button class="btn btn-outline-danger" @click="$emit('onRemovePokemon', pokemon)"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IPokemonDetails from "../interfaces/IPokemonDetails";

export default defineComponent({
  props:{
        teamPokemon: { 
          type: Array as PropType<IPokemonDetails[]>, 
          required: true 
        },
    },
  emits: ["onRemovePokemon"]
});
</script>


<style>
</style>