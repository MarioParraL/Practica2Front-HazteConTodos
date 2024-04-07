import { FunctionComponent } from "preact";

type PokemonProps = {
  name: string;
  image: string;
  sound: string;
};

const Poke: FunctionComponent<PokemonProps> = (props) => {
  const { name, image, sound } = props;

  return (
    <>
      <div class="poke-container">
        <h2 class="text-name">{name}</h2>

        <img class="img" src={image} alt={name} />
        <p>
          <audio controls class="sound">
            <source src={sound} type="audio/mpeg" />
          </audio>
        </p>
        <p>
          <button class="BtnEliminate">
            <a href="/delete">
              Eliminate
            </a>
          </button>
        </p>
      </div>
    </>
  );
};

export default Poke;
