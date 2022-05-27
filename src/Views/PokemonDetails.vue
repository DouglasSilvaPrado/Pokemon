<template>
  <a class="btn btn-success m-2 text-white" href="javascript:history.back()"
    ><i class="bi bi-arrow-left-circle-fill"></i
  ></a>
  <div
    class="container my-5 position-absolute top-50 start-50 translate-middle"
  >
    <div class="row">
      <!-- col left -->
      <div class="col-md-3">
        <div class="text-center m-3">
          <h3>ID {{ id }}</h3>
          <h3>Weight {{ pokemon?.weight }}</h3>
          <h3>Height {{ pokemon?.height }}</h3>
          <h3>
            Abilities
            <span v-for="ability in pokemon?.abilities" :key="ability.id">
              <br>
              {{ ability.ability.name }}
            </span>
          </h3>

          <h3>Type {{ pokemon?.types[0].type.name }}</h3>
        </div>
      </div>
      <!-- col mid -->
      <div class="col-md-6">
        <div class="text-center my-3">
          <h1 class="my-3 text-capitalize">{{ pokemon?.name }}</h1>
          <img :src="pokemon?.sprites.other.dream_world.front_default" alt="" />
        </div>
      </div>
      <!-- col right -->
      <div class="col-md-3">
        <div class="text-center m-3">
          <h3>HP {{ pokemon?.stats[0].base_stat }}</h3>
          <h3>Attack {{ pokemon?.stats[1].base_stat }}</h3>
          <h3>Defense {{ pokemon?.stats[2].base_stat }}</h3>
          <h3>Sp.Attack {{ pokemon?.stats[3].base_stat }}</h3>
          <h3>Sp.Defense {{ pokemon?.stats[4].base_stat }}</h3>
          <h3>Speed {{ pokemon?.stats[5].base_stat }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import IPokemonDetails from "../interfaces/IPokemonDetails";
import router from "../Router";
import api from "../services/api";

    const pokemon = ref<IPokemonDetails>();
    let id = router.currentRoute.value.params.id;
    
    onBeforeMount(async () => {
       await api.getById(id).then((res) => {
       pokemon.value = res.data;
    });
    })
</script>
