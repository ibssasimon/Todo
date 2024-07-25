const crypto = require('crypto');

// form component. Takes user text input and returns todo

function Form({ setTodos }) {
    
    const handleSubmit = (event) => {
        // prevent form from submitting and reloading the entire app
        event.preventDefault();
        const value = event.target.todo.value;
        
        //update state
        setTodos((prevTodos) => [
            ...prevTodos,
            { title: value, id: crypto.randomBytes(10), is_completed: false },
          ]);
        //reset form
        event.target.reset();
    };

    // return component
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your task to complete here"
                />
            </label>

            <button>
                <span className="submit_button">+</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}

export default Form;