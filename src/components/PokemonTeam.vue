<template>
  <div class="row bg-light" v-if="teamPokemon.length > 0">
    <h1 class="text-center mb-4">Seu Time Pokémon</h1>
    <div class="col-12 col-md-12">
      <div class="row">
        <div
          class="card card-pokemon v"
          v-for="pokemon in teamPokemon"
          :key="pokemon.name"
        >
          <img
            :src="pokemon.sprites.other.dream_world.front_default"
             :alt="`Imagem do pokemon ${pokemon.name}`"
          />
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <button
            class="btn btn-outline-danger"
            @click="removePokemon(pokemon)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>

    <button
      :disabled="teamPokemon.length <= 4 || teamPokemon.length > 5"
      class="btn-outline-success col-3 mx-auto"
      @click="saveTeam"
    >
      Salvar Time
    </button>
    <p
      class="text-center text-white bg-danger my-2"
      v-show="teamPokemon.length > 5"
    >
      Escolha apenas 5 pokemons
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IPokemonDetails from "../interfaces/IPokemonDetails";
import router from "../Router";
import { store } from "../store";
import { ASAVE_TEAM } from "../store/actions-type";
import { REMOVER_POKEMON } from "../store/mutations-type";

 
   function removePokemon(pokemon: IPokemonDetails) {
        store.commit(REMOVER_POKEMON, pokemon);
    }

     function saveTeam() {
      store.dispatch(ASAVE_TEAM, store.state.myTeamPokemon);
      store.state.pokemonSelected = {
        id: 0,
        name: "",
        types: [
          {
            type: {
              name: "",
            },
          },
        ],
        height: 0,
        weight: 0,
        abilities: [
          {
            ability: {
              name: "",
            },
          },
        ],
        sprites: {
          other: {
            dream_world: {
              front_default: "",
            },
          },
        },
        stats: [
          {
            base_stat: 0,
          },
          {
            base_stat: 0,
          },
          {
            base_stat: 0,
          },
          {
            base_stat: 0,
          },
          {
            base_stat: 0,
          },
          {
            base_stat: 0,
          },
        ],
      };
      router.push("/teams");
    }

    const teamPokemon = computed(() => {
      return store.state.myTeamPokemon;
    });
  
</script>
<style>
</style>