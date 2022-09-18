import { UserContext } from "../../action/acces";
import { useState, useContext } from "react";

export const jour = new Date().getDate();
export const mois = new Date().getMonth() + 1;
const annee = new Date().getFullYear();
export const anneeP = `${jour}/${mois}/${annee - 1}`;
export const anneeC = `${jour}/${mois}/${annee}`;
export const jourEtAnneP = `${jour - 1}/${mois}/${annee - 1}`;
export const jourP = `${jour - 1}/${mois}/${annee}`;

export function Form() {
  const [form, setForm] = useState({
    nomBarrage: "",
    gouvernorat: "",
    capaciteInitiale: "",
    capaciteUtile: "",
    coursEau: "",
    dateDebutTravaux: "",
    dateMiseService: "",
  });
  return [form, setForm];
}

export function FormC() {
  const { barrage } = useContext(UserContext);
  const [form, setForm] = useState({
    nomBarrage: barrage.nomBarrage,
    stockBarrage: null,
    lachersAnnee: null,
    lachersMois: null,
    lachersJour: null,
    probs: "",
    moyPeriode: null,
    apportsCummule: null,
    moyMois: null,
    apportMois: null,
    apportJour: null,
    date: anneeC,
    annee: annee,
    mois: mois,
  });
  return [form, setForm];
}

export function Gender() {
  const { user } = useContext(UserContext);
  if (user.sex === "female") return "Mme";
  return "Mr";
}

export function stocks(val1, val2, val3, val4) {
  if (!val1 || !val2 || !val3 || !val4) return false;
  return true;
}
