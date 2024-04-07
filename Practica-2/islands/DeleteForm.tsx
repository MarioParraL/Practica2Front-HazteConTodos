import { FunctionComponent } from "preact";

const DeleteForm: FunctionComponent = () => {
  return (
    <form
      class="DeleteForm"
      action="/delete"
      method="DELETE"
    >
      <h1>Delete pokemon</h1>

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Pokemon Name"
      />

      <input
        type="string"
        id="creator"
        name="creator"
        placeholder="Creator Name"
      />

      <button type="submit">Delete Pokemon</button>
    </form>
  );
};

export default DeleteForm;
