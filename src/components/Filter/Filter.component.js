import PropTypes from 'prop-types';
import FormField from "components/ContactForm/FormField"

const Filter = ({ onChange, value }) => {
    return (
        <FormField
            type="text"
            name="filter"
            fieldName="Find contacts by name"
            onChange={onChange}
            value={value}
        />
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Filter;