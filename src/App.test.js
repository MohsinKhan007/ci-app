import { render, screen } from '@testing-library/react'

import App from './App'

test('Main Component Heading', () => {
  render(<App />)

  const Heading = screen.getByTestId('Heading')

  expect(Heading).toBeInTheDocument()
  expect(Heading).toHaveTextContent('MainConponent')

  const Counter = screen.getByTestId('Counter-Div')

  expect(Counter).toBeInTheDocument()
  expect(Counter).toHaveTextContent('Counter :0')
})

test('Demo test', () => {
  expect(2).toBe(2)
})
