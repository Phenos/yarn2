import { connect } from 'react-redux'
import { closeMenu } from '../actions/layout.jsx';
import Menu from '../components/menu.jsx';
import auth from '../services/auth.jsx';


const mapStateToProps = (state) => {
    return {
        isOpen: state.layout.menu.isOpen,
        profile: auth.profile()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClose: () => {
            dispatch(closeMenu())
        },
        onLogin: () => {
            console.log("Login");
            auth.login();
        },
        onLogout: () => {
            auth.logout();
        }
    }
};

const MainMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MainMenu
