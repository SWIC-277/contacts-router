import ky from "ky";

const BASE_URL = "http://localhost:3001/users";

export default {
  getContacts: async () => {
    return await ky.get(BASE_URL).json();
  },
  getContact: async (id) => {
    return await ky.get(`${BASE_URL}/${id}`).json();
  },
  createContact: async (contact) => {
    return await ky.post(BASE_URL, { json: contact }).json();
  },
  updateContact: async (contact) => {
    return await ky.put(`${BASE_URL}/${contact.id}`, { json: contact }).json();
  },
  deleteContact: async (id) => {
    return await ky.delete(`${BASE_URL}/${id}`).json();
  },
};
