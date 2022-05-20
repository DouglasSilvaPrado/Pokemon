<template>
  <div class="col-12 col-md-6">
    <div class="card shadow mt-3 px-3">
      <!-- pesquisa -->
      <hr />

      <div class="row listagem-pokemons">
        <div class="card card-pokemon v" v-for="pokemon in pokemons" :key="pokemon.name" @click="$emit('onSelectPokemon', pokemon)">
          <h2 class="text-capitalize">{{ pokemon.name }}</h2>
          <img
            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokemon.url.split('/')[6] + '.svg'"
            :alt="pokemon.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IPokemon from "../interfaces/IPokemon";

export default defineComponent({
  props: {
    pokemons: {
      type: Array as PropType<IPokemon[]>,
      required: true,
    },
  },
  emits: ["onSelectPokemon"],

});
</script>

<style scoped>
.listagem-pokemons {
  max-height: 70vh;
  overflow-y: scroll;
}

.card-pokemon{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    padding: 1rem;
    max-width: 150px;
    margin:  0 auto 1rem auto;
    cursor: pointer;
}
.card-pokemon:hover{
    background-color: #FFFB7D;
    background-image: linear-gradient(45deg, #81c29f 0%, #85FFBD 100%);
    padding: .8rem;
}
.card-pokemon h2{
    text-align: center;
    font-size: 1.2rem;
}
.card-pokemon img{
    height: 80px
}
</style>