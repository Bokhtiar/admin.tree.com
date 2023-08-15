import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { TitleBar } from "../../components/titlebar";
import { PrimaryButton } from "../../components/button";

export const CategoryCreate = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) =>{
    console.log(values);
    navigate('/category')
  } 
  
  return (
    <>
      <TitleBar
        current_page="Category Create"
        another_link="/category"
        icon="list"
      ></TitleBar>

      {/* category form */}
      <section className="rounded shadow my-4">
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* category name */}
            <div className="form-group">
              <label>Category name</label>
              <input
                className="form-control"
                type="text"
                {...register("name", {
                  required: "Category name is required.",
                  minLength: 2,
                  pattern: {
                    message: "Email patter is incurrect.",
                  },
                })}
              />
              <span className="text-danger">
                {errors.name && errors.name.message}
              </span>
            </div>

            {/* perent id */}
            <div className="form-group mt-2">
              <label htmlFor="">Select parent category</label>
              <select
                className="form-control"
                id="selectmethod"
                defaultValue=""
                name="parent_id"
                {...register("parent_id", { required: false })}
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="1">Blue</option>
                <option value="2">Red</option>
              </select>
            </div>

            <div className="form-group text-center my-3">
              <PrimaryButton name="Category Submit"></PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
