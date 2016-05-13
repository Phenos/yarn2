import { LAYOUT_OPEN_MENU, LAYOUT_CLOSE_MENU, LAYOUT_TOGGLE_MENU } from './layout/actions.jsx';

import { List, Map, fromJS } from 'immutable';

const initialSate = fromJS({
    layout: {
        menu: {
            isOpen: false
        }
    }
});

export default function reducer(state = initialSate, action) {
    switch (action.type) {
        case LAYOUT_OPEN_MENU:
            return state.updateIn(['layout', 'menu', "isOpen"], value => true);
        case LAYOUT_CLOSE_MENU:
            return state.updateIn(['layout', 'menu', "isOpen"], value => false);
        case LAYOUT_TOGGLE_MENU:
            return state.updateIn(['layout', 'menu', "isOpen"], value => !value);
        default:
            return state;

    }
}