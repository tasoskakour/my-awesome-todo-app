import React from 'react';
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import { TodoItemInputGroup } from '../'
import { myTimeAgo } from '../../utilities/helpers'
import { connect } from 'react-redux'
import { setItemShowInput, setCurrentItem, removeItemsById, toggleItemComplete } from '../../redux/modules/todo'
import './styles.css'

const mapStateToProps = state => ({
    inputMode: state.todo.inputMode,
    itemShowInput: state.todo.itemShowInput,
    editItemId: state.todo.editItemId
})

const mapDispatchToProps = { setItemShowInput, setCurrentItem, removeItemsById, toggleItemComplete }

const isEditMode = (itemShowInput, inputMode, thisItemId, editItemId) => {
    return itemShowInput && inputMode === 'edit' && thisItemId === editItemId;
}

class TodoItem extends React.Component {

    state = {
        deletePopoverVisible: false
    }

    componentDidMount() {
        window.addEventListener('click', this.onWindowClick)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick)
    }

    onWindowClick = (evt) => {
        if (evt.target.className === '' || (evt.target.className && !evt.target.className.split(' ').includes('is-inside-popover'))) {
            this.setState({ deletePopoverVisible: false })
        }
    }

    render() {
        const { deletePopoverVisible } = this.state;
        const { id, title, notes, completed } = this.props.item;
        const { itemShowInput, inputMode, editItemId, setItemShowInput, setCurrentItem, removeItemsById, toggleItemComplete } = this.props;
        return (
            <Card style={{ height: '100%' }}>
                {!isEditMode(itemShowInput, inputMode, id, editItemId) &&
                    <CardHeader>
                        <Button
                            outline={!completed}
                            size='sm'
                            color="success"
                            style={{ float: 'left' }}
                            onClick={() => {
                                toggleItemComplete(id);
                            }}
                        >
                            <i className="fas fa-check-circle"></i>
                        </Button>{' '}
                        <Button
                            id={`deletePopover-${id}`}
                            outline
                            size='sm'
                            color="danger"
                            style={{ float: 'right', marginLeft: '7px' }}
                            onClick={() => {
                                this.setState({ deletePopoverVisible: true })
                            }}
                        >
                            <i className="fas fa-trash"></i>
                        </Button>{' '}
                        <Button
                            outline
                            size='sm'
                            color="secondary"
                            style={{ float: 'right' }}
                            onClick={() => {
                                setItemShowInput(true, 'edit', id);
                                setCurrentItem({ ...this.props.item })
                            }}>
                            <i className="fas fa-pen"></i>
                        </Button>{' '}
                        <Popover
                            placement="top"
                            isOpen={deletePopoverVisible}
                            target={`deletePopover-${id}`}
                            toggle={() => { this.setState({ deletePopoverVisible: !deletePopoverVisible }) }}
                            className='is-inside-popover'
                        >
                            <PopoverHeader className='is-inside-popover'><i className="fas fa-trash text-danger"></i>&nbsp;Delete Item</PopoverHeader>
                            <PopoverBody className='is-inside-popover'>
                                <span className='is-inside-popover'>Are you sure you want to delete this item?</span>
                                <div className='my-1 text-center is-inside-popover'>
                                    <Button
                                        size='sm'
                                        color="danger"
                                        style={{}}
                                        onClick={() => {
                                            removeItemsById([id]);
                                        }}>
                                        Yes
                                    </Button>{' '}
                                    <Button
                                        size='sm'
                                        color="secondary"
                                        style={{}}
                                        onClick={() => {
                                            this.setState({ deletePopoverVisible: false })
                                        }}>
                                        Cancel
                                        </Button>{' '}
                                </div>
                            </PopoverBody>
                        </Popover>
                    </CardHeader>}
                {!isEditMode(itemShowInput, inputMode, id, editItemId) &&
                    <CardBody>
                        <CardTitle tag="h3" className='text-center'>{title}</CardTitle>
                        <CardText style={{ whiteSpace: 'pre-line' }} >{notes}</CardText>
                        <span className='font-italic my-time-ago'>{myTimeAgo(id)}</span>
                    </CardBody>}
                {isEditMode(itemShowInput, inputMode, id, editItemId) &&
                    <CardBody>
                        <TodoItemInputGroup />
                    </CardBody>}
            </Card>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
