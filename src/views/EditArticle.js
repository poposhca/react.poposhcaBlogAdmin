import React from 'react'
import Quill from 'quill'

const EditArticle = () => {
    const [quillEditor, setQuillEditor] = React.useState(null)
    const [quillDelta, setQuillDelta] = React.useState(null)

    //Execute once to set Quill editor
    React.useEffect(() => {
        const newQuillEditor = new Quill('#editor', {
            modules: {
                toolbar: [
                    ['image', 'code-block']
                ]
            },
            theme: 'snow',
        })
        setQuillEditor(newQuillEditor)
        //TODO: Load delta if exists
    }, [])

    //Update delta
    React.useEffect(() => {
        console.log(quillDelta)
        //TODO save delta in local storage & in server
    }, [quillDelta])

    return (
        <section className="section is-medium">
            <h1 className="title">Articulo</h1>
            <div className="field">
                <input type="text" className="input is-medium" placeholder="Tutulo"/>
            </div>
            <div className="field">
                <label className="subtitle">Contenido</label>
                <div id="editor" />
                <input type="button" onClick={() => setQuillDelta(quillEditor.getContents())} />
            </div>
        </section>
    )
}

export default EditArticle
