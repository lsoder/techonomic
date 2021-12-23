const SubscriptionCard = (props) => {
    return (
        <div>
        <p>{props.heading}</p>
        <p>
          {props.text} 
        </p>
        <button>knapp</button>
        </div>
    )
}

export default SubscriptionCard;