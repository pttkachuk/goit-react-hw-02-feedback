import PropTypes from "prop-types";

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option) => {
                return (
                    <button
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </button>
                )
                
            })}
        </>
    );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};