import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {formType} from "../types/formType";

export const UserForm = () => {

    function isValidEmail(email: string): boolean {
        // Regular expression pattern for validating email addresses
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Test the email against the pattern
        return emailPattern.test(email);
    }

    const form = useForm<formType>({
        defaultValues: {
            username: "user",
            email: "user@email.com",
            course: "course"
        }
    });
    const {register, control, handleSubmit, formState} = form;
    const {errors} = formState;

    const onSubmit = (data: formType) => {
        console.log("Form submitted: ", data);
    }
    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: "User name is required."
                        })}
                    />
                    <p className="error">{errors.username?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                                required: "Email address is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid emaill format"
                                },
                                validate: (fieldValue) => {
                                    console.log(fieldValue)
                                    if (! isValidEmail(fieldValue)) {
                                        return "Enter a valid email address";
                                    }
                                }
                            }
                        )}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="course">Course</label>
                    <input
                        type="text"
                        id="course"
                        {...register("course", {
                                required: "Course name is requried."
                            }
                        )}
                    />
                    <p className="error">{errors.course?.message}</p>
                </div>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}