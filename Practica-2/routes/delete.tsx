import DeleteForm from "../islands/DeleteForm.tsx";
import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext): Promise<Response> => {
    try {
      const params = new URLSearchParams(req.url.split("?")[1]);
      const name = params.get("name");
      const creator = params.get("creator");

      if (!name || !creator) {
        throw new Error(
          "Debe proporcionar tanto el nombre como el creador del Pokémon a eliminar.",
        );
      }

      const url =
        `https://lospoquimones.deno.dev/?name${name}&creator${creator}`;

      const response = await axios.delete(url);

      return new Response("Pokemon DELETED");
    } catch (e) {
      console.error(e);
      return new Response(e.message, {
        status: 500,
      });
    }
  },
};

const DeletePage = () => {
  return (
    <div>
      <DeleteForm />
    </div>
  );
};

export default DeletePage;
