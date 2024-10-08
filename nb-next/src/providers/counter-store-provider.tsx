//ESTE PROVIDER ES SOLO DE EJEMPLO PARA SABER COMO MANEJAR ZUSTANT
//LOS PROVIDER QUE USA LA APP ESTAN EN src/app/providers

//se comienza en src/stores y despues venimos a src/providers (aqui)

"use client";

/*Impotamos
    ReactNode (tipar las childen),
    CreateContext (crear el contexto para compartir entre componentes),
    useRef crear referencia mutable
    useContext para accder al valor de un contexto
 */
import { type ReactNode, createContext, useRef, useContext } from "react";
//Importamos el useStore de zustant
import { useStore } from "zustand";
//Importamos el tipo CounterStore que es el tipado del store y de las funciones que lo actualizan
//importamos el initCounterStore el estado incial del store (no el por defecto)
import {
  type CounterStore,
  createCounterStore,
  initCounterStore,
} from "@/stores/counter-store";

//la funcion createCounterStore toma un parametro (de tipoCounterState) y retorna un tipo ipoCounterState
//ReturnType  captura el tipo de  retorno de la funcion y lo asigna a CounterStoreApi
export type CounterStoreApi = ReturnType<typeof createCounterStore>;

//creamos el context CounterStoreContext que se tipa con CounterStoreApi o undefined ose el valor que
//alamcenara el contexto va a ser de tipo CounterStoreApi
//El contexto tiene un valor inicial undefined
export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

//exportamos la interface CounterStoreProviderProps que va a tipar las children
export interface CounterStoreProviderProps {
  children: ReactNode;
}

//Creamos el Provider que va a embolver el componente, el Provider Recive las children que representa los
//componente envueltos que son de tipo CounterStoreProviderProps
//la referencia storeRef va a guaradr el state de tipo CounterStoreApi
//!storeRef.current si nos e ha inicializado el estado, si no llama a esta funcion createCounterStore() que
//lo inicializa esa funcion viene de counter-store.ts y le ppaamso el estado inicial
//Retorna el Provider del contexto definido arriba CounterStoreContext y pasamos el valor del contexto
//ene ste caso storeRef.current que es el estado actual + las funciones que actualizan el estado
//ahora todos los compomnetes envueltos por el  CounterStoreProvide podran accedr al estado y lo podran actualizar mediante las funciones

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initCounterStore());
  }

  return (
    <CounterStoreContext.Provider value={storeRef?.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

//esta es una funcion qque llama el store esta funcions e llama en el conmponente
export const useCounterStore = <T,>(selector: (store: CounterStore) => T,): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }
  return useStore(counterStoreContext, selector)
}

//1.En el layout principal 

//2.import { CounterStoreProvider } from "@/providers/counter-store-provider";

//3.y envolvemos las {children}

// <CounterStoreProvider>
// <Providers>
//   <body className={`${OpenSans.className} antialiased`}>
//     {children}
//   </body>
// </Providers>


//4. DE ESTA MANERA YA EL ESTADO ESTARIA COMPARTIDO ENTRE TODA LA APLICACION




//HAY QUE TENER EN CUENTA QUE SI EL ESTADO ES UNICO, OSEA NO SE NECECITA COMPARTIR
//CON OTRAS PAGINAS SE PUEDE CREAR UN ESTADO POR RUTA



//1.Importaamos el de components HomePage
//2.importamos y en nuestra pagina retornamos esa pagina
//3.En es apagina importamos el provider
//4.Envolvemos <HomePage/> en el provider, así el estate solo servidra para esa pagina
  //y no para todas  como el paso annterior (USAR SOLO CUANDO SEA NNECESARIO)


//1. import { HomePage } from '@/components/pages/home-page'

//2. export default function Home() {
//     return <HomePage />
//  }


//3. import { CounterStoreProvider } from '@/providers/counter-store-provider'

//4. export default function Home() {
//   return (
//     <CounterStoreProvider>
//       <HomePage />
//     </CounterStoreProvider>
//   )
// }