import React from "react";
import { motion } from "framer-motion";

const SettingsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <h1>Settings Page</h1>
    </motion.div>
  );
};

export default SettingsPage;
