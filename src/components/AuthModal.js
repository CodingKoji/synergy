import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useMutation, gql, useLazyQuery } from "@apollo/client";
import { AuthContext } from "../context/authContext";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const REGISTER_USER = gql`
  mutation RegisterUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      addUserInput: {
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
      }
    ) {
      _id
    }
  }
`;

const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
    }
  }
`;

const AuthModal = () => {
  const [addUser] = useMutation(REGISTER_USER);
  const [login, { data }] = useLazyQuery(LOGIN_USER);
  const { userId, setUserId, modalOpen, setModalOpen } = useContext(
    AuthContext
  );
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userLogin = {
      email: user.email,
      password: user.password,
    };
    login({ variables: userLogin });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await addUser({ variables: user })
      .then((res) => {
        localStorage.setItem("userId", res.data.addUser._id);
        setUserId(res.data.addUser._id);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const Login = (
    <>
      <h2>Welcome Back, Log In</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
  const Register = (
    <>
      <h2>Create an Account</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" onChange={handleChange} />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );

  if (data && data.login) {
    localStorage.setItem("userId", data.login._id);

    return <Redirect to="/dashboard" />;
  }

  return (
    <AuthModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setModalOpen(false)}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        {modalOpen === "login" ? Login : Register}
        <button
          className="switchBtn"
          onClick={() =>
            setModalOpen((prevState) => {
              if (prevState === "login") return "register";
              if (prevState === "register") return "login";
            })
          }
        >
          {modalOpen === "login" ? "Create an Account" : "Switch to Log In"}
        </button>
      </Modal>
      {userId && <Redirect to="/dashboard" />}
    </AuthModalWrapper>
  );
};

export default AuthModal;

const AuthModalWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.26);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  width: 420px;
  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    margin: 0 0 1rem;
    font-size: 1.4rem;
    padding: 0.3rem;
    border: 1px solid #333;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #ff6684;
    color: white;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 1rem 0 0 0;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: #ff8099;
      color: #fff;
    }
    &:focus {
      outline: none;
    }
  }
  .switchBtn {
    background-color: #6c63ff !important;
  }
`;
