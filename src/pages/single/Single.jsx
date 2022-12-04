import './single.css'

import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Individualpost from '../../components/individualPost/Individualpost'

export default function Single() {
    return (

        <div className="single">
            <Individualpost />
            < Sidebar />
        </div>

    )
}
