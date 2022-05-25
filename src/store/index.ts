import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IPokemonDetails from "../interfaces/IPokemonDetails";

import {
  ADICIONA_POKEMON,
  DEFINE_TEAMS,
  REMOVER_POKEMON,
  SAVE_TEAM
} from "./mutations-type";
import VuexPersistence from 'vuex-persist'

interface Estado {
  myTeamPokemon: IPokemonDetails[];
  allTeams: IPokemonDetails[];
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    myTeamPokemon: [],
    allTeams: [],
  },
  mutations: {
    [ADICIONA_POKEMON](state, pokemon: IPokemonDetails) {
      const pokemonFormateed: IPokemonDetails = {
        id: pokemon.id,
        name: pokemon.name,
        types:[
          {
            type: {
              name: pokemon.types[0].type.name
            }
          }
        ],
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: [
          {
            ability: {
              name: pokemon.abilities[0].ability.name
            }
          }
        ],
        sprites: {
          other: {
            dream_world: {
              front_default: pokemon.sprites.other.dream_world.front_default,
            },
          },
        },
      };
      state.myTeamPokemon.push(pokemonFormateed);
    },
    [REMOVER_POKEMON](state, pokemon: IPokemonDetails) {
      state.myTeamPokemon = state.myTeamPokemon.filter(
        (p) => p.id !== pokemon.id
      );
    },
    [DEFINE_TEAMS](state, teams: IPokemonDetails[]) {
      state.allTeams = teams;
    },
    [SAVE_TEAM](state) {
      state.allTeams.push({...state.myTeamPokemon});
      state.myTeamPokemon = [];
    }
  },
  actions: {
   
  },
  plugins: [new VuexPersistence().plugin]
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
