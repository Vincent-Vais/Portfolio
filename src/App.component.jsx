// REACT
import React from "react";

// ROUTER
import { Route, Redirect } from "react-router-dom";

// STYLED COMPONENTS
import { AppContainer } from "./App.styles";

// REACT COMPONENTS
import Nav from "./components/nav/nav.component";
import LandingPage from "./components/hero/page/landing-page.component";
import ProjectsPage from "./components/projects/page/projects-page.component";
import Popper from "./components/projects/popper/popper.component";
import SkillsPage from "./components/skills/page/skills-page.component";
import ContactPage from "./components/contact/page/contact-page.component";
import { ProjectsProvider } from "./providers/projects/projects.provider";

const App = () => (
  <AppContainer>
    <ProjectsProvider>
      <Nav />
      <Route path="/" render={() => <Redirect to="/welcome" />} />
      <Route path="/welcome" component={LandingPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/all" component={Popper} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/:any" render={() => <Redirect to="/welcome" />} />
    </ProjectsProvider>
  </AppContainer>
);

export default App;
