import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    items: state.todo.items
})
const mapDispatchToProps = {

}

class MainScreen extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div>This is the main screen</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
