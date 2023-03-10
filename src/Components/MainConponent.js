import React, { useState } from 'react'

function MainConponent() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1 data-testid="Heading" style={{ fontSize: '20px' }}>
        MainConponent
      </h1>

      <div data-testid="Counter-Div">Counter :{counter}</div>
      <button
        onClick={() => {
          setCounter((prevState) => prevState + 1)
        }}
      >
        Add Count
      </button>
    </>
  )
}

export default MainConponent
