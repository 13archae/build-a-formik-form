import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      let emailRegex = new RegExp("[^@]+@[^@]+.[^@]+");

      if (!values.email) {
        errors.email = "Field Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            id="emailField"
            placeholder="Username"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="pswField"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <div>
          <button type="submit" id="submitBtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
