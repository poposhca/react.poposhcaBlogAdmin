import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes'

const SideBar = () => (
    <aside className="menu">
        <div className="hero">
            <div className="hero-body">
                <figure className="image is-128x128">
                    <img src="images/sn.jpg" />
                </figure>
            </div>
        </div>
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
            <li><Link to={routes.home}>Endradas</Link></li>
            <li><Link to={routes.stats}>Estadisticas</Link></li>
            <li><Link to={routes.drafts}>Borradores</Link></li>
        </ul>
    </aside>
)

export default SideBar