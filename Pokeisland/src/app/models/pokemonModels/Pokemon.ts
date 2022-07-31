import { PokemonMove } from "./PokemonMove";
import { PokemonSprite } from "./PokemonSprite";
import { PokemonStats } from "./PokemonStats";

export interface Pokemon {
  id: number;
  name: string;
  type: Array<string>;
  base_experience: number;
  moves: Array<PokemonMove>;
  sprites: PokemonSprite;
  stats: PokemonStats;
}
