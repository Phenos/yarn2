import { connect } from 'react-redux'
import Toolbar from '../components/toolbar.jsx';
import { openMenu } from '../actions/layout.jsx';

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
