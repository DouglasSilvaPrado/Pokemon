<template>
  <div class="col-12 col-md-6">
    <section class="d-flex justify-content-center">
      <div
        v-if="pokemonSelected"
        class="card card-pokemon-principal shadow p-3 my-3 text-center"
      >
        <h1 class="text-capitalize">{{ pokemonSelected.name }}</h1>
        <img
          :src="pokemonSelected.sprites.other.dream_world.front_default"
          alt="Pokemon-pincipal"
        />

        <hr />
        <div class="row descricao-card">
          <div class="col-md-6">
            <h5>Tipo</h5>
            <p>{{ pokemonSelected.types[0].type.name }}</p>
            <h5>Altura</h5>
            <p>{{ pokemonSelected.height }}</p>
            <h5>Peso</h5>
            <p>{{ pokemonSelected.weight }}</p>
          </div>
          <div class="col-md-6">
            <h5>Habilidades</h5>
            <p
              v-for="habilidad in pokemonSelected.abilities"
              :key="habilidad.id"
            >
              {{ habilidad.ability.name }}
            </p>
          </div>
          <button class="btn btn-success" @click="$emit('onAddPokemon', pokemonSelected)">Adicionar ao Time</button>
        </div>
      </div>
      <div
        v-else
        class="card card-pokemon-principal shadow p-3 my-3 text-center"
      >
        <h1>???????</h1>
        <img src="../assets/egg.svg" alt="Pokemon-pincipal" />
        <hr />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IPokemonDetails from "../interfaces/IPokemonDetails";

export default defineComponent({
   props:{
        pokemonSelected: { 
          type: Object as PropType<IPokemonDetails>, 
          required: true 
        },
    },
    emits: ["onAddPokemon"]
});
</script>

<style scoped>
.card-pokemon-principal{
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    min-width: 400px;
    min-height: 400px;
    margin: auto;
}
.card-pokemon-principal img{
    height: 120px;
}

</style>