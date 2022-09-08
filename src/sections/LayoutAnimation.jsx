import React from 'react'
import {motion} from 'framer-motion'
import Accordion from '../components/Accordion'
function LayoutAnimation() {
  return (
    <div>
      <motion.section style={{border: '1px solid #2ecc', height: 150, padding: '1rem'}}>
        <Accordion label={'Learning Layout animations'}>
          <p>Qui Lorem labore elit irure in nostrud irure eiusmod sint ea cupidatat. Lorem aliquip quis eu eiusmod consectetur ullamco enim veniam. Nisi sit duis mollit ipsum incididunt magna do ex sint ex et elit commodo. Voluptate veniam id fugiat aute ad cillum enim ex fugiat est laborum reprehenderit ipsum duis. Anim culpa ex cupidatat tempor.</p>
        </Accordion>
      </motion.section>
    </div>
  )
}

export default LayoutAnimation
