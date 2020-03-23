export const DataPages = [
  [
    { title: "Type de bien" },
    { value: "MAIS", caption: "Maison", default: false },
    { value: "APP", caption: "Appartement", default: true }
  ],
  [
    { title: "Etat du bien" },
    { value: "ANC", caption: "Ancien", default: false },
    { value: "NEW", caption: "Neuf", default: true }
  ],
  [
    { title: "Usage du bien" },
    { value: "RPRI", caption: "Résidence principale", default: false },
    { value: "RSEC", caption: "Résidence secondaire", default: true },
    { value: "INVEST", caption: "Investissement", default: false }
  ],
  [
    { title: "Votre situation actuelle" },
    { value: "LOC", caption: "Location", default: false },
    { value: "PROP", caption: "Propriétaire", default: true },
    {
      value: "BLF",
      caption: "Bénéficiaire d'un logement de fonction",
      default: false
    },
    { value: "HTG", caption: "Hébergé à titre gratuit", default: false }
  ],
  [{ title: "Où se situe le bien à financer" }],
  [{ title: "Définissons le montant de votre projet" }],
  [{ title: "Vos coordonnées" }],
  [{ title: "Et voilà, le formulaire est terminé!" }]
];
export default DataPages;
