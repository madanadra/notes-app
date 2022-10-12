export const initialState = {
    acts: [],
    search: '',
    id: {}
};
  
export const reducer = (state, action) => {
    switch (action.type) {
        case 'FIRST_LOAD':
            return {
                ...state,
                acts: action.acts
            };
        case 'CHANGE_ID':
            return {
                ...state,
                id: action.act
            };
        case 'ADD_NOTE':
            const newAct = {id: +new Date(), title: '', note: ''};
            return {
                ...state,
                acts: [...state.acts, newAct],
                id: newAct
            };
        case "UPDATE_NOTE":
            if (action.actTitle) {
                const updateAct = state.acts.map((item) => item.id === action.actId
                ? { ...item, title: action.actTitle, note: action.actNote }
                : item);
                return {
                    ...state,
                    acts: updateAct,
                    id: {}
                };
            } else {
                const remainAct = state.acts.filter((item) => item.id !== action.actId);
                return {
                    ...state,
                    acts: remainAct,
                    id: {}
                };
            }
        case 'DELETE_NOTE':
            const remainAct = state.acts.filter((item) => item.id !== action.actId);
            return {
                ...state,
                acts: remainAct
            };
        case 'DELETE_ALL':
            return {
                ...state,
                acts: [],
                id: {}
            };
        case 'SEARCH_NOTE':
            return {
                ...state,
                search: action.search
            };
        default:
            return state;
    }
};