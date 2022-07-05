import { Component } from "react";
import PropTypes from 'prop-types';
import FormField from "./FormField";
import { Form, Wrapper, AddContact } from './ContactForm.styled';
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    handleInputTypedValue = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();

        const { addContact } = this.props;
        const id = nanoid();
        const { name, number } = this.state;
        
        if (!name || !number) {
            return toast.warn('All fields must be filled in', {
                autoClose: 3000
            })
        }

        const wasAdded = addContact({ id, name, number });
        
        wasAdded && this.setState({
                        name: '',
                        number: ''
                    })
    }
    render() {
        const { name, number } = this.state;

        return (
            <Form
                onSubmit={this.handleFormSubmit}
            >
                <Wrapper>
                    <FormField
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        fieldName="Name"
                        value={name}
                        onChange={this.handleInputTypedValue}
                    />
                    <FormField
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        fieldName="Number"
                        value={number}
                        onChange={this.handleInputTypedValue}
                    />
                </Wrapper>
                <AddContact
                    type="submit"
                    onClick={this.handleFormSubmit}
                >
                    Add contact
                </AddContact>
            </Form>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default ContactForm;