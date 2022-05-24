<template>
  <div class="row bg-light" v-if="teamPokemon.length > 0">
    <h1 class="text-center mb-4">Seu Time Pokémon</h1>
    <div class="col-12 col-md-12">
        <div class="row">
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
    
    <button :disabled="teamPokemon.length <= 4 || teamPokemon.length > 5" class="btn-outline-success col-3 mx-auto" @click="$emit('onSaveTeam')">Salvar Time</button>
    <p class="text-center text-white bg-danger my-2" v-show="teamPokemon.length > 5">Escolha apenas 5 pokemons</p>
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
  emits: ["onRemovePokemon", "onSaveTeam"],
});
</script>


<style>
</style>