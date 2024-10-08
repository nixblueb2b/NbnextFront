import { createStore } from "zustand/vanilla";

export type OpenSidebar = {
    isOpen: boolean;
}

export type OpenSidebarActions = {
    openSidebar: (state: boolean)=> void
    closeSidebar: (state: boolean) => void
}

export type OpenSidebarStore = OpenSidebar & OpenSidebarActions

export const initOpenSidebarStore = (): OpenSidebar => {
    return {
        isOpen: false
    }
}


export const createOpenSidebarStore = (initState: OpenSidebar) => {
    return createStore<OpenSidebarStore>()((set)=>({
        ...initState,
        openSidebar: () => set((state)=> ({isOpen: state.isOpen = true})),
        closeSidebar: () => set((state)=> ({isOpen: state.isOpen = false}))
    }))
}