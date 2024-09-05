import { create } from "zustand";
import { Contact } from "../models/contact";
import { initialContacts } from "../data/contactData";

interface ContactState {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (index: number, updatedContact: Contact) => void;
  deleteContact: (index: number) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  contacts: initialContacts,
  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),
  updateContact: (index, updatedContact) =>
    set((state) => ({
      contacts: state.contacts.map((contact, i) =>
        i === index ? updatedContact : contact
      ),
    })),
  deleteContact: (index) =>
    set((state) => ({
      contacts: state.contacts.filter((_, i) => i !== index),
    })),
}));
