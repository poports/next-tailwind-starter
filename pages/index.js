import React from 'react'
import tw, { css, theme } from 'twin.macro'
import { Button, Logo } from './../components'

// Mix sass/css with values from your tailwind.config
const linearGradientStyle = css`
  background: linear-gradient(
    ${theme`colors.electric`},
    ${theme`colors.ribbon`}
  );
`

const IndexPage = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      linearGradientStyle
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default IndexPage
