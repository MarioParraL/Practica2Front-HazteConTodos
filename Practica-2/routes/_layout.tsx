import { FreshContext } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

const Layout = async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route;

  const page = route.split("/").pop();

  const selected = page === ""
    ? "PrincipalPage"
    : page === "Add"
    ? "Add"
    : "Search";

  return (
    <div class="layout">
      <Menu selected={selected} />
      <Component>
      </Component>
    </div>
  );
};

export default Layout;
