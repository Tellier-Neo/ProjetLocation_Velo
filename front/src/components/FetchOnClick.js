import React, { useState } from "react";

const FetchOnClick = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fonction pour envoyer la requête lorsque le bouton est cliqué
  const fetchData = () => {
    setLoading(true); // Active l'indicateur de chargement
    setError(null); // Réinitialise les erreurs précédentes

    // URL de ton backend
    const url = "http://192.168.65.152:8080/data";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données !");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Stocke les données dans le state
        setLoading(false); // Désactive l'indicateur de chargement
      })
      .catch((err) => {
        setError(err.message); // Capture et affiche l'erreur
        setLoading(false); // Désactive l'indicateur de chargement
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Requête au clic</h1>
      <button onClick={fetchData} style={styles.button}>
        Envoyer la requête
      </button>
      {loading && <p>Chargement des données...</p>}
      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}
      {data && (
        <div>
          <h2>Données récupérées :</h2>
          <p>{data.coucou}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FetchOnClick;
