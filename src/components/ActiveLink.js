import {useRouter} from 'next/router'
import NextLink from 'next/link';
import React, {Children} from 'react'

const ActiveLink = ({children, ...props}) => {
  const {asPath} = useRouter()

  const active = asPath === props.href || asPath === props.as

  return (
    <NextLink {...props}>
      {{}.toString.call(children) === '[object Function]' ? children(active) : children}
    </NextLink>
  )
}

export default ActiveLink
