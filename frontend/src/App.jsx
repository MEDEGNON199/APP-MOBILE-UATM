import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "./pages/CreateStudent";

/*
  Composant principal de l'application
  - Gère la navigation
  - Définit les routes
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour créer un étudiant */}
        <Route path="/students/create" element={<CreateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
