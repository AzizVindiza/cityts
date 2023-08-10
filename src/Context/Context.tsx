import React, {createContext, SetStateAction, useState} from 'react';

type StateContextType = {
    changeBurger: boolean;
    setChangeBurger: React.Dispatch<React.SetStateAction<boolean>>;
    category : number
    setCategory :React.Dispatch<React.SetStateAction<number>>
    categorySwiper : number
    setCategorySwiper : React.Dispatch<React.SetStateAction<number>>
    sort: boolean,
    setSort : React.Dispatch<React.SetStateAction<boolean>>
    sortElement : string
    setSortElement: React.Dispatch<React.SetStateAction<string>>
    sortPopular : string,
    setSortPopular : React.Dispatch<React.SetStateAction<string>>
    sortSupply : string
    setSortSupply : React.Dispatch<React.SetStateAction<string>>
    Supply : boolean,
    setSupply : React.Dispatch<React.SetStateAction<boolean>>
    Popular : boolean,
    setPopular : React.Dispatch<SetStateAction<boolean>>
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
    const [sort, setSort] = useState(false); // for sort
    const [Supply, setSupply] = useState(false); // open and close sort supply
    const [Popular, setPopular] = useState(false); // open and close sort popular
    const [sortElement, setSortElement] = useState('Все'); // choose sort
    const [sortSupply, setSortSupply] = useState('Все'); // choose supply
    const [sortPopular, setSortPopular] = useState('Все'); // choose popular
    const value = {
        changeBurger, setChangeBurger,category, setCategory,
        categorySwiper, setCategorySwiper,sort,setSort,sortElement,setSortElement,sortSupply, setSortSupply,sortPopular, setSortPopular,
        Supply, setSupply,Popular, setPopular

    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

