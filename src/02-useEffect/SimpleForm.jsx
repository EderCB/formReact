import { useEffect, useState } from "react"
import { Message } from "./Message";


export const FormWithCustomHook = () => {

    const [formState, setformState] = useState({
        username: 'strider2',
        email: 'example@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
       const { name, value } = target;
       setformState({
            ...formState,
            [ name ]: value
       })
    }

    useEffect( () => {
        // console.log('UseEffect called!')
    }, []);

    useEffect( () => {
        // console.log('formState changed!')
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!')
    }, [ email ]);


    

  return (
    <>
    
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
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

        {
            (username === 'strider2' ) && <Message />
        }
    </>
  )
}
