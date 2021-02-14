import react from 'react';
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div>
            <Link to={`/store/item/${props.details.id}`}>
                <div>
                    {props.details.name}
                </div>
            </Link>
        </div>
    );
}

export default Item;