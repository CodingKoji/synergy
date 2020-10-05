import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Drawer = () => {
  return (
    <DrawerWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <NavLink to="/dashboard/teams">Teams</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="/dashboard/teams/dna-marketing">
                  DNA Marketing
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/teams/yogi-times">Yogi Times</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/teams/north-face">
                  The North Face
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/dashboard/new-team">Create a Team</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/tasks">Task Lists</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="/dashboard/tasks/urgent">Urgent</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tasks/week">This Week</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tasks/month">This Month</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/dashboard/new-list">Add a List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </DrawerWrapper>
  );
};

export default Drawer;

const DrawerWrapper = styled.div`
  height: 100vh;
  width: auto;
  background-color: #e6e6e6;
  position: relative;
  z-index: 5;
  font-size: 1.1rem;
  padding: 1rem;

  nav {
    margin: 0 auto;
  }

  ul {
    list-style: none;
    width: auto;
  }

  li {
    width: 100%;
    margin: 0 auto 0.5rem;
  }

  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #111;
    }
  }

  .mainLink {
  }

  .active {
    color: #6c63ff;
  }

  .dropdown {
    margin-left: 1rem;
  }
`;
