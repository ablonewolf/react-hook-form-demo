import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {formType} from "../types/formType";

export const UserForm = () => {
    const form = useForm<formType>();
    const {register, control, handleSubmit} = form;

    const onSubmit = (data: formType) => {
        console.log("Form submitted: ", data);
    }
    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course" {...register("course")}/>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}