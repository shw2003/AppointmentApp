import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, InputNumber } from "antd";
import { Input, Field, Option } from "formik-antd";
import MultiStepFormContext from "../MultiStepFormContext";
const StepTwo = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.age) errors.age = "age is required";
        if (!values.age) errors.age = "Age is required";
        if (!values.campany) errors.campany = "Campany is required";
        // if (values.age > 90) errors.age = "Are you sure you're human?";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.age && "input__error"}`}>
              <label>age *</label>
              <Input name={"age"} />
              <p className={"error__feedback"} style={{ color: "red" }}>
                {errors.age}
              </p>
            </div>

            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>City *</label>

              <Field as="select" name={"city"}>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </Field>
            </div>
            <div className={`form__item ${errors.campany && "input__error"}`}>
              <label>Campany *</label>
              <Input name={"campany"} />
              <p className={"error__feedback"} style={{ color: "red" }}>
                {errors.campany}
              </p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button
                type={"primary"}
                onClick={handleSubmit}
                style={{ backgroundColor: "black" }}
              >
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default StepTwo;
