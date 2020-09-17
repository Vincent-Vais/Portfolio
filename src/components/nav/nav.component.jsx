// REACT
import React, { useContext } from "react";
import { ProjectsContext } from "../../providers/projects/projects.provider";

// STYLED COMPONENTS
import { LayoutNavigation, NavigationList } from "./nav.styles";

// REACT COMPONENTS
import NavLink from "./nav-link/nav-link.component";

const Nav = () => {
  // const [hover, setHover] = useState(false);
  const {
    animations: { navRotate },
  } = useContext(ProjectsContext);

  return (
    <LayoutNavigation>
      <NavigationList
        animation={navRotate}
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
      >
        {/* <Logo hover={hover} /> */}
        <NavLink to="/welcome" className={"left"}>
          VINCE/VAIS
        </NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </NavigationList>
      {/* <ZoomOutMenu to="/menu" className="zoom">
        <i className="fas fa-search-minus fa-3x"></i>
      </ZoomOutMenu> */}
    </LayoutNavigation>
  );
};

export default Nav;
