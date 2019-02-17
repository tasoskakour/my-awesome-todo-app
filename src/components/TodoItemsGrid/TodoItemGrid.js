import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Alert } from 'reactstrap'
import { TodoItem, CardAddNewItem } from '../'

const mapStateToProps = (state, ownProps) => ({
    items: state.todo.items.filter(item => item.completed === ownProps.completed)
})

/**
 * 
 * @param {object} props
 * @param {boolean} props.completed 
 */
const TodoItemsGrid = (props) => {
    const { items, completed } = props;
    return (
        <div className='mt-3 mt-md-5'>
            <Container>
                <Row className='row-eq-height'>
                    {
                        items.map(item =>
                            <Col key={item.id} sm={6} md={4} className='mb-5'>
                                <TodoItem item={item} />
                            </Col>
                        )
                    }
                    {!completed && <Col sm={6} md={4} className='mb-5'>
                        <CardAddNewItem />
                    </Col>}
                </Row>
                {completed && (!items || items.length === 0) &&
                    <Alert color="light" className='text-center'>
                        <i className="fas fa-exclamation-circle"></i>  You do not have completed items.
                  </Alert>
                }
            </Container>
        </div >
    )
}

export default connect(mapStateToProps)(TodoItemsGrid);
