import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { getToken } from "../../../utils/helper";
import { useCallback, useEffect, useState } from "react"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const handleLogin = (e) => {
    //     e.preventDefault()

    //     // email patter
    //     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //     if (!emailPattern.test(email)) {
    //         setEmailError("Incurrect email patter");
    //         return;
    //     }
    //     // password patter
    //     const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    //     if (!passwordPattern.test(password)) {
    //         setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
    //         return;
    //     }

    //     const data = { email, password }
    //     localStorage.setItem("token", "dummy token");
    //     navigate('/dashboard')
    //     console.log(data);
    // }

    const onSubmit = (data) => console.log(data);

    /* Check stored token */
    const isTokenStored = useCallback(async () => {
        const storedToken = await getToken();
        if (storedToken) {
            navigate("/dashboard");
        } else {
            navigate('/')
        }
    }, [navigate]);

    useEffect(() => {
        isTokenStored();
    }, [isTokenStored]);

    return <>
        <section class="flex items-center justify-center h-screen">
            <div className="shadow" style={{ width: "350px" }}>
                <img height={60} width={60} className="mx-auto d-block border border-success rounded-full mt-3" src="https://www.homestratosphere.com/wp-content/uploads/2019/07/White-ash-tree.jpg" alt="" />
                <form action="" className="px-3 my-4" onSubmit={onSubmit}>

                    {/* <div className="form-group">
                        <label htmlFor="" className="text-gray-600">Email Address <span className=" text-red-600">*</span> </label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="xyz@gmail.com" className="rounded-lg w-full border p-2 focus:outline-none" name="" id="" />
                        <span className="text-danger" style={{ fontSize: "10px" }}>{emailError}</span>
                    </div> */}

                    <input
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                    <div className="form-group mt-2">
                        <label htmlFor="" className="text-gray-600">Password <span className=" text-red-600">*</span></label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="xyz@gmail.com" className="rounded-lg w-full border p-2 focus:outline-none" name="" id="" />
                        <span className="text-danger" style={{ fontSize: "10px" }}>{passwordError}</span>
                    </div>

                    <div className="text-center mt-3">
                        <button className="border bg-green-600 text-white px-3 py-1 rounded uppercase">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </>

}