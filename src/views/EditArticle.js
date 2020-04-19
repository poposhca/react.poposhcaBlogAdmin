import React from 'react'
import Quill from 'quill'

const EditArticle = () => {
    const [quillEditor, setQuillEditor] = React.useState(null)
    React.useEffect(() => {
        const newQuillEditor = new Quill('#editor', {
            modules: {
                toolbar: [
                    ['image', 'code-block']
                ]
            },
            theme: 'snow',
        })
        setQuillEditor(newQuillEditor);
    }, [])
    const getDelta = () => {
        const delta = quillEditor.getContents()
        console.log(delta)
    }
    return (
        <section className="section is-medium">
            <h1 className="title">Articulo</h1>
            <div className="field">
                <input type="text" className="input is-medium" placeholder="Tutulo"/>
            </div>
            <div className="field">
                <label className="subtitle">Contenido</label>
                <div id="editor" />
                <input type="button" onClick={() => getDelta()}>Test</input>
            </div>
        </section>
    )
}

export default EditArticle
