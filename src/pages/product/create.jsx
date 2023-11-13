import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { NetworkServices } from '../../network/index'
import { PrimaryButton } from "../../components/button";
import { BreadCrumbs } from "../../components/breadCrumbs";
import { networkErrorHandeller } from "../../utils/helper";
import { SingleSelect, TextInput } from "../../components/input";
import axios from "axios";

export const ProductCreate = () => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [sizeValues, setSizeValues] = useState([{ size: "", price: "" }])

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        setLoading(true)
        const formData = new FormData();

        formData.append("image", file);
        formData.append("title", data?.title);
        // formData.append("size", JSON.stringify(sizeValues));
        // formData.append("price", data?.price);
        // formData.append("ratting", data?.ratting);
        // formData.append("category_id", data?.category_id?.value);
        // formData.append("body", data?.body);
        // formData.append("plant_body", data?.plant_body);

        try {
            // const response = await NetworkServices.Product.store(formData)
            // console.log("response prodct", response);
            axios.post("https://re", {
                title: data.title,
                image: file
            })
                .then((response) => {
                    console.log(response);
                });
        } catch (error) {
            setLoading(false)
            networkErrorHandeller(error)
        }
    };

    // let handleChange = (i, e) => {
    //     console.log(i, [e.target.name]);
    //     let newSizeValues = [...sizeValues];
    //     newSizeValues[i][e.target.name] = e.target.value;
    //     setSizeValues(newSizeValues);
    // }

    let addFormFields = () => {
        setSizeValues([...sizeValues, { size: "", price: "" }])
    }

    let removeFormFields = (i) => {
        let newSizeValues = [...sizeValues];
        newSizeValues.splice(i, 1);
        setSizeValues(newSizeValues)
    }
    /** fetchCategory */
    const fetchCategory = async () => {
        try {
            const results = [];
            const response = await NetworkServices.Category.index()
            console.log("cate res",response);
            if (response.status === 200) {
                const arrLenght = response.data.data.length;
                if (arrLenght > 0) {
                    for (let i = 0; i < arrLenght; i++) {
                        results.push({
                            value: response.data.data[i].category_id,
                            label: response.data.data[i].category_name,
                        });
                    }
                }
            }
            setOptions(results)
            return results;
        } catch (error) {
            if (error) {
                networkErrorHandeller(error);
                return [];
            }
        }
    };

    useEffect(()=> {
       fetchCategory() 
    }, [])

    return <>
        <BreadCrumbs title="Product Create" link="/dashboard/product" icon="list" />

        <section className="shadow-md my-5 p-4 px-6">
            <form enctype="multipart/form-data" className="px-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* product title */}
                    <TextInput
                        label="Product Title"
                        name="title"
                        type="text"
                        placeholder="Enter product title"
                        control={control}
                        error={errors.title && errors.title.message}
                        rules={{ required: "Product title is required" }}
                    />
                    {/* file */}
                    <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
                  

                    {/* size
                    <div className=" col-span-2">
                        {sizeValues.map((element, index) => (
                            <div className="flex items-center gap-4" key={index}>
                                <div>
                                    <label className="text-gray-500 text-sm">Size</label>
                                    <input placeholder="Size" className="w-full p-3 border border-gray-100" type="text" name="size"  onChange={(e) => handleChange(index, e)} />
                                </div>
                                <div>
                                    <label className="text-gray-500 text-sm">Price</label>
                                    <input placeholder="Price" className="w-full p-3 border border-gray-100" type="text" name="price" onChange={(e) => handleChange(index, e)} />
                                </div>
                                {
                                    index ?
                                        <>
                                            <button type="button" className="button remove bg-red-500 rounded h-6 text-white mt-5" onClick={() => removeFormFields(index)}>
                                                <span class="material-symbols-outlined">
                                                    remove
                                                </span>
                                            </button>
                                        </>
                                        : <button className="button add bg-green-500 rounded h-6 text-white mt-5" type="button" onClick={() => addFormFields()}>
                                            <span className="material-symbols-outlined">
                                                add
                                            </span>
                                        </button>
                                }
                            </div>
                        ))}
                    </div>
                    {/* product price */}
                    {/* <TextInput
                        label="Product Price"
                        name="price"
                        type="text"
                        placeholder="Enter product price"
                        control={control}
                        error={errors.price && errors.price.message}
                        rules={{ required: "Product price is required" }}
                    /> */}

                    {/* product title */}
                    {/* <TextInput
                        label="Product Ratting"
                        name="ratting"
                        type="text"
                        placeholder="Enter product ratting"
                        control={control}
                        error={errors.ratting && errors.ratting.message}
                        rules={{ required: "Product ratting is required" }}
                    /> */}
                    {/* ctegory */}
                    {/* <SingleSelect
                        label="Select Category"
                        name="category_id"
                        control={control}
                        error={errors.category_id && errors.category_id.message}
                        options={options}
                        isClearable={true}
                        placeholder="Select category"
                    /> */}

                    {/* product title */}
                    {/* <TextInput
                        label="Product body"
                        name="body"
                        type="text"
                        placeholder="Enter product body"
                        control={control}
                        error={errors.body && errors.body.message}
                        rules={{ required: "Product body is required" }}
                    /> */}

                    {/* product title */}
                    {/* <TextInput
                        label="Product plant body"
                        name="plant_body"
                        type="text"
                        placeholder="Enter product plant body"
                        control={control}
                        error={errors.plant_body && errors.plant_body.message}
                        rules={{ required: "Product plant body is required" }}
                    />  */}

                    {/* submit button */}
                    <div className="my-4 flex justify-center col-span-2">
                        <PrimaryButton loading={loading} name="Product Submit"></PrimaryButton>
                    </div>
                </div>
            </form>
        </section>
    </>
}