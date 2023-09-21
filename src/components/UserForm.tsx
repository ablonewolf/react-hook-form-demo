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

    function isValidCourse(course: string): boolean {
        const coursePattern = /^[a-zA-Z\s]*$/;
        return coursePattern.test(course);

    }

    function isValidLinkedinProfile(url: string): boolean {
        const urlPattern = /^(https:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_.]+$/;
        return urlPattern.test(url);
    }

    function isValidGithubProfile(url: string): boolean {
        const urlPattern = /^(https:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+$/;
        return urlPattern.test(url);
    }

    function isValidPhoneNumber(phoneNumber: string): boolean {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    const form = useForm<formType>({
        defaultValues: {
            username: "user",
            email: "user@email.com",
            course: "course",
            social: {
                github: "github profile link",
                linkedin: "LinkedIn profile link"
            },
            phoneNumber: []

        }
    });
    const {
        register,
        control,
        handleSubmit,
        formState
    } = form;
    const {errors} = formState;

    const onSubmit = (data: formType) => {
        console.log("Form submitted: ", data);
    }
    return (
        <div>
            <form className="form-container" noValidate={true} onSubmit={handleSubmit(onSubmit)}>
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
                                // pattern: {
                                //     value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                //     message: "Invalid email format"
                                // },
                                validate: (fieldValue) => {
                                    if (!isValidEmail(fieldValue)) {
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
                                required: "Course name is required.",
                                validate: (fieldValue) => {
                                    if (!isValidCourse(fieldValue)) {
                                        return "Enter a valid course name";
                                    }
                                }
                            }
                        )}
                    />
                    <p className="error">{errors.course?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="github">Github</label>
                    <input
                        type="text"
                        id="github"
                        {...register("social.github", {
                            validate: (fieldValue) => {
                                if (!isValidGithubProfile(fieldValue)) {
                                    return "Enter a valid github url";
                                }
                            }
                        })}
                    />
                    <p className="error">{errors.social?.github?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input
                        type="text"
                        id="github"
                        {...register("social.linkedin", {
                            validate: (fieldValue) => {
                                if (!isValidLinkedinProfile(fieldValue)) {
                                    return "Enter a valid LinkedIn URL";
                                }
                            }
                        })}
                    />
                    <p className="error">{errors.social?.linkedin?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="primaryPhone">Primary Phone Number</label>
                    <input
                        type="text"
                        id="primaryPhone"
                        {...register("phoneNumber.0", {
                            required: "Primary Phone Number is required",
                            validate: (fieldValue) => {
                                if (!isValidPhoneNumber(fieldValue)) {
                                    return "Enter a valid phone number";
                                }
                            }
                        })}
                    />
                    <p className="error">{errors.phoneNumber?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="secondaryPhone">Secondary Phone Number</label>
                    <input
                        type="text"
                        id="secondaryPhone"
                        {...register("phoneNumber.1", {
                            validate: (fieldValue) => {
                                if (!isValidPhoneNumber(fieldValue)) {
                                    return "Enter a valid phone number";
                                }
                            }
                        })}
                    />
                    <p className="error">{errors.phoneNumber?.message}</p>
                </div>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}