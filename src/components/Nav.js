import React from 'react';
import {Link} from 'react-dom';

export default function Nav (){
    return (
        <PortalMenu className = "link-menu">
            <Link to= '/'><button>Home Page</button></Link>
            <Link to= '/characterlist'><button>Character Page</button></Link>
        </PortalMenu>
    )
}


