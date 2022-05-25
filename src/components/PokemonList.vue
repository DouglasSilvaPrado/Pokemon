<template>
  <div class="col-12 col-md-6">
    <div class="card shadow mt-3 px-3">
      <!-- pesquisa -->
      <div class="row listagem-pokemons">
        <div
          class="card card-pokemon v"
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          @click="$emit('onSelectPokemon', pokemon)"
        >
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <img
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
              pokemon.url.split('/')[6] +
              '.svg'
            "
            :alt="pokemon.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import IPokemon from "../interfaces/IPokemon";
import api from "../services/api";

export default defineComponent({
  setup() {
    const pokemons = ref<IPokemon[]>([]);

    async function getPokemons(): Promise<void> {
      api.getAll().then((res) => {
        pokemons.value = res.data.results;
      });
    }

    onMounted(() => {
      getPokemons();
    });

    return {
      pokemons,
    };
  },
  emits: ["onSelectPokemon"],
});
</script>

<style>
.listagem-pokemons {
  max-height: 500px;
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