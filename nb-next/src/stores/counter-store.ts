//ESTE STORE ES SOLO DE EJEMPLO PARA SABER COMO MANEJAR ZUSTANT
//LOS STORES QUE USA LA APP ESTAN EN src/app/stores
// ====> ESTE ES EL PRIMER PASO despues ver providers/counter-store-providers.tsx

import { createStore } from "zustand/vanilla"; //CREA EL STORE

//TIPA EL ESTADO INICIAL
export type CounterState = {
  count: number;
};

//TIPA LAS FUNCIONES QUE ACTUALIZAN EL ESTADO
export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

//UNIMO LOS DOS TIPOS DEL ESTADO Y LAS FUNCIONES QUE ACTUALIZAN EL ESTADO
export type CounterStore = CounterState & CounterActions;

//Inicializamos el estado
export const initCounterStore = (): CounterState => {
    return {
        count: new Date().getFullYear()
    }
}


//Creamos el estado por defecto 
export const defaultInitState: CounterState = {
  count: 0,
};


//Creamos la funcion createCounterStore que recibe como parametro que por defecto tiene el valor defaultInitState
//la funcion createStore se tipa con CounterStore debe tener el state y als funciones de incremento y decremeneto 

export const createCounterStore = (initState: CounterState = defaultInitState) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};

//en nuestro componente de usuario podemos llamar este store asi 

//import { useCounterStore } from '@/providers/counter-store-provider'

// const { count, incrementCount, decrementCount } = useCounterStore(
//   (state) => state,
// )

