import React from 'react'
import { Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'

export default function () {
  const Navigate = useNavigate();
  return (
    <div>
        <div>
            <h1>This is Profile Page</h1>
        </div>

      <Button onClick={ () => Navigate(-1)}>
        Back to Home
      </Button>

    </div>
  )
}
