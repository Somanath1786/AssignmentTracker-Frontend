import { createStore } from 'redux'

// Set up the initial state of the store
const initState =
{
    username : null,
    currentUserId : null,
    invalidCreds : false
}

// Set up a reducer
export function reducer(state = initState, action=[])
{
    switch (action.type)
    {
        default :
            return state
    }
}

// Create the store
const store = createStore(reducer)

export default store