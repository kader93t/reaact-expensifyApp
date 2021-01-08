import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h1>Not found 404  </h1>
        <Link to="/">
            <h2>Go Home</h2>
        </Link>
    </div>
  
);
export default NotFoundPage;