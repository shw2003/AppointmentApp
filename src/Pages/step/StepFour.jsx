import { Button, Col, Row, Select } from "antd";
import React, { useContext, useState } from "react";
import MultiStepFormContext from "../MultiStepFormContext";
const { Option } = Select;

const StepFour = () => {
  const citiesData = [
    {
      value: "Mumbai",
      label: "Mumbai",
      doctors: [
        { id: 1, name: "Dr. A", specialization: "Cardiologist" },
        { id: 2, name: "Dr. B", specialization: "Orthopedic Surgeon" },
      ],
    },
    {
      value: "Delhi",
      label: "Delhi",
      doctors: [
        { id: 3, name: "Dr. C", specialization: "Pediatrician" },
        { id: 4, name: "Dr. D", specialization: "Dermatologist" },
      ],
    },
    {
      value: "Bangalore",
      label: "Bangalore",
      doctors: [
        { id: 5, name: "Dr. E", specialization: "Neurologist" },
        { id: 6, name: "Dr. F", specialization: "Gynecologist" },
      ],
    },
  ];

  const { details, address, detail, next, prev } =
    useContext(MultiStepFormContext);
  const selectedCity = citiesData.find((city) => city.value === address.city);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Handle doctor selection
  const handleDoctorSelect = (value) => {
    const selectedDoctor = selectedCity.doctors.find(
      (doctor) => doctor.id === value
    );
    setSelectedDoctor(selectedDoctor);
  };
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Name: {details.name}</p>
          <p>Age: {address.age}</p>
        </Col>

        {/* Display doctors for the selected city */}
        {selectedCity && (
          <div>
            <h2 style={{ fontWeight: "700" }}>
              Doctors in {selectedCity.label}
            </h2>

            {/* Selectable list of doctors */}
            <Select
              placeholder="Select a doctor"
              style={{ width: 200 }}
              onChange={handleDoctorSelect}
            >
              {selectedCity.doctors.map((doctor) => (
                <Option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialization}
                </Option>
              ))}
            </Select>

            {/* Display details for the selected doctor */}
            {selectedDoctor && (
              <div>
                <p>Selected Doctor:</p>
                <p>Name: {selectedDoctor.name}</p>
                <p>Specialization: {selectedDoctor.specialization}</p>
                {/* Add more details as needed */}
              </div>
            )}
          </div>
        )}
      </Row>
      <div
        className={"form__item button__items d-flex justify-content-between"}
      >
        <Button type={"default"} onClick={prev}>
          Back
        </Button>
        <Button
          type={"primary"}
          onClick={next}
          style={{ backgroundColor: "black" }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
export default StepFour;
