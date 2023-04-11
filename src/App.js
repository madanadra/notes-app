import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { NotesAppContext } from "./store/context";
import List from "./component/list";
import Topbar from "./component/topbar";
import Note from "./component/note";
import './style/all.css';

function App() {
  const [cookies, setCookie] = useCookies(['acts'])
  const { state, dispatch } = useContext(NotesAppContext)

  useEffect(() => {
    if (Array.isArray(cookies.acts)) {
      dispatch({ type: 'FIRST_LOAD', acts: cookies.acts });
    }
    console.log(cookies.acts);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCookie('acts', JSON.stringify(state.acts), { path: '/', expires: new Date(Date.now()+2592000) });
    console.log(cookies.acts);
  }, [state.acts]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    Object.keys(state.id).length ? <Note /> : <><Topbar /><List /></>
  );
}

export default App;
