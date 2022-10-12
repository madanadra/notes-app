import { useContext, useRef } from "react";
import { NotesAppContext } from "../store/context";
import TextareaAutosize from 'react-textarea-autosize';

const Note = () => {
    const { state, dispatch } = useContext(NotesAppContext)
    const title = useRef()
    const note = useRef()

    return (
        <>
            <div className="title">
                <span className="material-icons" onClick={() => dispatch({ type: 'UPDATE_NOTE', actId: state.id.id, actTitle: title.current.value, actNote: note.current.value })}>arrow_back</span>
                <TextareaAutosize className="title-input" placeholder="Title" ref={title} defaultValue={state.id.title} minRows={1} maxLength={70} autoFocus />
            </div>
            <TextareaAutosize className="note-input" placeholder="Note" ref={note} defaultValue={state.id.note} minRows={5} />
        </>
    );
}

export default Note;