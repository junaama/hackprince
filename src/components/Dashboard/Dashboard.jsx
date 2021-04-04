import React from 'react';
import './dashboard.css'

const Dashboard = () => {

    return (
        <div className="bodyDash">
            <div className="left">
                <div span="sidebar">
                    SideBar
                </div>
            </div>
            <div className="right">
                <div className="carbonSummary">
                    <div className="Header">Carbon Footprint Summary</div>
                    <div className="carbonInfo">
                        Info
                    </div>
                </div>
                <div className="mealPlan">
                    <div className="Header">Current Meal Plan</div>
                    <div className="calendar">
                        <div className="breakfast">
                            <div class="mealHeader">
                                Breakfast
                            </div>
                            Recipe
                        </div>
                        <div className="lunch">
                            <div className="mealHeader">
                                Lunch
                            </div>
                            Recipe
                        </div>
                        <div className="dinner">
                            <div className="mealHeader">
                                Dinner
                            </div>
                            Recipe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard