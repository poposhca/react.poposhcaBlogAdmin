import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes'

const ArticlesHome = () => (
    <Link to={routes.edit}>
        <figure className="image is-48x48">
            <img className="is-rounded" src="images/plusButton.jpg" />
        </figure>
    </Link>
)

export default ArticlesHome