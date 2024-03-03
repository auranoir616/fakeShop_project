// Import modul-modul yang diperlukan dari React dan PropTypes
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Membuat konteks dengan nilai default yang berisi fungsi
const StateContext = createContext({
    setNotification: () => {},
    setDetail: () =>{},
    setOpen: ()=>{},
    setLoading: ()=>{},
    setInformation: ()=>{}
});

//! Mendefinisikan komponen ContextProvider untuk mengelola state dan memberikannya ke anak-anaknya
export const ContextProvider = ({ children }) => {
    // Menginisialisasi state untuk notifikasi dengan string kosong
    const [notification, _setNotification] = useState('')
    const [detail, _setDetail] = useState([])
    const [open, _setOpen] = useState(false)
    const [loading, _setLoading] = useState(false)
    const [information, _setInformation] = useState([])

    // Mendefinisikan fungsi setNotification untuk memperbarui state notifikasi dan mengosongkannya setelah 3 detik
    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification('');
        }, 3000);
    }
 // Mendefinisikan fungsi setDetail untuk mendapatkan data dari API berdasarkan id yang diterima dan memperhbaharui nilai detail
    const setDetail = (id) =>{
        _setOpen(true)
        _setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            _setLoading(false)
            _setDetail(data)
        }   
         )
      }
      const setOpen = () =>{
        _setOpen(false)
      }
      
      const setLoading = () =>{
        _setLoading(false)
      }

      const setInformation = (data) =>{
          _setInformation(data)
            localStorage.setItem("information", JSON.stringify(data));  
      }


    // Menyediakan state dan fungsi setNotification kepada anak-anak menggunakan provider dari konteks
    return (
        <StateContext.Provider value={{ notification, setNotification, detail, setDetail,setOpen, open,loading,setLoading,setInformation,information }}>
            {children}
        </StateContext.Provider>
    );
};

// Menentukan PropTypes untuk memastikan tipe data yang benar dipass ke komponen ContextProvider
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Membuat hook UseStateContext untuk dengan mudah mengakses konteks dalam komponen fungsional
export const UseStateContext = () => useContext(StateContext);
