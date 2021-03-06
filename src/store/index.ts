import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IPokemonDetails from "../interfaces/IPokemonDetails";

import {
	ADICIONA_POKEMON,
	REMOVER_POKEMON,
	SAVE_TEAM,
	DELETE_TEAM,
} from "./mutations-type";
import VuexPersistence from "vuex-persist";
import { ADELETE_TEAM, ASAVE_TEAM } from "./actions-type";
interface Estado {
  myTeamPokemon: IPokemonDetails[];
  allTeams: IPokemonDetails[][];
  pokemonSelected: IPokemonDetails;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
	state: {
		myTeamPokemon: [],
		allTeams: [],
		pokemonSelected: {
			id: 0,
			name: "",
			types:[
				{
					type: {
						name: ""
					}
				}
			],
			height: 0,
			weight: 0,
			abilities: [
				{
					ability: {
						name: ""
					}
				}
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
			]
		}
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
				stats: [
					{
						base_stat: pokemon.stats[0].base_stat
					},
					{
						base_stat: pokemon.stats[1].base_stat
					},
					{
						base_stat: pokemon.stats[2].base_stat
					},
					{
						base_stat: pokemon.stats[3].base_stat
					},
					{
						base_stat: pokemon.stats[4].base_stat
					},
					{
						base_stat: pokemon.stats[5].base_stat
					},
          
				]
			};
			state.myTeamPokemon.push(pokemonFormateed);
		},
		[REMOVER_POKEMON](state, pokemon: IPokemonDetails) {
			state.myTeamPokemon = state.myTeamPokemon.filter(
				(p) => p !== pokemon
			);
		},
		[SAVE_TEAM](state) {
			state.allTeams.push({...state.myTeamPokemon});
			state.myTeamPokemon = [];
		},
		[DELETE_TEAM](state, team: IPokemonDetails[]) {
			state.allTeams = state.allTeams.filter(
				(t) => t !== team
			);
		},
	},
	actions: {
		[ASAVE_TEAM]({ commit }) {
			commit(SAVE_TEAM);
		},
		[ADELETE_TEAM]({ commit }, team: IPokemonDetails[]) {
			commit(DELETE_TEAM, team);
		},
   
	},
	plugins: [new VuexPersistence().plugin]
});

export function useStore(): Store<Estado> {
	return vuexUseStore(key);
}
