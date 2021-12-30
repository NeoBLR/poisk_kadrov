import { AddIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

export default function Path() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  }
  return <AddIcon />
}
