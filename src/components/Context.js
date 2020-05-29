import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const ContextProvider = props => {
  const [ photos, setPhotos ] = useState([]);

  const apiUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setPhotos(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <Context.Provider value={{ photos }}>
      { props.children }
    </Context.Provider>
  );
}

export { Context, ContextProvider };
