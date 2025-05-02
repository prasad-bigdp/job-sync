import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';

function Home (){
    const navigate = useNavigate();

    return(
        <div className="text-center mt-5 ">
            <Header />
           
        </div>
    )
}
export default Home;