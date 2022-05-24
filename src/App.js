import React, { useState } from 'react';
import { useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';



import axios from "axios";


const API_URL = 'car-data.p.rapidapi.com?apikey=7786f90c70msh921a76a3839a3e0p1a7ce7jsnc8b7cda04a74';


const App = () => {
    const options = {
        method: 'GET',
        url: 'https://car-data.p.rapidapi.com/cars/makes',
        headers: {
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
            'X-RapidAPI-Key': '7786f90c70msh921a76a3839a3e0p1a7ce7jsnc8b7cda04a74'
        }
    };


    axios.request(options).then(function (response) {
        const makes = (response.data);

       
    }).catch(function (error) {
        console.error(error);

     
    });
    
    return (
        axios.request(options).then(function (response) {
            const makes = (response.data);
    
           
        }).catch(function (error) {
            console.error(error);
    
         
        }),
        <div className="container">
            <p>{console.log(response.data)}</p>
        </div >


    );
}



export default App;