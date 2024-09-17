import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar-container">
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    textColor: "rgba(52, 64, 84, 1)",
                    pathColor: "rgba(0, 67, 201, 1)",
                    trailColor: "rgba(232, 239, 252, 1)"
                })}
            />
        </div>
    );
};

export default ProgressBar;