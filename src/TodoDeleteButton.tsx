import React from 'react';

export const TodoDeleteButton: React.FC<{ deleteTodo: () => void; }> = ({ deleteTodo }) => {
    return <button onClick={deleteTodo}>削除</button>;
};
