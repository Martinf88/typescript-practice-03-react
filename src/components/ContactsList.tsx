import { useState } from "react";
import { useContactStore } from "../store/contactStore";
import ContactItem from "./ContactItem";
import { Contact } from "../models/contact";

const ContactList = () => {
  const [form, setForm] = useState<Contact>({
    name: "",
    address: "",
    email: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const { contacts, addContact, updateContact, deleteContact } =
    useContactStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editIndex !== null) {
      updateContact(editIndex, form);
      setEditIndex(null);
    } else {
      addContact(form);
    }
    setForm({ name: "", address: "", email: "" });
  };

  const handleEdit = (index: number) => {
    const contact = contacts[index];
    setEditIndex(index);
    setForm(contact);
  };
  const handleDelete = (index: number) => {
    deleteContact(index);
    if (editIndex === index) {
      handleCancelEdit();
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setForm({ name: "", address: "", email: "" });
  };

  return (
    <div>
      <h2>Mina Kontakter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn: </label>
        <input
          type="text"
          name="name"
          placeholder="ex. Kurt..."
          value={form.name}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Adress: </label>
        <input
          type="text"
          name="address"
          placeholder="ex. stadsvägen..."
          value={form.address}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="ex. Kurt.Karlsson@fakemail.com"
          value={form.email}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editIndex === null ? "Lägg till" : "Spara"}
        </button>
        {editIndex !== null && (
          <button type="button" onClick={handleCancelEdit}>
            Avbryt
          </button>
        )}
      </form>
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            index={index}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
