import React from "react";

const FeedbackOptions = ({ options , onLeaveFeedback }) => {
    return (
        <div>
            {options.map((option) => (
                <button key={option} style={{ marginRight: '10px', backgroundColor: 'white', border: '0.3px solid gray', borderRadius: '3px'}} onClick={() =>
                    onLeaveFeedback(option)} >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
            ))}
        </div>
    );
};

export default FeedbackOptions;