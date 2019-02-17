const SET_ITEM_SHOW_INPUT = 'my-awesome-todo-app/items/SET_ITEM_SHOW_INPUT'
const SET_CURRENT_ITEM = 'my-awesome-todo-app/items/SET_CURRENT_ITEM'
const CLEAR_CURRENT_ITEM = 'my-awesome-todo-app/items/CLEAR_CURRENT_ITEM'
const ADD_ITEM = 'my-awesome-todo-app/items/ADD_ITEM';
const REMOVE_ITEMS_BY_ID = 'my-awesome-todo-app/items/REMOVE_ITEMS_BY_ID';
const EDIT_ITEM = 'my-awesome-todo-app/items/EDIT_ITEM'
const TOGGLE_ITEM_COMPLETE = 'my-awesome-todo-app/items/TOGGLE_ITEM_COMPLETE'
const SET_ACTIVE_TAB = 'my-awesome-todo-app/items/SET_ACTIVE_TAB'

const initialState = {
    items: [],
    itemsCountNew: 0,
    itemsCountCompleted: 0,
    currentItem: { title: '', notes: '', completed: false },
    inputMode: 'add',
    itemShowInput: false,
    editItemId: undefined,
    activeTab: 0
}

export default function reducer(state = initialState, { type, payload }) {

    switch (type) {

        case SET_ITEM_SHOW_INPUT:
            return {
                ...state,
                itemShowInput: payload.show,
                inputMode: payload.inputMode,
                editItemId: payload.editItemId,
            }

        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload.currentItem
            }

        case CLEAR_CURRENT_ITEM:
            return {
                ...state,
                currentItem: { title: '', notes: '', completed: false }
            }

        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat([{ ...payload.item, id: Date.now() }]),
                itemsCountNew: state.itemsCountNew + 1
            }

        case REMOVE_ITEMS_BY_ID:
            return {
                ...state,
                items: state.items.filter(item => !payload.itemIds.includes(item.id)),
                itemsCountNew: state.itemsCountNew - state.items.filter(item => !item.completed && payload.itemIds.includes(item.id)).length,
                itemsCountCompleted: state.itemsCountCompleted - state.items.filter(item => item.completed && payload.itemIds.includes(item.id)).length
            }

        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.id === payload.item.id ? payload.item : item)
            }

        case TOGGLE_ITEM_COMPLETE:
            const theItem = state.items.find(item => item.id === payload.itemId);
            return {
                ...state,
                items: state.items.map(item => item.id === payload.itemId ? { ...item, completed: !item.completed } : item),
                itemsCountNew: state.itemsCountNew + (theItem.completed ? 1 : -1),
                itemsCountCompleted: state.itemsCountCompleted + (theItem.completed ? -1 : 1)
            }

        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: payload.activeTab
            }

        default:
            return state;
    }
}

/**
 * Set visibility of item input
 * @param {boolean} show 
 * @param {string} inputMode - 'add' or 'edit'
 * @param {string} editItemId - Used only for inputMode === 'edit'
 */
export function setItemShowInput(show, inputMode, editItemId) {
    return {
        type: SET_ITEM_SHOW_INPUT,
        payload: { show, inputMode, editItemId }
    }
}

/**
 * Sets current item
 * @param {object} currentItem 
 */
export function setCurrentItem(currentItem) {
    return {
        type: SET_CURRENT_ITEM,
        payload: { currentItem }
    }
}

/**
 * Clears new item
 * 
 */
export function clearCurrentItem() {
    return {
        type: CLEAR_CURRENT_ITEM
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
 * Removes items by id
 * @param {[string]} itemIds 
 */
export function removeItemsById(itemIds) {
    return {
        type: REMOVE_ITEMS_BY_ID,
        payload: { itemIds }
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

/**
 * Toggle item complete
 * @param {string} itemId
 */
export function toggleItemComplete(itemId) {
    return {
        type: TOGGLE_ITEM_COMPLETE,
        payload: { itemId }
    }
}

/**
 * Sets active tab
 * @param {string} activeTab
 */
export function setActiveTab(activeTab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: { activeTab }
    }
}
