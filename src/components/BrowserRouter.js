import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

 class browserRouter extends Component {
    render() {
        return (
            <div>
               <h1>This the browserRouter page</h1>  
            </div>
        )
    }
}

export default withAuth0(browserRouter)
