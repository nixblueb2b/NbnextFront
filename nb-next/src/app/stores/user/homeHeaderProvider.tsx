'use client'

import { type ReactNode, createContext, useRef, useContext, Children } from "react"

import { useStore} from "zustand"

import { type OpenSidebarStore, createOpenSidebarStore, initOpenSidebarStore } from "@/app/providers/Zustant/users/homeHederStoreBtn"

export type OpenSidebarStoreApi = ReturnType<typeof createOpenSidebarStore>

export const OpenSidebarStoreContext = createContext<OpenSidebarStoreApi | undefined>(
    undefined
)

export interface OpenSidebarProviderProps {
    children: ReactNode;
}


export const OpenSidebarProvider = ({children}: OpenSidebarProviderProps ) => {
    const storeRef = useRef<OpenSidebarStoreApi>();
    if(!storeRef.current){
        storeRef.current = createOpenSidebarStore(initOpenSidebarStore())
    }
    return (
        < OpenSidebarStoreContext.Provider value={storeRef.current}>
            {children}
        </ OpenSidebarStoreContext.Provider>
    )
}


export const useOpenSidebarStore = <T,>(selector: (store: OpenSidebarStore) => T,): T => {
    const openSidebarStoreContext = useContext(OpenSidebarStoreContext)

    if (!openSidebarStoreContext) {
      throw new Error(`useCounterStore must be used within  OpenSidebarProvider`)
    }
    return useStore(openSidebarStoreContext , selector)
  }








