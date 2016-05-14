export const LAYOUT_OPEN_MENU = 'LAYOUT_OPEN_MENU';
export const LAYOUT_CLOSE_MENU = 'LAYOUT_CLOSE_MENU';
export const LAYOUT_TOGGLE_MENU = 'LAYOUT_TOGGLE_MENU';

import store from '../store.jsx';

export function openMenu() {
    return {
        type: LAYOUT_OPEN_MENU
    }
}

export function closeMenu() {
    return {
        type: LAYOUT_CLOSE_MENU
    }
}

export function toggleMenu() {
    return {
        type: LAYOUT_TOGGLE_MENU
    }
}

export function doOpenMenu() {
    return store.dispatch(openMenu());
}

export function doCloseMenu() {
    return store.dispatch(closeMenu());
}

export function doToggleMenu() {
    return store.dispatch(toggleMenu());
}


