import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IPokemonDetails from "../interfaces/IPokemonDetails";
import api from "../services/api";
import { DELETE_TEAM, GET_TEAMS, SAVE_TEAM } from "./actions-type";
import {
  ADICIONA_POKEMON,
  DEFINE_TEAMS,
  REMOVER_POKEMON,
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
    [GET_TEAMS]({ commit }) {
      api.getTeams().then((res): void => {
        commit(DEFINE_TEAMS, res.data);
      });
    },
    // [SAVE_TEAM](contexto, team: IPokemonDetails[]): void {
    //   api.saveTeam(team).then((res) => {
    //     console.log(res);
    //   });
    // },
    [DELETE_TEAM](contexto, id): void {
      api.deleteTeam(id).then((res) => {});
    }
  },
  plugins: [new VuexPersistence().plugin]
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
