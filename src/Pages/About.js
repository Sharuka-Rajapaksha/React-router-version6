import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function About() {
  const Navigate = useNavigate();

  return (
    <div>
        <div>
            <h1>This is About Page</h1>
        </div>

        <Button onClick={ () => Navigate(-1)}>
          Back to Home
        </Button>
    </div>
  )
}
