import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "../MultiStepFormContext";
import StepTwo from "../step/StepTwo";
import StepOne from "../step/StepOne";
import StepThree from "../step/StepThree";
import StepFour from "../step/StepFour";
import Final from "../step/Final";
const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: "",
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: "",
};
const detailInitialState = {
  complaints: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
      return <StepFour />;
    case 4:
      return <Final />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [detail, setDetail] = useState(detailInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 4) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      setDetail(detailInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        details,
        setDetails,
        detail,
        setDetail,
        next,
        prev,
        address,
        setAddress,
      }}
    >
      <Steps current={currentStep}>
        <Step title={"Fill in your details"} />
        <Step title={"Address details"} />
        <Step title={"Camplaint details"} />
        <Step title={"Review and Save"} />
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;
