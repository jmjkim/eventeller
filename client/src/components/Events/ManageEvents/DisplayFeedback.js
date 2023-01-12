const DisplayFeedback = ({feedbacks}) => {
    return feedbacks?.length >= 1 ? 
        <div className="list_of_feedback_container">
            <p>&#8595;</p>
            {feedbacks.map(feedback => {
                return <p key={feedback.id}>{feedback.feedback_input}</p>
            })}
        </div> : <p>No Feedbacks Yet</p>
}

export default DisplayFeedback;