import { FunctionComponent } from "preact";
import searchPage from "../routes/search.tsx";

type MenuProps = {
  selected: "Search" | "Add" | "PrincipalPage";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/search" class={selected === "Search" ? "selected" : ""}>
        Search Pokemon
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Create Pokemon
      </a>

      <a href="/" class={selected === "PrincipalPage" ? "selected" : ""}>
        Pokemon List
      </a>
    </div>
  );
};

export default Menu;
