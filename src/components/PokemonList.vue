<template>
  <div class="col-12 col-md-6">
    <div class="card shadow mt-3 px-3">
      <div class="row listagem-pokemons">
        <div
          class="card card-pokemon v"
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          @click="selectPokemon(pokemon)"
        >
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <img 
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`"
          :alt="`Imagem do pokemon ${pokemon.name}`"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import IPokemon from "../interfaces/IPokemon";
import api from "../services/api";
import { store } from "../store";

const pokemons = ref<IPokemon[]>([]);

async function getPokemons(): Promise<void> {
  await api.getAll().then((res) => {
    pokemons.value = res.data.results;
  });
}

async function selectPokemon(pokemon: IPokemon) {
  await api
    .getOne(pokemon.url)
    .then((res) => {
      store.state.pokemonSelected = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  getPokemons();
});
</script>

<style>
.listagem-pokemons {
  max-height: 555px;
  overflow-y: scroll;
}

.card-pokemon {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  padding: 1rem;
  max-width: 150px;
  margin: 0 auto 1rem auto;
  cursor: pointer;
}
.card-pokemon:hover {
  background-color: #fffb7d;
  background-image: linear-gradient(45deg, #81c29f 0%, #85ffbd 100%);
  padding: 0.8rem;
}
.card-pokemon h2 {
  text-align: center;
  font-size: 1.2rem;
}
.card-pokemon img {
  height: 80px;
}
</style>