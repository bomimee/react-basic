import React from 'react'

export default function Clock() {
  return (
    <div><h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2></div>
  )
}
