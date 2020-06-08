import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TaskManager from "./pages/TaskManager";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Container from "./components/Container";
import MainContent from "./components/MainContent";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rems;
  min-height: 8rems;
  width: 100%;
  background: palevioletred;
`;

const Logo = styled.div`
  h1 {
    font-size: 2rem;
    padding: 0 0.5rem;
    color: #005b96;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const Nav = styled.nav`
  ul {
    min-width: 15rem;
    display: flex;
    list-style: none;
    font-size: 1.3rem;
    justify-content: space-evenly;

    @media (max-width: 600px) {
      min-width: 12rem;
      font-size: 1.2rem;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Header>
          <Logo>
            <h1>Task Manager</h1>
          </Logo>
          <Nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </Nav>
        </Header>

        <MainContent>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <TaskManager />
            </Route>
          </Switch>
        </MainContent>
      </Router>
    </Container>
  );
};

export default App;
