import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target }) => {
       const { name, value } = target;
       
       setformState({
            ...formState,
            [ name ]: value  //Relacionar etiqueta name con el valor del input
            
       });

    }

    const onHandleSubmit= (event) => {
        event.preventDefault();

        console.log(formState);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onHandleSubmit
    }
}
