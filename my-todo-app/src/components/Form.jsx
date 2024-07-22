// form component. Takes user text input and returns todo
const handleSubmit = (event) => {
    // prevent form from submitting and reloading the entire app
    event?.preventDefault();
    // reset form
    event?.target.reset();
};
function Form() {
    

    // return component
    return (
        <form className="form" onSubmit={
            handleSubmit()
        }>
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