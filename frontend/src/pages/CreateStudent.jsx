import StudentForm from "../components/StudentForm";
import { createStudent } from "../services/studentService";

/*
  Page CreateStudent
  - Utilise StudentForm
  - Gère l'appel API
  - Gère succès / erreur
*/
function CreateStudent() {

  // Fonction appelée quand le formulaire est validé
  const handleCreateStudent = async (studentData) => {
    try {
      // Appel au backend via le service
      await createStudent(studentData);

      // Message simple de succès
      alert("Étudiant créé avec succès");
    } catch (error) {
      // Gestion d'erreur basique
      console.error(error);
      alert("Erreur lors de la création de l'étudiant");
    }
  };

  return (
    <div>
      <StudentForm onSubmit={handleCreateStudent} />
    </div>
  );
}

export default CreateStudent;
