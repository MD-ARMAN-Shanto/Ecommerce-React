import {API} from "../config";
import queryString from 'query-string';


export const getProduct = (sortBy) =>{
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

export const getCategories = () =>{
    return fetch(`${API}/categories`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

//search by category and price
export const getFilteredProducts = (skip, limit, filters = {}) =>{
    //console.log(name, email, password);
    const data = {
        skip,
        limit,
        filters
    }
    return fetch(`${API}/products/by/search`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then( res => {
            return res.json();
        })
        .catch(err => {
            console.log(err)
        })
};

export const list = params => {
    const query = queryString.stringify(params)
    console.log(query)
    return fetch(`${API}/products/search?${query}`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

export const read = (productId) =>{
    return fetch(`${API}/product/${productId}`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

export const listRelatedProduct = (productId) =>{
    return fetch(`${API}/products/related/${productId}`,{
        method: "GET"
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

//braintree get token
export const getBrainTreeClientToken = (userId, token) =>{
    return fetch(`${API}/braintree/getToken/${userId}`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res =>{
            return res.json()
        })
        .catch(err => console.log(err))
}

//payment method process

export const processPayment = (userId, token, paymentData) =>{
    return fetch(`${API}/braintree/payment/${userId}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(res =>{
            return res.json();
        })
        .catch(err => console.log(err));
}

//post order products
export const createOrder = (userId, token, createOrderData) =>{
    return fetch(`${API}/order/create/${userId}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
        .then(res =>{
            return res.json();
        })
        .catch(err => console.log(err));
}