import { Link } from "react-router-dom";

/**
 * NavItem Component
 * Renders a simple navigation link
 * Used for Home, About, Contact links in desktop navigation
 */
export default function NavItem({ to, label }) {
  return (
    <li>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
}
