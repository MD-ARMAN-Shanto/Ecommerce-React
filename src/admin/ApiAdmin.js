import {API} from "../config";
import userEvent from "@testing-library/user-event";

export const createCategory = (userId, token, category) =>{
    //console.log(name, email, password);
    return fetch(`${API}/category/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then( res => {
            return res.json();
        })
        .catch(err => {
            console.log(err)
        })
};

export const createProduct = (userId, token, product) =>{
    //console.log(name, email, password);
    return fetch(`${API}/product/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then( res => {
            return res.json();
        })
        .catch(err => {
            console.log(err)
        })
};

export const getCategories = () =>{
    return fetch(`${API}/categories`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}
