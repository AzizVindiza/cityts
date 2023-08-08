import React, {createContext , useState} from 'react';

type StateContextType = {
    changeBurger: boolean;
    setChangeBurger: React.Dispatch<React.SetStateAction<boolean>>;
    category : number
    setCategory :React.Dispatch<React.SetStateAction<number>>
};
// type states and function

export const StateContext = createContext<null | StateContextType>(null);
// create variable to use UseContext


type ContextProviderProps = {
    children: React.ReactNode;
};
//type children

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [changeBurger, setChangeBurger] = useState(false);
    const [category, setCategory] = useState(0);
    const value = {
        changeBurger, setChangeBurger,category, setCategory

    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

