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
                    <img src={Image} width='800px' height='700px' alt="not found"/>
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#001d3d", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 70, fontWeight: 'bold' }}> Welcome to</span> </h1>
                    <h1><span style={{ color: "#001d3d",fontFamily: 'dancing-script', marginLeft: '130px', fontSize: 70,fontWeight: 'bold' }}>Stock World </span> </h1>
                  <p style={{fontSize:20}}>Stock market prediction aims to determine the future movement of the stock value of a financial exchange. The accurate prediction of share price movement will lead to more profit investors can make. Predicting how the stock market will move is one of the most challenging issues due to many factors that involved in the stock prediction, such as interest rates, politics, and economic growth that make the stock market volatile and very hard to predict accurately</p>
                <p style={{fontSize:20}}> The prediction of shares offers huge chances for profit and is a major motivation for research in this area; knowledge of stock movements by a fraction of a second can lead to high profits.</p>
                <p style={{fontSize:20}}>Since stock investment is a major financial market activity, a lack of accurate knowledge and detailed information would lead to an inevitable loss of investment. The prediction of the stock market is a difficult task as market movements are always subject to uncertainties. </p>
                </div>
            </div>
        </div>


    )
}











