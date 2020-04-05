import { Link } from 'react-router-dom'
import routes from '../constants/routes'

const SideBar = () => (
    <aside class="menu">
        <div className="hero">
            <div className="hero-body">
                <figure class="image is-128x128">
                    <img src="images/sn.jpg" />
                </figure>
            </div>
        </div>
        <p class="menu-label">Menu</p>
        <ul class="menu-list">
            <li><Link to={routes.home}>Endradas</Link></li>
            <li><Link to={routes.stats}>Estadisticas</Link></li>
            <li><Link to={routes.drafts}>Borradores</Link></li>
        </ul>
    </aside>
)

export default SideBar