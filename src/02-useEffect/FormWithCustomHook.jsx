import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { onInputChange, username, email, password , onHandleSubmit } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password} = formState;


  return (
    <>
    
        <h1>Formulario con CustomHooks</h1>
        <hr />

        <form onSubmit= { onHandleSubmit }>
            <input 
                type="text"
                className="form-control"
                placeholder="Usuario"
                name="username"
                value= { username }
                onChange = { onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="example@example.com"
                name="email"
                value = { email }
                onChange = { onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value = { password }
                onChange = { onInputChange }
            />

            <button className="btn btn-primary mt-2" type="submit">Enviar</button>
        </form>


    </>
  )
}
