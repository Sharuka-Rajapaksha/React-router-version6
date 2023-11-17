import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function () {
  const Navigate = useNavigate();
  return (
    <div>

    <h1> This is HomePage</h1>

    <div>    
        <Link to = "/About"> About Page </Link>    
        <br></br>
        <Link to = "/Profile"> Profile </Link>
    </div>

    <br></br>

    <Button onClick = { () => Navigate("/Profile") }>
            Profile
    </Button>

    <br></br>
    
    <Button onClick={ () => Navigate("/About")}>
      About
    </Button>

    </div>
  )
}
