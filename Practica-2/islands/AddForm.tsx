import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form
      class="AddForm"
      action="/add"
      method="post"
    >
      <h1>Add new pokemon</h1>
      <p>
        <img class="As" src="As.png" />
      </p>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Pokemon Name"
      />

      <input
        type="url"
        id="image"
        name="image"
        placeholder="URL image"
      />

      <input
        type="url"
        id="sound"
        name="sound"
        placeholder="URL sound"
      />

      <input
        type="string"
        id="creator"
        name="creator"
        placeholder="Creator Name"
      />

      <button type="submit">Add Pokemon</button>
    </form>
  );
};

export default AddForm;
