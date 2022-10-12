import { useContext } from "react";
import { NotesAppContext } from "../store/context";

const List = () => {
    const { state, dispatch } = useContext(NotesAppContext)

    if (state.acts.length) {
        return (
            <div className="list">
                {state.acts.filter(act => act.title.toLowerCase().includes(state.search.toLowerCase())).map(act => 
                <div className="box" key={act.id} onClick={() => dispatch({ type: 'CHANGE_ID', act: act })}>
                    <h2>{act.title}</h2>
                    <span className="material-icons" onClick={(e) => {dispatch({ type: 'DELETE_NOTE', actId: act.id }); e.stopPropagation()}}>delete</span>
                </div>
                )}
            </div>
        );
    } else {
        return (
            <h3>Your note is empty</h3> 
        );
    }
}

export default List;