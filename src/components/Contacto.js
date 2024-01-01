import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data)
    }

    return (
        <div className="contenedorForm">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit(enviar)}>
                <input type="email" placeholder="Ingresa tu correo" {...register("Email")}/>
                <input type="text" placeholder="Ingresa el asunto" {...register("Motivo")}/>
                <input className="consulta" type="text" placeholder="Ingresa la consulta" {...register("Consulta")}/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
    }
    
    export default Contacto