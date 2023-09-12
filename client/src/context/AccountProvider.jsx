import { createContext, useState, useRef, useEffect } from "react";

import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

export const ContextProvider = ({ children }) => {

    const [account, setAccount] = useState("");
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessagesFlag, setnewMessagesFlag] = useState(false);


    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])

    return <AccountContext.Provider value={{ newMessagesFlag, setnewMessagesFlag,activeUsers, setActiveUsers, socket, account, setAccount, person, setPerson }}>{children}</AccountContext.Provider>
}