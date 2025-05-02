import { supabase } from "../services/supabaseClient.js";
import { useEffect, useState } from "react";



export function useProductsTypes(){
  const [products_types, setProductsTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect para hacer el fetch cuando carga el componente
  useEffect(() => {
    const fetchProductsTypes = async () => {
      try {
        //fetch usando supabase directamente, no es el fetch tradicional
        const {data, error} = await supabase.from('products_types').select('*');
        console.log(data);
        if (error != null && error != undefined) {
          throw error; //throw interrumpe el flujo del codigo para manejar el error en el caso de que haya, asique corta el programa y sigue la instruccion de trhow en el caso de un error
        }
        
        setProductsTypes(data); //actualiza el estado con la data de los productos
        } catch(err) {
        setError(err.message); //si hay error, que lo guarde en un estado
      } finally {
        setLoading(false); //cuando se completa la peticion, loading es false porque termino de cargar
      }
    };


    fetchProductsTypes();
  }, []);

  return { products_types, loading, error };

}