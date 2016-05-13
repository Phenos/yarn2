const LAYOUT_OPEN_MENU = 'LAYOUT_OPEN_MENU';
const LAYOUT_CLOSE_MENU = 'LAYOUT_CLOSE_MENU';
const LAYOUT_TOGGLE_MENU = 'LAYOUT_TOGGLE_MENU';

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

