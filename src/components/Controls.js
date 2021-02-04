import React from 'react';

const Controls = (props) => (
    <>
        <button onClick={props.saveHandler} className="btn">Save</button>
        <button onClick={props.loadHandler} className="btn">Load</button>
        <button onClick={props.clearAll} className="btn">Clear all</button>
        <button onClick={props.clearCompleted} className="btn">Clear Completed</button>
    </>
);

export default Controls;
