import PropTypes from 'prop-types';
import Contact from './Contact';
import Button from 'components/common/Button';
import { ListItem, ListOfContacts } from './ContactList.styled';

const ContactList = ({ contactList, deleteContact }) => {
    return (
        <ListOfContacts>
            {
                contactList.map(({ id, name, number }) => (
                    <ListItem
                        key={id}
                    >
                        <Contact
                            name={name}
                            number={number}
                        />
                        <Button
                            onClick={() => deleteContact(id)}
                        >
                            &#9587;
                        </Button>
                    </ListItem>
                ))
            }
        </ListOfContacts>
    )
}

ContactList.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    deleteContact: PropTypes.func
}

export default ContactList;