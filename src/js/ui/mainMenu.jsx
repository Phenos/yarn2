import { connect } from 'react-redux'
import { closeMenu } from '../store/layout/actions.jsx';
import Menu from './menu.jsx';

const mapStateToProps = (state) => {
    return {
        isOpen: state.layout.menu.isOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClose: () => {
            dispatch(closeMenu())
        }
    }
};

const MainMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MainMenu
