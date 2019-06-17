import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4">
                <span className="text-danger mr-1">Contacts</span>List
              </h1>
              {contacts.map(contact => (
                <Contact
                  deleteContact={this.deleteContact.bind(this, contact.id)}
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
