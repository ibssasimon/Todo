// dynamic TODO Hero Component. Displays completed tasks and remaining tasks.
// takes as input todosCompleted and totalTodos as props

function TODOHero ({totalTodos, todosCompleted}) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep pushing!</p>
            </div>
            <div>
                {totalTodos} / {todosCompleted}
            </div>
        </section>
    )
}

export default TODOHero;