import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getToken } from "../../../utils/helper";

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleLogin = (e) => {
        e.preventDefault()

        // email patter
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(email)) {
            setEmailError("Incurrect email patter");
            return;
        }
        // password patter
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
            return;
        }


        const data = {email, password}
        localStorage.setItem("token", "dummy token");
        navigate('/dashboard')
        console.log(data);
    }


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


    return (
      <>
        <section class="d-flex justify-content-md-center align-items-center vh-100">
          {/* <input
            className="form-control"
            type="text"
            {...register("name", {
              required: "Category name is required.",
              minLength: 2,

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email patter is incurrect.",
              },
            })}
          /> */}

          <div className="shadow" style={{ width: "350px" }}>
            <img
              height={60}
              width={60}
              className="mx-auto d-block border border-success rounded-circle mt-3"
              src="https://www.homestratosphere.com/wp-content/uploads/2019/07/White-ash-tree.jpg"
              alt=""
            />
            <form action="" className="px-3 my-4" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="" className="text-muted">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="form-control"
                  name=""
                  id=""
                />
                <span className="text-danger" style={{ fontSize: "10px" }}>
                  {emailError}
                </span>
              </div>

              <div className="form-group mt-2">
                <label htmlFor="" className="text-muted">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="xyz@gmail.com"
                  className="form-control"
                  name=""
                  id=""
                />
                <span className="text-danger" style={{ fontSize: "10px" }}>
                  {passwordError}
                </span>
              </div>

              <div className="text-center mt-3">
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
    
}