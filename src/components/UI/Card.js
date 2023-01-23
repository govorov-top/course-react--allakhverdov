import './Card.css';

function Card(props) {
    const customClasses = props.className ? props.className : '';
    return (
        <div className={`card ${customClasses}`}>
            {
                props.children
            }
        </div>
    );
}
export default Card;