import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import { StyledBtn, StyledBtnContainer } from "./FeedBackStyled";

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <StyledBtnContainer>
            {options.map((option) => {
                return (
                    <StyledBtn
                    key={nanoid()}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                    </StyledBtn>
                )
            })}
        </StyledBtnContainer>
    );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};