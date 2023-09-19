export const UserForm = ()=> {
    return (
        <div>
            <form className="form-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course" name="course"/>

                <button>Submit</button>
            </form>
        </div>
    )
}