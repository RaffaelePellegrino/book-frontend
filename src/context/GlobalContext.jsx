import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()
const apiUrl = import.meta.env.VITE_API_URL;

const GlobalProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [bookDetails, setBookDetails] = useState(null);

    function getData() {
        axios
            .get(apiUrl + "/books")
            .then((res) => {
                console.log(res.data.items);
                setBooks(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finally");
            })
    }

    function getDetails(id) {
        axios
            .get(apiUrl + "/books/" + id)
            .then((res) => {
                console.log(res.data);
                setBookDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finally");
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{ books, setBooks, bookDetails, setBookDetails, getData, getDetails }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };