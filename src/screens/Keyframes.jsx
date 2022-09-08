import React from "react";
import Col from "../components/common/Col";
import { motion } from "framer-motion";
function Keyframes() {
  return (
    <Col label="Keyframes">
      <div className="center">
        <motion.div
          className="box sm"
          animate={{
            scale: [1, 2, 2, 2, 2, 1],
            rotateZ: [null, null, 180, 180, 180, -180],
            borderRadius: "50%",
          }}
          transition={{ ease: "easeInOut", duration: 1.1 }}
        />
        {/* <motion.div
          className="box sm"
          animate={{ x: [0, 200, 200, 0], y: [-200, -200, 0, 0] }}
          transition={{ease: 'easeInOut', duration: 1}}
        /> */}
      </div>
    </Col>
  );
}

export default Keyframes;
