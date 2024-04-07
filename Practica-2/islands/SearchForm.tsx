import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import { PokemonType } from "../types.ts";
import axios from "npm:axios";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");

  const submitHandler = async (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();

    if (name === "") {
      setError("Name cannot be empty ");
      return;
    }

    const checkPoke = await checkPokemon(name);

    if (checkPoke) {
      window.location.href = `/${name}`;
    } else {
      setError("Pokemon not found");
      return;
    }
  };

  const checkPokemon = async (name: string): Promise<boolean> => {
    try {
      const response = await axios.get<PokemonType[]>(
        `https://lospoquimones.deno.dev/${name}`,
      );
      console.log(response.data);
      return true;
    } catch (error) {
      console.error(error);
      return true;
    }
  };

  return (
    <div class="form">
      <h1>Buscar un Pokemon</h1>
      <form
        method="GET"
        onSubmit={submitHandler}
      >
        <div>
          <label for="name"></label>
        </div>
        <div>
          <input
            onFocus={(e) => setError("")}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            placeholder="Name"
            id="name"
            name="name"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={error !== ""}
            class="btn"
          >
            Search
          </button>
        </div>
        <div>
          <button
            type="reset"
            class="reset"
            onClick={(e) => {
              setError("");
            }}
          >
            Clear
          </button>
        </div>
        {error !== "" && <div class="error">{error}</div>}
      </form>
    </div>
  );
};

export default Form;
