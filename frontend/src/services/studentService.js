import axios from "axios";

/*
  URL de base de l'API
  À adapter selon le backend
*/
const API_URL = "http://localhost:3000/api";

/*
  Création d'un étudiant
  - Reçoit les données du formulaire
  - Envoie au backend
*/
export const createStudent = (studentData) => {
  return axios.post(`${API_URL}/students`, studentData);
};
