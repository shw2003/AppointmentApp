import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "../MultiStepFormContext";
const StepOne = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.phone) errors.phone = "Phone number is required";
        // if (!values.age) errors.age = "Age is required";
        // if (values.age > 90) errors.age = "Are you sure you're human?";

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.name && "input__error"}`}>
              <label>Name *</label>
              <Input name={"name"} />
              <p className={"error__feedback"} style={{ color: "red" }}>
                {errors.name}
              </p>
            </div>
            <div className={`form__item ${errors.phone && "input__error"}`}>
              <label>Phone *</label>
              <Input name={"phone"} type="tel" />
              <p className={"error__feedback"} style={{ color: "red" }}>
                {errors.phone}
              </p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
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
export default StepOne;
