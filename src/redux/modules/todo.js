const ADD_ITEM = 'my-awesome-todo-app/items/ADD_ITEM';
const REMOVE_ITEMS_BY_ID = 'my-awesome-todo-app/items/REMOVE_ITEMS_BY_ID';
const EDIT_ITEM = 'my-awesome-todo-app/items/EDIT_ITEM'

const initialState = {
    items: []
}

export default function reducer(state = initialState, { action, payload }) {
    switch (action) {

        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat([payload.item])
            }

        case REMOVE_ITEMS_BY_ID:
            return {
                ...state,
                items: state.items.filter(item => !payload.itemIds.includes(item.id))
                // items:  state.items.concat([payload])
            }

        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.id === payload.item.id ? payload.item : item)
            }

        default:
            return state;
    }
}

/**
 * Adds a new item to the items state
 * @param {object} item 
 */
export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: { item }
    }
}

/**
 * Remove an item by id
 * @param {[string]} itemsIds 
 */
export function removeItemsById(itemsIds) {
    return {
        type: REMOVE_ITEMS_BY_ID,
        payload: { itemsIds }
    }
}

/**
 * Edit an item by id
 * @param {object} item 
 */
export function editItem(item) {
    return {
        type: EDIT_ITEM,
        payload: { item }
    }
}
