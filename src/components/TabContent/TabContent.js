import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    activeTab: state.todo.activeTab
})

/**
 * 
 * @param {object} props 
 * @param {object} props.Contents
 */
const MyTabContent = props => {
    const { Contents, activeTab } = props;
    return (
        <TabContent className='pb-5' activeTab={activeTab}>
            {Contents.map((Content, i) =>
                <TabPane key={i} tabId={i}>
                    {Content}
                </TabPane>
            )}
        </TabContent>
    )
}

export default connect(mapStateToProps)(MyTabContent);
