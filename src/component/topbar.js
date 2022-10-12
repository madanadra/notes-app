import { useContext } from "react";
import { NotesAppContext } from "../store/context";

const Topbar = () => {
    const { dispatch } = useContext(NotesAppContext)

    return (
        <div className="topbar">
          <span className="material-icons search">search</span>
          <input type="search" placeholder="Search title" onChange={(e) => dispatch({ type: 'SEARCH_NOTE', search: e.target.value })} autoComplete="off" spellCheck="false" />
          <div className="btn"></div>
          <span className="material-icons" onClick={() => dispatch({ type: 'DELETE_ALL' })}>delete_sweep</span>
          <span className="material-icons" onClick={() => dispatch({ type: 'ADD_NOTE' })}>add</span>
        </div>
    );
}

export default Topbar;