import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import styled from "styled-components";
import TeamsPage from "./Teams";
import TeamPage from "./Team";
import NewTeamPage from "./NewTeam";
import TasksPage from "./Tasks";
import SettingsPage from "./Settings";
import ProfilePage from "./Profile";
import Drawer from "../components/Drawer";
import { AuthContext } from "../context/authContext";
import TeamCard from "../components/TeamCard";

const GET_TEAMS = gql`
  query GetTeams($userId: String!) {
    getTeams(userId: $userId) {
      _id
      name
    }
  }
`;

const DashboardContent = () => {
  const { userId } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: { userId },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <DashboardOverview>
        <h1>Dashboard</h1>
        <h2>YOUR AGENA</h2>

        <div className="cardGroup">
          <div className="card">
            <i className="fas fa-calendar-day"></i>
            <div>
              <p>7</p>
              <p>Due Today</p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-calendar-week"></i>
            <div>
              <p>21</p>
              <p>Due This Week</p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-check-square"></i>
            <div>
              <p>9</p>
              <p>Completed This Week</p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-calendar-check"></i>
            <div>
              <p>34</p>
              <p>Completed This Month</p>
            </div>
          </div>
        </div>
      </DashboardOverview>
      <TeamSection>
        {error && console.log(error)}
        {loading && console.log(loading)}
        {data &&
          data.getTeams.map((team) => (
            <TeamCard key={team._id} title={team.name} />
          ))}
      </TeamSection>
      <p>{userId}</p>
    </motion.div>
  );
};

const DashboardPage = () => {
  return (
    <DashboardWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Drawer />
      <div className="dashboardContent">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/dashboard/teams" component={TeamsPage} exact />
            <Route path="/dashboard/teams/:id" component={TeamPage} exact />
            <Route path="/dashboard/new-team" component={NewTeamPage} exact />
            <Route path="/dashboard/tasks" component={TasksPage} exact />
            <Route path="/dashboard/settings" component={SettingsPage} exact />
            <Route path="/dashboard/profile" component={ProfilePage} exact />
            <Route path="/dashboard" component={DashboardContent} exact />
          </Switch>
        </AnimatePresence>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardPage;

const DashboardWrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;

  .dashboardContent {
    position: relative;
    z-index: 0;
    width: 100%;
  }
`;

const DashboardOverview = styled.div`
  background-color: #6c63ff;
  width: 100%;
  padding: 3rem;

  h1 {
    color: white;
    margin-bottom: 1.5rem;
  }

  .cardGroup {
    display: flex;
    justify-content: space-between;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid slategray;
    border-radius: 5px;
    padding: 1.5rem;
    background: #eee;
    width: 22%;
    max-width: 240px;
    min-width: 200px;
    i {
      font-size: 3rem;
      width: 30%;
      color: #ff6684;
    }
    div {
      width: 70%;
    }
  }
`;

const TeamSection = styled.div`
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
