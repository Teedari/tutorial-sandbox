import React from "react";
import Col from "../components/common/Col";
import { motion } from "framer-motion";
function Transition() {
  return (
    <Col label="Transitions">
      <section className="center">
        <motion.div
          initial={{opacity: 0}}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="box circle"></motion.div>
      </section>
    </Col>
  );
}

export default Transition;
