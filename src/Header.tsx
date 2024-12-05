
import './styles.css'
interface HeaderProps {
  title: string; // Obligatoria
} 

const Header = ({title}: HeaderProps) =>  {
    return (
          <>
          <div className="header">
          <div className="menuTop">
            <div className="menuHamburguesa">
              <img
                alt="menu"
                src="/images/menuHamburguesa.svg"
              />
            </div>
              <div className="menuIcon">
                <div className="dashTop"></div>
                <div className="dashBottom"></div>
                <div className="circle"></div>
              </div>
              <h1>{title}</h1>
              {/* <h2>Registro de Tareas</h2> */}
              <div className="search">
              <img
                alt="menu"
                src="/images/search.svg"
              />
            </div>

          </div>
            <input
                type="text"
                className="searchInput"
                placeholder="Buscar ..."
              />
            <div className="fa fa-search searchIcon"></div>
          </div>
          </>
      
    );
}

export default Header
