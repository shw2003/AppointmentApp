import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "../MultiStepFormContext";
const StepThree = () => {
  const { detail, setDetail, next, prev, address } =
    useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={detail}
      onSubmit={(values) => {
        setDetail(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.complaints) errors.complaints = "Complaints is required";

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div
              className={`form__item ${errors.complaints && "input__error"}`}
            >
              <label>Complaints *</label>
              <Input name={"complaints"} />
              <p className={"error__feedback"} style={{ color: "red" }}>
                {errors.complaints}
              </p>
            </div>

            {address.age > 40 ? (
              <>
                <div
                  className={`form__item ${
                    errors.complaints && "input__error"
                  }`}
                >
                  <p>previous experience with physiotherapy *</p> {" "}
                  <Input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Yes</label> {" "}
                  <Input
                    type="radio"
                    id="yes"
                    name="fav_language"
                    value="yes"
                  />
                    <label for="no">No</label> {" "}
                  <p className={"error__feedback"} style={{ color: "red" }}>
                    {errors.complaints}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}

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
export default StepThree;
