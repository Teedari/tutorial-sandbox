import React, { useState } from "react";
import Col from "../components/common/Col";
import { motion } from "framer-motion";

function Variants() {
  const [dropdown, setDropdown] = useState({
    hidden: { scale: 0 },
    visible: { scale: 0 },
  });

  const item_variant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const dropdownHandler = () => {
    if(dropdown.visible.scale === 0){
      setDropdown({
        ...dropdown, visible:{
          scale: 1
        }
      })
      
    }else{

      setDropdown({
        ...dropdown, visible:{
          scale: 0
        }
      })
    }
  }

  return (
    <Col label="Variants">
      <section style={{ width: 300, paddingInline: "1rem" }}>
        <button onClick={dropdownHandler} className="btn">Menu</button>
        <motion.ul
          className="menu-items"
          initial="hidden"
          animate="visible"
          variants={dropdown}>
          <motion.li variants={item_variant}>Item 1</motion.li>
          <motion.li variants={item_variant}>Item 2</motion.li>
          <motion.li variants={item_variant}>Item 3</motion.li>
        </motion.ul>
      </section>
    </Col>
  );
}

export default Variants;
