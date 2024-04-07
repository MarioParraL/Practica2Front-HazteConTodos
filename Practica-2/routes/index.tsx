import axios from "npm:axios";
import { PokemonType } from "../types.ts";
import Poke from "../components/Pokemon.tsx";

export default async function Home() {
  try {
    const response = await axios.get<PokemonType[]>(
      "https://lospoquimones.deno.dev/",
    );

    const pokemons = response.data;
    return (
      <>
        <h1 class="title">POKEMONS</h1>
        <div class="flex-column">
          <div class="flex-row flex-around">
            {pokemons.map((pk) => (
              <Poke
                key={pk.id}
                name={pk.name}
                image={pk.image}
                sound={pk.sound}
              />
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
