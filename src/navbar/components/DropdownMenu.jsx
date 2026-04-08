import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

/**
 * DropdownMenu Component
 * Handles hover-based dropdown menus for Services, Blog, and Project
 */
export default function DropdownMenu({
  label,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  items,
}) {
  return (
    <li
      className="dropdown-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`dropdown-label ${isOpen ? "active" : ""}`}>
        {label}
        <MdOutlineKeyboardArrowDown
          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      <ul className={`dropdown-menu ${isOpen ? "visible" : "hidden"}`}>
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="dropdown-item-link">
              {item.label}
              <MdKeyboardArrowRight className="dropdown-arrow-icon" />
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
