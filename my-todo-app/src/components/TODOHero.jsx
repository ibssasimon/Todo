// dynamic TODO Hero Component. Displays completed tasks and remaining tasks.
// takes as input todosCompleted and totalTodos as props

function TODOHero({ todosCompleted, totalTodos }) {
    return (
      <section className="todohero_section">
        <div>
          <p className="text_large">Task Done</p>
          <p className="text_small">Keep it up</p>
        </div>
        <div>
          {todosCompleted}/{totalTodos}
        </div>
      </section>
    );
  }
  
  export default TODOHero;