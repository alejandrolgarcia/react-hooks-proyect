import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'wichogt',
    email: 'wicho@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  // Dependencias vacias, solo se dispara una vez cuando se monta el componente.
  useEffect( () => {
    // console.log('useEffect disparado')
  }, []);

  useEffect( () => {
    // console.log('formState cambio')
  }, [formState]);

  useEffect( () => {
    // console.log('email cambio')
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="@"
        name="email"
        value={ email }
        onChange={ onInputChange }
      /> 

      {
        (username === 'wichogt') && <Message />
      }
    </>
  )
}
