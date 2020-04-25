import React from 'react'
import Quill from 'quill'
import { saveLocal, getArticle } from '../utils/saveLocal'

const EditArticle = () => {
    //TODO: Load delta if exists
    const article = getArticle(0)
    console.log(article)

    const [title, setTitle] = React.useState(article.title)
    const [quillEditor, setQuillEditor] = React.useState(null)
    const [quillDelta, setQuillDelta] = React.useState(article.content)

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
        quillDelta && newQuillEditor.setContents(quillDelta, 'user')
        setQuillEditor(newQuillEditor)
        console.log('Component mounted')
    }, [])

    //Update delta
    React.useEffect(() => {
        const article = {
            title,
            content: quillDelta
        }
        console.log(article)
        //TODO save articles with different index
        saveLocal(article, 0)
        //TODO save delta in server
        console.log('article saved')
    }, [quillDelta])

    return (
        <section className="section is-medium">
            <h1 className="title">Articulo</h1>
            <div className="field">
                <input
                    type="text"
                    className="input is-medium"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
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
