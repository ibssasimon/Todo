// ordered list component

function TODOList({todos}) {
    return (
        <ol className="todo_list">
            {
            // if todos exist, and the length of todos prop is greater than 0,
            // render Item component for each todo element in todos prop
            // else render paragraph 
            todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key={index} item={item}/>)
            ) : (
                <p>Seems lonely in here, what are you up to?</p>
            )}
        </ol>
    );
}

export default TODOList;