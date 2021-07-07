import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../Images/stoc-vector-2.jpg';

export default function Home() {
    return (
        <div>
            <Appbar />
            <div className='home-outer-div'>
                <div className="image">
                    <img src={Image} width='700px' height='600px' alt="not found"/>
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#001d3d", marginRight: '110px', fontSize: 70, fontWeight: 'bold' }}> Welcome to</span> </h1>
                    <h1><span style={{ color: "#001d3d", marginLeft: '130px', fontSize: 70,fontWeight: 'bold' }}>Stock World </span> </h1><br></br>
                  
                  <p style={{fontSize:20,color:'#1f2421',fontFamily:'DancingScript'}}>Stock market prediction aims to determine the future movement of the stock value of a financial exchange. The accurate prediction of share price movement will lead to more profit investors can make. Predicting how the stock market will move is one of the most challenging issues due to many factors that involved in the stock prediction, such as interest rates, politics, and economic growth that make the stock market volatile and very hard to predict accurately</p>
            
            
                </div>
            </div>
        </div>


    )
}











