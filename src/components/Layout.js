import React from 'react'
import { Card, CardSection } from '@kiwicom/orbit-components'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.orbit.paletteCloudLight};
  transition: 0.2s background;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.2s opacity;
  }
  .danger & {
    background: #000;
    &::before {
      background: url('https://res.cloudinary.com/silvenon/image/upload/v1/demon.jpg')
        center / cover no-repeat;
      opacity: 0.35;
    }
  }
`

const Inner = styled.div`
  width: 30rem;
  max-width: 100%;
`

function Layout({ children }) {
  return (
    <Container>
      <Inner>
        <Card>
          <CardSection>{children}</CardSection>
        </Card>
      </Inner>
    </Container>
  )
}

export default Layout
