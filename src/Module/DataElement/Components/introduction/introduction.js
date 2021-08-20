
import PropTypes from "prop-types";

export default function Introduction({id}){



    return ( <div>

        <h3>Introduction for data element</h3>

    </div>
    )

}


Introduction.prototype={
    id:PropTypes.string.isRequired
}