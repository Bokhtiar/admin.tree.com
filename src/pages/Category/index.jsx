import { Link } from "react-router-dom";
import { TitleBar } from "../../components/titlebar";
import { categoryData } from "../../data/category";
import { useCallback, useEffect, useState } from "react";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  /* fetch data */
  const fetchData = useCallback(async () => {
    try {
      const data = await categoryData;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  /* category delete */
  const categoryDelete = (id) => {
    console.log(id);
  }

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <TitleBar
        current_page="Category"
        another_link="/category/create"
        icon="add"
      ></TitleBar>

      <section className="shadow my-4 rounded p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Parent_id</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.parent_id}</td>
                  <td className="d-flex ">
                    <Link
                      to=""
                      className="rounded  p-1 bg-success text-white px-2"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </Link>

                    <Link
                      to=""
                      className="rounded p-1 bg-danger text-white px-2"
                      onClick={() =>categoryDelete(category.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
