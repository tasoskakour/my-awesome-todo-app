import React from 'react';
import { Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { setActiveTab } from '../../redux/modules/todo'
import './styles.css';

const mapStateToProps = state => ({
    activeTab: state.todo.activeTab,
    itemsCountNew: state.todo.itemsCountNew, // I could do state.todo.items.length, but then the Tabs Component would re-render unnecessarily on item edit
    itemsCountCompleted: state.todo.itemsCountCompleted
})

const mapDispatchToProps = { setActiveTab }

const Tabs = props => {
    const { activeTab, setActiveTab, itemsCountNew, itemsCountCompleted } = props;
    return (
        <Nav tabs className='mt-2 mt-md-5'>
            <NavItem>
                <NavLink
                    active={activeTab === 0}
                    onClick={() => { setActiveTab(0); }}
                >
                    New {itemsCountNew > 0 && <Badge color="secondary" style={{ verticalAlign: 'text-bottom' }}>{itemsCountNew}</Badge>}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    active={activeTab === 1}
                    onClick={() => { setActiveTab(1); }}
                >
                    Completed {itemsCountCompleted > 0 && <Badge color="success" style={{ verticalAlign: 'text-bottom' }}>{itemsCountCompleted}</Badge>}
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
