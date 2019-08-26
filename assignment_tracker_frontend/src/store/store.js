import { createStore } from 'redux'

// Set up the initial state of the store
const initState =
{
    username : null,
    currentUserId : null,
    invalidCreds : false,
    emailExists : false,
    isAdmin : false
}

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e)
    {
        console.log(e)
        return undefined
    }
}

// Set up a reducer
export function reducer(state = initState, action=[])
{
    switch (action.type)
    {
        case 'UNAUTHORIZED_ACCESS' :
            return Object.assign({}, state, {
                invalidCreds : true
            });

        case 'CLEAR_LOGIN' :
            return Object.assign({}, state, {
                invalidCreds : false
            });

        case 'EXISTING_EMAIL' :
            return Object.assign({}, state, {
                emailExists : true
            });

        case 'CLEAR_SIGNUP' :
            return Object.assign({}, state, {
                emailExists : false
            });

        case 'SET_USER' :
            return Object.assign({}, state, {
                username : action.userInfo.firstname + ' ' + action.userInfo.lastname,
                currentUserId : action.userInfo._id,
                isAdmin : action.userInfo.isAdmin
            });

        case 'LOG_OUT' :
            return Object.assign({}, state = initState);

        default :
            return state
    }
}

export function setUserInfo(user)
{
    return {
        type : 'SET_USER',
        userInfo : user
    }
}

const persistedState  = loadFromLocalStorage()

// Create the store
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store