import React from 'react';
import { Input } from 'reactstrap'
import { connect } from 'react-redux'
import { setCurrentItem, addItem, setItemShowInput, clearCurrentItem, editItem } from '../../redux/modules/todo'

const mapStateToProps = state => ({
    currentItem: state.todo.currentItem,
    inputMode: state.todo.inputMode
})

const mapDispatchToProps = { setCurrentItem, addItem, setItemShowInput, clearCurrentItem, editItem }

class TodoItemInputGroup extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('click', this.windowOnClick)
        }, 150)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.windowOnClick)
    }

    // Either add new item, or finish editing
    submit() {
        const { currentItem, addItem, inputMode, clearCurrentItem, setItemShowInput, editItem } = this.props
        if (inputMode === 'add') {
            addItem(currentItem);
        } else {
            editItem(currentItem)
        }
        clearCurrentItem();
        setItemShowInput(false);
    }

    cancel() {
        const { setItemShowInput, clearCurrentItem } = this.props;
        setItemShowInput();
        clearCurrentItem();
    }

    windowOnClick = evt => {
        if (evt.target.id !== 'input-todo-title' && evt.target.id !== 'input-todo-notes') {
            if (this.props.currentItem.title && this.props.currentItem.title !== '') {
                this.submit();
            } else {
                this.cancel();
            }
        }
    }

    onKeyDown = evt => {
        const { key, keyCode, shiftKey } = evt;
        if (this.props.currentItem.title && this.props.currentItem.title !== ''
            && !shiftKey && (key === 'Enter' || keyCode === 13)) {
            this.submit();
        } else if (key === 'Escape' || keyCode === 27) {
            this.cancel();
        }
    }

    render() {
        const { currentItem, setCurrentItem } = this.props;
        return (
            <div>
                <Input
                    autoFocus
                    bsSize="lg"
                    type="text"
                    id="input-todo-title"
                    placeholder="Enter title"
                    value={currentItem.title}
                    onKeyDown={this.onKeyDown}
                    onChange={(evt) => { setCurrentItem({ ...currentItem, title: evt.target.value }) }}
                />
                <Input
                    rows="4"
                    className='mt-3'
                    type="textarea"
                    id="input-todo-notes"
                    placeholder="Enter notes (optional)"
                    value={currentItem.notes}
                    onKeyDown={this.onKeyDown}
                    onChange={(evt) => { setCurrentItem({ ...currentItem, notes: evt.target.value }) }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemInputGroup);
