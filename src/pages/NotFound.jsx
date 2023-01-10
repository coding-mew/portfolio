import React from 'react';
import { Link} from 'react-router-dom'


function NotFound() {
  return (
   <>
   <p>
    404
    <br />
    Page not Found</p>
    <Link to="/">Go to Homepage</Link>
    </>
  )
}

export default NotFound