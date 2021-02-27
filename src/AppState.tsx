import React,{useState,createContext} from 'react';

interface AppStateValue {
    username:string;
    shoppingCart:{items:{id:number,name:string}[]}
}

const myLove:AppStateValue = {
    username:"米米",
    shoppingCart:{items:[]}
};

export const myContext = createContext(myLove);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

const AppStateProvider:React.FC = (props) => {
    const [state,setState] = useState(myLove);
    return (
    <myContext.Provider value={state}>
        <appSetStateContext.Provider value={setState}>
            {props.children}
        </appSetStateContext.Provider>
    </myContext.Provider>)
}

export default AppStateProvider;