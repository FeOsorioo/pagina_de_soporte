import { Outlet } from "react-router-dom";
import Side_menu from "./side_menu";

export default function Layout() {
  return (
    <div className="flex">
      <Side_menu />
      <main className="w-full md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
