import {
    LAYOUT_OPEN_MENU,
    LAYOUT_CLOSE_MENU,
    LAYOUT_TOGGLE_MENU } from './layout/actions.jsx';

const initialSate = {
    layout: {
        menu: {
            isOpen: false
        }
    }
};

export default function reducer(state = initialSate, action) {
    /* Create a new copy of the store state */
    var newState = Object.assign({}, state);

    /* Create a few shortcuts for deep objects */
    var menu = state.layout.menu;

    switch (action.type) {
        case LAYOUT_OPEN_MENU:
            menu.isOpen = true;
            return newState;
        case LAYOUT_CLOSE_MENU:
            menu.isOpen = false;
            return newState;
        case LAYOUT_TOGGLE_MENU:
            menu.isOpen = !menu.isOpen;
            return newState;
        default:
            return state;

    }
}