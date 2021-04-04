import React from 'react';
import './home.css'

const Home = () => {

    return (
        <div className="bodyHome">
            <div className="Title">
                <span className="header"> 
                    Amealiorate
                </span>
            </div>
            <div className="about">
                <div className="text">
                    <span className="headingText">
                        About
                    </span>
                    <div className="information">
                        <div className="infoText">
                            Simply cutting out a little bit of meat from your diet can have a substantial impact on the environment and the world. An animal consumes about 6 times more protein than the amount of protein that we consume by eating it. If we as a society collectively opt for a more plant-based diet, there will be more food for everyone around the world to eat. 
                        </div>
                        <div className="infoText">
                            Livestock itself also has a significantly negative impact on the environment. Not only does raising livestock take up the majority of previously forested areas in South America, but vast amounts of land are taken up to grow animal feed. Growing this feed also requires a substantial amount of water, with 27% of water used by humans going towards growing animal feed. The waste from farm animals is also 50 times greater than the waste from the population of the United States, leading to water pollution and contamination. Furthermore, the process of raising livestock and putting meat in the store makes up 15% of all emissions produced by humans. 
                        </div>
                        <div className="infoText">
                             We’re not saying you need to, or should, cut out meat from your diet entirely. We just encourage you to be conscious of how much meat you eat. Doing this can truly make a difference in the world. If we collectively reduce the meat in our diet, we can reduce carbon emissions, preserve our ever-depleting water resources, and open up land for natural ecosystems.
                        </div>
                        <div className="infoText">
                            Our app makes going more plant-based easy. Maybe you’ve considered reducing meat in your diet, but you were afraid it would be more expensive, you wouldn’t get the proper nutrients, you wouldn’t have enough time, or the meals just wouldn’t taste good. Our app will bring you customized weekly meal plans based on your needs: how much you want to reduce your meat consumption by, your budget, your nutrition, and your time. Helping the environment has never been easier.
                        </div>
                        <div className="Source">
                            Source: The Game Changers Documentary 
                        </div>
                    </div>
                </div>
                <button class="signUp"><strong>Sign Up</strong></button>
            </div>
        </div>
        
    )
}

export default Home;