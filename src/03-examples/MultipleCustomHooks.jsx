import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { Loading } from "./Loading";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {

  const {counter, increment, decrement} = useCounter(1);
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>Información del Pokemón</h1>
      <hr />

      {
        (isLoading)
          ? <Loading />
          : (
            <PokemonCard
              id={ data.id }
              name={ data.name }
              sprites={[
                data.sprites.front_default,
                data.sprites.back_shiny,
                data.sprites.front_shiny,
                data.sprites.back_default,
              ]}
            />
          )
      }

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a 
              className="page-link" 
              href="#" onClick={ () => counter > 1 ? decrement() : null }
            >Anterior</a>
          </li>
          
          <li className="page-item"><a className="page-link" href="#" onClick={ () => increment() }>Siguiente</a></li>
        </ul>
      </nav>
    </>
  )
}

