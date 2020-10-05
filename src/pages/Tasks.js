import React from "react";
import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";

const GET_LISTS = gql`
  query {
    getLists {
      _id
      title
      description
      tasks {
        _id
        content
      }
    }
  }
`;

const TasksPage = () => {
  const { data } = useQuery(GET_LISTS);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <h1>Tasks Page</h1>
      {data && (
        <div>
          <ul>
            {data.getLists.map((list) => (
              <li key={list._id}>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default TasksPage;
