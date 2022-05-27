export default interface IPokemonDetails {
    name: string;
    id: number;
    types: [
        {
            type: {
                name: string
            }
        },
        
    ];
    height?: number;
    weight?: number;
    abilities: [
        {
            id?: number;
            ability: {
                name: string
            }
        }
    ];
    sprites: {
        other:{
            dream_world: {
                front_default: string;
            }
        }
    };
    stats: [
        {
            base_stat: number,
        },
        {
            base_stat: number,
        },
        {
            base_stat: number,
        },
        {
            base_stat: number,
        },
        {
            base_stat: number,
        },
        {
            base_stat: number,
        },

    ]
}