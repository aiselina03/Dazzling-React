import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./style.scss";
import * as Yup from "yup";

function AddPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleAdd(val) {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  function deleteById(id) {
    fetch("http://localhost:4000/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="addpage">
        <Formik
          initialValues={{
            name: "",
            image: "",
            price: "",
            desc: "",
            date: "",
            category: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("name"),
            image: Yup.string().required("image"),
            price: Yup.number().required("price"),
            desc: Yup.string().required("desc"),
            date: Yup.string().required("date"),
            category: Yup.string().required("category"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              handleAdd(values);
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="name"></label>
            <Field
              name="name"
              type="text"
              placeholder="name"
              className="field"
            />
            <ErrorMessage name="name" />

            <label htmlFor="image"></label>
            <Field
              name="image"
              type="text"
              placeholder="image"
              className="field"
            />
            <ErrorMessage name="image" />

            <label htmlFor="price"></label>
            <Field
              name="price"
              type="text"
              placeholder="price"
              className="field"
            />
            <ErrorMessage name="price" />

            <label htmlFor="desc"></label>
            <Field
              name="desc"
              type="text"
              placeholder="desc"
              className="field"
            />
            <ErrorMessage name="desc" />

            <label htmlFor="date"></label>
            <Field
              name="date"
              type="text"
              placeholder="date"
              className="field"
            />
            <ErrorMessage name="date" />

            <label htmlFor="category"></label>
            <Field
              name="category"
              type="text"
              placeholder="category"
              className="field"
            />
            <ErrorMessage name="category" />

            <button type="submit">Add</button>
          </Form>
        </Formik>

        <div className="adminpanel">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x._id}>
                  <td>
                    <img src={x.image} alt="" width={200} />
                  </td>
                  <td>{x.name}</td>
                  <td>${x.price}</td>
                  <td width={400}>{x.desc}</td>
                  <td> {x.date}</td>
                  <td>{x.category}</td>
                  <td>
                    <button onClick={() => deleteById(x._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddPage;
