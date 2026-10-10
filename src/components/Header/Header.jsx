import { useNavigate, useLocation } from 'react-router-dom'
import "./Header.css";
import Button from "../ui/Button/Button"


function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {name: "Home",path: "/",},
    {name: "Explore Blogs",path: "/explore",},
    {name: "About Us",path: "/about",},
    {name: "Contact Us",path: "/contact",},
  ];

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
          <span className="header__logo-text">
            Blog<span>Creft</span>
          </span>
      </div>

      <nav className="header__links">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={
              location.pathname === item.path
                ? "active"
                : ""
            }
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Get Started Button */}
      <Button onClick={() => navigate("/welcome")} variant='get-started'>
        GET STARTED
      </Button>
    </header>
  )
}


export default Header