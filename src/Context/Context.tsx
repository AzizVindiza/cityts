import React, {createContext , useState} from 'react';

type StateContextType = {
    changeBurger: boolean;
    setChangeBurger: React.Dispatch<React.SetStateAction<boolean>>;
    category : number
    setCategory :React.Dispatch<React.SetStateAction<number>>
    categorySwiper : number
    setCategorySwiper : React.Dispatch<React.SetStateAction<number>>
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
    const [category, setCategory] = useState(0); // Choose category in homPage
    const [categorySwiper, setCategorySwiper] = useState(0); // Choose category in swiper in home page
    const value = {
        changeBurger, setChangeBurger,category, setCategory,
        categorySwiper, setCategorySwiper

    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

