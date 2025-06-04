import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainForm({onSelectBtn}){
    const [isActive, setActive] = useState(0);
    const navigate = useNavigate();
    let submitClick = () => {
        onSelectBtn(isActive);
        navigate('thanks', { replace: true });
    }
    return(
        <div className="mainFormContainer">
            <div className="iconContainer"><img src="./images/icon-star.svg" alt=""/></div>
            <div className="textContent">
                <h1 className="title">How did we do?</h1>
                <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="ratingContainer">
                    {
                        [1,2,3,4,5].map(num => (
                            <Button key={num} isActive={isActive === num} handle={() => setActive(num)}>{num}</Button>
                        ))
                    }
                </div>
            </div>
            <button onClick={submitClick} className={"submitBtn " + ((isActive!=0) ? "active" : "")}>
                submit
            </button>
        </div>
    )
}

function Button({ isActive, handle, children }){
    return(
        <button className={"btn " + ((isActive) ? "active" : "")} onClick={handle}>
            {children}
        </button>
    )
}