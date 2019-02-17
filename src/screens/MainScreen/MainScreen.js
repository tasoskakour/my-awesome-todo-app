import React from 'react';
import { Tabs, TabContent, TodoItemsGrid, Footer } from '../../components'

const MainScreen = () => {
    return (
        <div>
            <Tabs />
            <TabContent
                Contents={[
                    <TodoItemsGrid completed={false} />,
                    <TodoItemsGrid completed />]} />
            <Footer />
        </div>
    )
}

export default MainScreen;
