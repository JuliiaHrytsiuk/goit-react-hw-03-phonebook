import { Component } from "react/cjs/react.production.min";
import { nanoid } from "nanoid";
import { PhoneForm, FormLabel, FormInput, FormButton } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <PhoneForm onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={this.nameInputId}>
          Name
          <FormInput
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </FormLabel>
        <FormLabel htmlFor={this.numberInputId}>
          Number
          <FormInput
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </PhoneForm>
    );
  }
}

export default Form;
