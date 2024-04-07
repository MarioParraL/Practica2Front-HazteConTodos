import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { PokemonType } from "../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, PokemonType[]>) => {
    const { name } = ctx.params;

    const url = `https://lospoquimones.deno.dev/${name}`;
    try {
      const response = await axios.get<PokemonType[]>(url);

      return ctx.render(response.data);
    } catch (error) {
      console.error(error);
      return new Response("Error");
    }
  },
};

const Page = (props: PageProps<PokemonType[]>) => {
  const data = props.data;

  return (
    <>
      {data.map((poke) => (
        <div class="poke-container">
          <h2 class="text-name">{poke.name}</h2>
          <img class="img" src={poke.image} alt={poke.name} />
          <p>
            <audio controls class="sound">
              <source src={poke.sound} type="audio/mpeg" />
            </audio>
          </p>
        </div>
      ))}
    </>
  );
};

export default Page;
