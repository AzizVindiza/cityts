import React, {createContext , useState} from 'react';

type StateContextType = {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StateContext = createContext<null | StateContextType>(null);


type ContextProviderProps = {
    children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const value = {
        activeMenu,
        setActiveMenu,
    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

