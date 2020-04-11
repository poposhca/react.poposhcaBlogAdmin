import React from 'react'

const EditArticle = () => (
    <section className="section is-medium">
        <h1 className="title">Articulo</h1>
        <div className="field">
            <input type="text" className="input is-medium" placeholder="Tutulo" />
        </div>
        <div className="field">
            <label className="subtitle">Contenido</label>
            <input type="text" className="input" />
        </div>
    </section>
)

export default EditArticle
