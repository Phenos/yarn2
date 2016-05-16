import { connect } from 'react-redux'
import Toolbar from './toolbar.jsx';
import { openMenu } from '../store/layout/actions.jsx';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenMenu: () => {
            dispatch(openMenu())
        }
    }
};

const MainToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default MainToolbar
