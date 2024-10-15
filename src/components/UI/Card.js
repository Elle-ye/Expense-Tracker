import './Card.css';
// Wrapper
const Card = (props) => {
    const classes = 'card ' + props.className;
     
    return <div className={classes}>{props.children}</div>
}

export default Card;