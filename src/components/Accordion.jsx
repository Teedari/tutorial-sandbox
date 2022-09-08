import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Accordion({label, children}) {
  const [drop, setDrop] = useState(false)
  const dropHandler = () => {
    setDrop((prev) => !prev)
  }
  return (
    <motion.div
      layout
      className='accordion'
      style={{height: drop ? "unset" : "50px"}}
    >
      <button className='btn' onClick={dropHandler}>{label}</button>
      <div>
        {children}
      </div>
    </motion.div>
  )
}

export default Accordion
