export const UserForm = ()=> {
    return (
        <div>
            <form >
                <label htmlFor="email"></label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="course"></label>
                <input type="text" id="course" name="course"/>

                <button>Submit</button>
            </form>
        </div>
    )
}