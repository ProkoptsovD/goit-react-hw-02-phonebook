import PropTypes from 'prop-types';
import { ContactCard, Name, Phone } from './Contact.styled';

const Contact = ({ name, number }) => {
    return (
        <ContactCard>
            <Name>
                {name}
            </Name>
            <Phone>
                {number}
            </Phone>
        </ContactCard>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default Contact;