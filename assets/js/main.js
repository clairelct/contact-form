const $ = document;

// Attendre le chargement du DOM..
$.addEventListener("DOMContentLoaded", () => {
  // Event sur le click du formulaire
  $.querySelector("#contactForm button").addEventListener(
    "click",
    async (e) => {
      // Empêcher la page de refresh au submit
      e.preventDefault();
      // Récupérer tous nos champs de formulaire
      // Préparer l'objet data pour le serveur
      const data = {
        firstName: $.querySelector("#firstName").value,
        lastName: $.querySelector("#lastName").value,
        email: $.querySelector("#email").value,
        subject: $.querySelector("#subject").value,
        message: $.querySelector("#message").value,
      };
      console.log(data);

      // Enregistrer response AXIOS
      const response = await axios.post("http://localhost:3000/form", data);

      // Répondre qqch. à l'utilisateur en front.
      if (response.status === 200) {
        alert("Un mail vous a été envoyé");
      } else {
        alert("Une erreur est survenue");
      }
    }
  );
});
