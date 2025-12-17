import { useState, useEffect } from "react";
import "../styles/studentForm.css";

/*
  Composant StudentForm
  - Affiche le formulaire de création d'un étudiant
  - Ne gère PAS la navigation
  - Reçoit une fonction onSubmit depuis la page parente
*/
function StudentForm({ onSubmit }) {

  // State pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    matricule: "",
    promotionId: ""
  });

  // State pour stocker la liste des promotions (venant du backend)
  const [promotions, setPromotions] = useState([]);

  // State pour afficher les erreurs simples
  const [error, setError] = useState("");

  /*
    useEffect s'exécute une seule fois
    Ici, il servira à charger les promotions
    (temporairement simulées si le backend n'est pas prêt)
  */
  useEffect(() => {
    // SIMULATION des promotions (à remplacer par un appel API)
    setPromotions([
      { id: 1, nom: "L1 Informatique" },
      { id: 2, nom: "L2 Informatique" },
      { id: 3, nom: "L3 Informatique" }
    ]);
  }, []);

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /*
    Gestion de la soumission du formulaire
    - Vérifie que tous les champs sont remplis
    - Envoie les données au parent (CreateStudent)
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.matricule ||
      !formData.promotionId
    ) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    // Si tout est OK, on enlève l'erreur
    setError("");

    // On envoie les données à la page parente
    onSubmit(formData);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Créer un étudiant</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
      />

      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="matricule"
        placeholder="Matricule"
        value={formData.matricule}
        onChange={handleChange}
      />

      <select
        name="promotionId"
        value={formData.promotionId}
        onChange={handleChange}
      >
        <option value="">Sélectionner une promotion</option>
        {promotions.map((promo) => (
          <option key={promo.id} value={promo.id}>
            {promo.nom}
          </option>
        ))}
      </select>

      <button type="submit">Créer</button>
    </form>
  );
}

export default StudentForm;
