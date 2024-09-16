import React from "react";
import { useParams } from "react-router-dom";

const EditPatient = () => {
  const { id } = useParams();

  return <div>EditPatient : {id}</div>;
};

export default EditPatient;
