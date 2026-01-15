import { NavLink } from "react-router-dom";

export default function Navigation() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `
      relative px-4 py-2 text-sm font-medium transition-colors
      ${isActive ? "text-black" : "text-black/70 hover:text-black"}
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
      after:origin-left after:scale-x-0 after:bg-black after:transition-transform
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
    `;

  return (
    <nav className="h-20 bg-yellow-500 shadow-md">
      <div className="mx-auto flex h-full max-w-6xl items-center px-6">
        <ul className="flex gap-8">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={linkClasses}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={linkClasses}>
              Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
