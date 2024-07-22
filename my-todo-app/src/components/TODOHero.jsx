// dynamic TODO Hero Component. Displays completed tasks and remaining tasks.
// takes as input todosCompleted and totalTodos as props

function TODOHero ({todosCompleted, totalTodos}) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep pushing!</p>
            </div>
            <div>
                {todosCompleted} / {totalTodos}
            </div>
        </section>
    )
}

export default TODOHero;