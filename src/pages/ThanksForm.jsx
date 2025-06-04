export default function ThanksForm({selectBtn}){
    return(
        <div className="thanksFormContainer">
            <div className="imgContainer"><img src="./images/illustration-thank-you.svg" alt=""/></div>
            <div className="ratingResult">
                <p>You selected {selectBtn} out of 5</p>
            </div>
            <div className="messageContainer">
                <h1 className="title">Thank you!</h1>
                <p className="description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    )
}