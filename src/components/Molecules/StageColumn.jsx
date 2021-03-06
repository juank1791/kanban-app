import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import StageCard from '../Molecules/StageCard';

const StageColumn = ({ name, items, data, droppableId, index }) => {
    return (
        <Droppable droppableId={droppableId} key={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        className={`column_content ${snapshot.isDraggingOver &&
                            'column-is-dragging'}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className='column_title'>
                            <span
                                className='column_title_task_number'
                                data-color={`${data}`}
                            >
                                {items.length}
                            </span>
                            <p className='column_title_name'>{name}</p>
                        </div>
                        <div className='column-body'>
                            {items.map((item, index) => (
                                <StageCard
                                    key={index}
                                    {...item}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                );
            }}
        </Droppable>
    );
};

export default React.memo(StageColumn);
