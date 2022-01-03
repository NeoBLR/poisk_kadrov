import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function ChakraNextLink({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Link as='a' {...props}>
        {children}
      </Link>
    </NextLink>
  )
}
