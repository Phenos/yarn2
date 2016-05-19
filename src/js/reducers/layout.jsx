import update from 'react/lib/update';

import {
    LAYOUT_OPEN_MENU,
    LAYOUT_CLOSE_MENU,
    LAYOUT_TOGGLE_MENU } from '../actions/layout.jsx';

const initialSate = {
    menu: {
        isOpen: false
    }
};

export default function reducer(state = initialSate, action) {
    switch (action.type) {
        case LAYOUT_OPEN_MENU:
            return update(state, {
                menu: { isOpen : { $set: true }}
            });
        case LAYOUT_CLOSE_MENU:
            return update(state, {
                menu: { isOpen : { $set: false }}
            });
        case LAYOUT_TOGGLE_MENU:
            return update(state, {
                menu: { isOpen : { $set: state.menu.isOpen }}
            });
        default:
            return state;

    }
}