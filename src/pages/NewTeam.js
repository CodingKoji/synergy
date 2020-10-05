import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../context/authContext";
import { Redirect } from "react-router-dom";

const ADD_TEAM = gql`
  mutation AddTeam(
    $name: String!
    $description: String!
    $created_by: String!
  ) {
    addTeam(
      addTeamInput: {
        name: $name
        description: $description
        created_by: $created_by
      }
    ) {
      _id
    }
  }
`;

const NewTeamPage = () => {
  const { userId } = useContext(AuthContext);
  const [team, setTeam] = useState({
    name: "",
    description: "",
    created_by: userId,
  });
  const [redirect, setRedirect] = useState(false);
  const [addTeam] = useMutation(ADD_TEAM);

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();

    await addTeam({ variables: team })
      .then((res) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <Wrapper>
        <h1>Create a New Team</h1>
        <TeamForm onSubmit={handleAddTeam}>
          <TextField
            label="Team Name"
            name="name"
            onChange={handleChange}
            variant="outlined"
            style={{ marginBottom: "1.5rem" }}
          />
          <TextField
            label="Description"
            name="description"
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            style={{ marginBottom: "1.5rem" }}
          />

          <Button type="submit" variant="contained">
            Start Team
          </Button>
        </TeamForm>
      </Wrapper>
      {redirect && <Redirect to="/dashboard" />}
    </motion.div>
  );
};

export default NewTeamPage;

const Wrapper = styled.div`
  padding: 2rem 3rem;

  h1 {
    margin: 0rem 0 1rem;
  }
`;

const TeamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;
