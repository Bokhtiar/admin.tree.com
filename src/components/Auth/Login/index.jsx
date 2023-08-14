export const Login = () => {
    return <>
        <section class="d-flex justify-content-md-center align-items-center vh-100">
            <div className="shadow" style={{ width: "350px" }}>
                <img height={60} width={60} className="mx-auto d-block border border-success rounded-circle mt-3" src="https://www.homestratosphere.com/wp-content/uploads/2019/07/White-ash-tree.jpg" alt="" />
                <form action="" className="px-3 my-4">
                    <div className="form-group">
                        <label htmlFor="" className="text-muted">Email</label>
                        <input type="email" placeholder="xyz@gmail.com" className="form-control" name="" id="" />
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="" className="text-muted">Password</label>
                        <input type="password" placeholder="xyz@gmail.com" className="form-control" name="" id="" />
                    </div>

                    <div className="text-center mt-3">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    
}