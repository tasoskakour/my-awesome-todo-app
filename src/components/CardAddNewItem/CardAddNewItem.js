import React from 'react';
import { Card, CardBody, } from 'reactstrap';
import { TodoItemInputGroup } from '../'
import { connect } from 'react-redux'
import { setItemShowInput, } from '../../redux/modules/todo'
import './styles.css'

const mapStateToProps = state => ({
    itemShowInput: state.todo.itemShowInput,
    inputMode: state.todo.inputMode
})

const mapDispatchToProps = { setItemShowInput }

const CardAddNewItem = props => {
    const { itemShowInput, inputMode, setItemShowInput } = props;
    return (
        <Card
            className='new-item-card-container'
            style={{ cursor: !itemShowInput ? 'pointer' : 'default' }}
            onClick={() => { if (!itemShowInput) { setItemShowInput(true, 'add') } }}>
            <CardBody className='new-item-card-body'>
                {(!itemShowInput || (itemShowInput && inputMode === 'edit')) && <div className='text-center'>
                    <i className='fas fa-clipboard-list text-secondary' style={{ fontSize: '2.5rem' }}></i>
                    <h3 className='mt-3 text-secondary'>Add Item</h3>
                </div>}
                {itemShowInput && inputMode === 'add' && <TodoItemInputGroup />}
            </CardBody>
        </Card>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAddNewItem);
