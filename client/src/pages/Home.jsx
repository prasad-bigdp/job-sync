import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';

function Home (){
    const navigate = useNavigate();

    return(
        <div>
            <Header />
           
        </div>
    )
}
export default Home;