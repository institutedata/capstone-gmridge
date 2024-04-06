import React from 'react';
import "./Journey-Nav.css";
import JourneyNavData from "./Journey-Nav-Data";
import Add from "../assets/Add.png";
import List from "../assets/List.png";
import Export from "../assets/Export.png";

function JourneyNav(){
    return (
        <div className="journey-nav">
            <h1>Your Journeys</h1>
            <p>You can navigate, export and view your trips below</p>
            <div className="journeycard">
                <a href="/journey/form">
                    <JourneyNavData
                        image={Add}
                        heading="Add New Journey"
                        text="Add a new journey to your list"
                    />
                </a>
                <a href="/journey/list">
                    <JourneyNavData
                        image={List}
                        heading="View All Journeys"
                        text="View, edit and add comments to your journeys"
                    />
                </a>
                <a href="/journey/export">
                    <JourneyNavData
                        image={Export}
                        heading="Export Journey List"
                        text="Export your journey list to a CSV, PDF or Excel file for your records"
                    />
                </a>
            </div>
        </div>
    );
}

export default JourneyNav;
