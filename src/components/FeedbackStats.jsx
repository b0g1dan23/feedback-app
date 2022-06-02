import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate ratings avg
  let avg =
    feedback.reduce((acc, val) => {
      return acc + val.rating;
    }, 0) / feedback.length;

  avg = avg.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
