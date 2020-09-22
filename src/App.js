import React from 'react';
import FetchCard from './FetchCard';
import Lifecycle from './Lifecycle';
import ResizeApp from './ResizeApp';

function App() {
    return (
        <div>
            <Lifecycle />
            <FetchCard />
            <ResizeApp />
        </div>
    );
}

export default App;
