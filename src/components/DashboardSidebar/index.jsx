import { Link } from "react-router-dom";
export const DashboardSidebar = () => {
    return <>
        <div className=" col-span-1 h-screen  bg-primary rounded-md hidden lg:flex">
            <div className="px-4">
                <div className="flex  items-center my-2 mt-5">
                    <Link to="/dashboard" className="w-48 bg-white px-2 text-black font-content text-left flex items-center rounded-md py-1">
                        <img className="h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHozIxtgJx0gbDdzgKy7hcRkDoP7houIjY65EDeY&s" alt="" />
                        <div className=" px-2">
                            <h4 className=" font-semibold">Bokhtiar toshar</h4>
                        </div>
                    </Link>
                </div>

                <div className="flex  items-center my-2 mt-5">
                    <Link to="/dashboard" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            dashboard
                        </span>
                        <span className=" font-semibold">Dashboard</span>
                    </Link>
                </div>

                <div className="flex  items-center my-2">
                    <Link to="/dashboard/cart" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            shopping_cart
                        </span>
                        <span className=" font-semibold">Cart</span>
                    </Link>
                </div>

                <div className="flex  items-center my-2">
                    <Link to="/dashboard/wishlist" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            favorite
                        </span>
                        <span className=" font-semibold">Wishlish</span>
                    </Link>
                </div>

                <div className="flex  items-center my-2">
                    <Link to="/dashboard/order" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            list_alt
                        </span>
                        <span className=" font-semibold">Order</span>
                    </Link>
                </div>

                <div className="flex  items-center my-2">
                    <Link to="" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            lock_open
                        </span>
                        <span className=" font-semibold">Chnage Password</span>
                    </Link>
                </div>

                <div className="flex  items-center my-2">
                    <Link to="" className="w-48 bg-white px-2 text-black font-content text-left flex gap-1 items-center rounded-md py-1">
                        <span class="material-symbols-outlined text-gray-600">
                            logout
                        </span>
                        <span className=" font-semibold">Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
}