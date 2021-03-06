import React from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <h1>Profile Page</h1>
    </motion.div>
  );
};

export default ProfilePage;
