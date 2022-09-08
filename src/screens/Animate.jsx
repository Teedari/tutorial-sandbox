import React from "react";
import Col from "../components/common/Col";
import { motion } from "framer-motion";

function Animate() {
  return (
    <Col label="Animate">
      <motion.div 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1, x: 400}}
        className="box">

        </motion.div>
    </Col>
  );
}

export default Animate;
