/*
  NOVA — Configuration centrale
  ------------------------------
  Modifie ces valeurs pour ajuster le prix et le paiement partout sur le site.
  Un seul endroit à toucher.
*/

const NOVA_CONFIG = {
  // Prix affiché (texte libre, ex: "999 €")
  PRICE_DISPLAY: "999 €",

  // Lien de paiement Stripe (Payment Link, PAS de clé API ici).
  // dashboard.stripe.com > Payment Links > paiement unique.
  // Redirection après paiement à configurer vers :
  //   https://tondomaine.fr/app.html?unlocked=1
  STRIPE_PAYMENT_LINK: "https://buy.stripe.com/REMPLACE_MOI",

  // Email de contact
  CONTACT_EMAIL: "contact@strawberryproduction.fr"
};
