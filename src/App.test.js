import { render, screen } from '@testing-library/react'

import MainConponent from './Components/MainConponent'

test('Main Component Heading', () => {
  render(<MainConponent />)

  const Heading = screen.getByTestId('Heading')

  expect(Heading).toBeInTheDocument()
  expect(Heading).toHaveTextContent('MainConponent')

  const Counter = screen.getByTestId('Counter-Div')

  expect(Counter).toBeInTheDocument()
  expect(Counter).toHaveTextContent('Counter :0')
})
