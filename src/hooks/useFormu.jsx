import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFormu = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    
    if (Object.keys(errors).length === 0){

        const consulta = {
          Consulta: form,
        };
    
          const consultasRef = collection(db, "consultas");
          addDoc(consultasRef, consulta);

    }else {
      return ;
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useFormu;