import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <p>MusicShop</p>
      
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Instrumentos</a>
        </li>
        <li>
          <a href="#">Amplificadores</a>
        </li>
        <li>
          <a href="#">Ofertas!</a>
        </li>
      </ul>
    </nav>
  );
};