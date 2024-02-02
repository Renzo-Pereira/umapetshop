import { useForm } from "react-hook-form";
import useFormu from "../hooks/useFormu";


const initialForm = {
  nombre: "",
  email: "",
  asunto: "",
  consulta: "",
};

const validationsFrom = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' solo acepta letras";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.asunto.trim()) {
    errors.asunto = "El campo 'Asunto' es requerido";
  }

  if (!form.consulta.trim()) {
    errors.consulta = "El campo 'Consulta' es requerido";
  } else if (!regexComments.test(form.consulta.trim())) {
    errors.consulta = "La consulta no debe exceder los 255 caracteres";
  }

  return errors;
};

const Contacto = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } =
    useFormu(initialForm, validationsFrom);

  const { register } = useForm();

  

  return (
    <div className="contenedorForm">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          {...register("nombre")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nombre}
          required
        />
        {errors.nombre && <p className="errors">{errors.nombre}</p>}
        <input
          type="email"
          placeholder="Ingresa tu correo"
          {...register("email")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="errors">{errors.email}</p>}
        <input
          type="text"
          placeholder="Ingresa el asunto"
          {...register("asunto")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.asunto}
          required
        />
        {errors.asunto && <p className="errors">{errors.asunto}</p>}
        <textarea
          className="consulta"
          cols="50"
          rows="5"
          placeholder="Ingresa la consulta"
          {...register("consulta")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.consulta}
          required
        />
        {errors.consulta && <p className="errors">{errors.consulta}</p>}
        <button className="botonForm" value="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
