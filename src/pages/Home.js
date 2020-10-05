import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as HeroImage } from "../images/scrum-board.svg";
import { ReactComponent as WaveTop } from "../images/wave-top.svg";
import { ReactComponent as WaveTopTwo } from "../images/wave-top-2.svg";
import { ReactComponent as WaveBottom } from "../images/wave-bottom.svg";
import { ReactComponent as WaveBottomTwo } from "../images/wave-bottom-2.svg";
import { ReactComponent as FeaturesImage } from "../images/coworkers.svg";
import { ReactComponent as TodoList } from "../images/todo-list.svg";
import { ReactComponent as TeamChat } from "../images/team-chat.svg";
import { ReactComponent as Notification } from "../images/notifications.svg";
import { ReactComponent as UpArrow } from "../images/up-arrow.svg";
import styled from "styled-components";
import AuthModal from "../components/AuthModal";
import { AuthContext } from "../context/authContext";
import { Redirect } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const HomePage = () => {
  const { modalOpen, setModalOpen, userId } = useContext(AuthContext);
  const [selectedTable, setSelectedTable] = useState("firstTable");
  const size = useWindowSize();

  const tableVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const handlePricingTable = (e) => {
    setSelectedTable(e.target.id);
  };

  const indivTables = (
    <div className="indivTables">
      <div className="pricingLinks">
        <p onClick={handlePricingTable} id="firstTable" className="pricingLink">
          Basic
        </p>
        <p
          onClick={handlePricingTable}
          id="secondTable"
          className="pricingLink"
        >
          Premium
        </p>
        <p onClick={handlePricingTable} id="thirdTable" className="pricingLink">
          Enterprise
        </p>
      </div>
      <motion.table
        animate={selectedTable === "firstTable" ? "visible" : "hidden"}
        variants={tableVariants}
        className="indivTable"
      >
        <thead>
          <tr>
            <td></td>
            <th>Basic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Create and Assign Todos</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Customize Notifications</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Chat with Your Team</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Create Teams</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Custom Features</th>
            <td>&#x2717;</td>
          </tr>
          <tr>
            <th>24/7 Chat Support</th>
            <td>&#x2717;</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={() => setModalOpen(true)}>Signup</button>
            </td>
          </tr>
        </tbody>
      </motion.table>
      <motion.table
        animate={selectedTable === "secondTable" ? "visible" : "hidden"}
        variants={tableVariants}
        className="indivTable"
      >
        <thead>
          <tr>
            <td></td>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Create and Assign Todos</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Customize Notifications</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Chat with Your Team</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Create Teams</th>
            <td>5</td>
          </tr>
          <tr>
            <th>Custom Features</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>24/7 Chat Support</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Upgrade</button>
            </td>
          </tr>
        </tbody>
      </motion.table>
      <motion.table
        animate={selectedTable === "thirdTable" ? "visible" : "hidden"}
        variants={tableVariants}
        className="indivTable"
      >
        <thead>
          <tr>
            <td></td>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Create and Assign Todos</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Customize Notifications</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Chat with Your Team</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>Create Teams</th>
            <td>Unlmited</td>
          </tr>
          <tr>
            <th>Custom Features</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <th>24/7 Chat Support</th>
            <td>&#x2713;</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Upgrade</button>
            </td>
          </tr>
        </tbody>
      </motion.table>
    </div>
  );

  if (userId) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HomeWrapper>
      <HeroSection>
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          className="heroImageWrapper"
        >
          <HeroImage />
        </motion.div>
        <motion.div
          className="heroText"
          initial={{ y: "-50%" }}
          animate={{ y: 0 }}
        >
          <h1>
            <span className="highlight">Sync Up</span>
            <br />
            Your Team's Workflow
          </h1>
          <button
            className="register"
            onClick={(e) => setModalOpen(e.target.className)}
          >
            Start With Synergy
          </button>
        </motion.div>
      </HeroSection>
      <HowToSection id="details">
        <WaveTop className="waveTop" />
        <div className="featuresSection">
          <motion.div
            className="featuresText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>How Synergy Works</h2>
            <ol>
              <li>Create an Account</li>
              <li>Join or create a team</li>
              <li>Start chating and assigning todos</li>
              <li>Optimize your flow</li>
            </ol>
          </motion.div>
          <FeaturesImage />
        </div>
        <WaveBottom />
      </HowToSection>
      <FeatureSection id="features">
        <h2>Synergy Features</h2>
        <div className="featureContainer">
          <div className="feature">
            <TodoList />
            <div>
              <h3>Create Lists on Lists on Lists</h3>
              <p>
                Utilize lists and tasks to organize your team's goals and
                assignments.
              </p>
            </div>
          </div>
          <div className="feature featureSwitch">
            <TeamChat />
            <div>
              <h3>Stay Connected to Your Team</h3>
              <p>Use the online chat app to reach team members instantly.</p>
            </div>
          </div>
          <div className="feature">
            <Notification />
            <div>
              <h3>Customize Notifications</h3>
              <p>
                Choose which notifications you want and where you want them
                sent.
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>
      <PricingSection>
        <WaveTopTwo />
        <div className="pricingBg" id="pricing">
          <h2>Pricing Options</h2>
          {size.width >= 720 ? (
            <div className="pricingOptions">
              <table>
                <colgroup>
                  <col className="optionFeatures" />
                  <col className="option" />
                  <col className="option" />
                  <col className="option" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th className="price">Basic</th>
                    <th className="price">Premium</th>
                    <th className="price">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Create and Assign Todos</th>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                  </tr>
                  <tr>
                    <th>Customize Notifications</th>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                  </tr>
                  <tr>
                    <th>Chat with Your Team</th>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                  </tr>
                  <tr>
                    <th>Create Teams</th>
                    <td>1</td>
                    <td>5</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <th>Custom Features</th>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                  </tr>
                  <tr>
                    <th>24/7 Chat Support</th>
                    <td>&#x2717;</td>
                    <td>&#x2713;</td>
                    <td>&#x2713;</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button onClick={() => setModalOpen(true)}>Signup</button>
                    </td>
                    <td>
                      <button>Upgrade</button>
                    </td>
                    <td>
                      <button>Upgrade</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            indivTables
          )}
        </div>
        <WaveBottomTwo />
      </PricingSection>

      <UpArrowWrapper
        href="#"
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
      >
        <UpArrow />
      </UpArrowWrapper>

      {modalOpen && <AuthModal />}
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div``;

const HeroSection = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .heroImageWrapper {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  svg {
    width: 80%;
    margin: 0 2rem 0 auto;
    height: auto;
  }

  .heroText {
    width: 100%;
    font-size: 4.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    button {
      background-color: #ff6684;
      width: 340px;
      color: white;
      font-size: 2rem;
      border: none;
      border-radius: 5px;
      padding: 1rem 2rem;
      margin: 0.5rem 0 0 0;
      cursor: pointer;
      &:hover {
        background-color: #ff8099;
        color: #fff;
      }
    }

    @media (max-width: 1043px) {
    }
    @media (max-width: 847px) {
      svg {
        width: 80%;
        margin: 0;
      }

      button {
        width: 300px;
        font-size: 1.47rem;
      }
    }
  }

  .highlight {
    color: #6c63ff;
  }

  @media (max-width: 847px) {
    height: 60vh;
  }

  @media (max-width: 665px) {
    flex-direction: column;
    width: 100%;
    svg {
      margin: 0 auto 1rem;
      width: 70%;
    }

    .heroText {
      text-align: center;
      align-items: center;
      width: 100%;
    }
  }
`;

const HowToSection = styled.section`
  height: 100%;
  .waveTop {
    margin-top: -100px;
    position: relative;
    z-index: -10;
  }
  @media (max-width: 847px) {
    margin-top: 50px;
  }

  .featuresSection {
    height: 100%;
    background-color: #6c63ff;
    margin-top: -10px;
    padding: 3rem 2rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 665px) {
      flex-direction: column;

      .featuresText {
        margin-bottom: 2rem;
      }

      svg {
        height: auto;
        width: 70%;
      }
    }

    svg {
      margin: 0;
      transform: scaleX(-1);
      width: 55%;
    }
  }

  .featuresText {
    color: white;
    width: auto;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    ol {
      margin-left: 2rem;
    }
    li {
      margin: 0.5rem 0;
      font-size: 1.5rem;
    }
  }
`;

const FeatureSection = styled.section`
  min-height: 80vh;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 2rem 0 4rem;
    text-align: center;
  }

  svg {
    width: auto;
    height: 180px;
    margin-bottom: 2rem;
  }

  h3,
  p {
    width: 80%;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
    color: #ff6684;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .featureContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  .feature {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1043px) {
    .feature {
      width: 30%;
    }
  }

  @media (max-width: 847px) {
    h2 {
      margin-bottom: 0;
    }

    .featureContainer {
      flex-direction: column;
    }

    .feature {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      margin: 2rem auto;

      h3 {
        text-align: left;
      }
    }

    .featureSwitch {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: 665px) {
    .feature {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      margin: 2rem auto;
      h3 {
        text-align: center;
      }
      p {
        width: 70%;
        margin: 0 auto;
      }
    }
  }
`;

const PricingSection = styled.section`
  width: 100%;

  .pricingBg {
    width: 100%;
    height: 100%;
    min-height: 90vh;
    margin: -10px auto 0;
    padding: 2rem;
    background-color: #6c63ff;
    color: white;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin: 2rem 0 4rem;
    }

    @media (max-width: 720px) {
      h2 {
        margin: 2rem 0 2rem;
      }
    }
  }

  .price {
    font-size: 1.2rem;
  }

  .pricingOptions {
    display: flex;
    justify-content: space-evenly;
  }

  table {
    width: 100%;
    max-width: 1000px;
    margin: 0;
    border-collapse: collapse;

    tr {
    }
    th {
      width: auto;
    }
    td {
      text-align: center;
    }
    th,
    td {
      padding: 1rem;
      margin: 0;
      border: 1px solid #ddd;
    }

    tr:last-child td {
      border: none;
    }
  }

  button {
    background-color: #ff6684;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 0.5rem 0 0 0;
    cursor: pointer;
    &:hover {
      background-color: #ff8099;
      color: #fff;
    }
  }

  .optionFeatures {
    width: 28%;
  }
  .option {
    width: 24%;
  }

  /* INDIVIDUAL TABLES STYLES */
  .indivTables {
    display: flex;
    justify-content: center;
  }

  .indivTable {
    width: 80%;
    position: absolute;
    margin-top: 4rem;
  }

  .pricingLinks {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pricingLink {
    margin: 0 1rem;
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const UpArrowWrapper = styled(motion.a)`
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0.26);
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5%;
  right: 5%;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    svg {
      fill: #333;
    }
  }

  &:focus {
    outline: none;
  }
`;
