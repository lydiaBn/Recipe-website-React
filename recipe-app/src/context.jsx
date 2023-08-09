/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import axios from 'axios'
const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({ children }) => {
  
    const fetchMeals = async (url) => {
      
      try {
        const {data} = await axios(url)
       console.log(data.meals)
     
      }
      catch (e) {
        console.log(e.response)
      }
      
    }
  
  
    useEffect(() => {
      fetchMeals(allMealsUrl)
    }, [])

  return (
    <AppContext.Provider value={{ name: "Lydia", role: "Student" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
