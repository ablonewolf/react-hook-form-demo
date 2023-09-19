import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

export const UserForm = () => {
    const form = useForm();
    const {register} = form;
    return (
        <div>
            <form className="form-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course" {...register("course")}/>

                <button>Submit</button>
            </form>
        </div>
    )
}