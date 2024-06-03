import React from 'react'
import Lottie from 'react-lottie'
import Loading from '../lottie/loading.json'


const LoadingScreen = () => {
    return (
        <div className='bg-black center-loading'>
            <h1 className='loading-title'>This will take a while...</h1>
            <div id="lottie-container">
                <Lottie
                    options={
                        {
                            loop: true,
                            autoplay: true,
                            animationData: Loading,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}

export default LoadingScreen