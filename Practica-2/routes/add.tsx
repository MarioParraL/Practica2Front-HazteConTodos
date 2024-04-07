import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import AddForm from "../islands/AddForm.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext): Promise<Response> => { // Ajustamos el tipo de retorno a Promise<Response>
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        image: form.get("image"),
        sound: form.get("sound"),
        creator: form.get("creator"),
      };

      const response = await axios.post(
        "https://lospoquimones.deno.dev/",
        {
          name: data.name,
          image: data.image,
          sound: data.sound,
          creator: data.creator,
        },
      );

      return new Response("Pokemon added");
    } catch (e) {
      console.error(e);
      return new Response(e.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;
