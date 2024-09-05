import { Contact } from "../models/contact";

interface ContactItemProps {
  contact: Contact;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactItem = ({
  contact,
  index,
  onEdit,
  onDelete,
}: ContactItemProps) => {
  return (
    <li key={index}>
      <strong>Namn:</strong>
      {contact.name} <br />
      <strong>Adress:</strong>
      {contact.address} <br />
      <strong>Email:</strong>
      {contact.email} <br />
      <button onClick={onEdit}>Ändra</button>
      <button onClick={onDelete}>Ta bort</button>
    </li>
  );
};

export default ContactItem;
