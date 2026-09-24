# Paylà Hub

Crée un dashboard web premium pour "Paylà", une plateforme marocaine de paiement pour prestataires/marchands (réservation, boutique, liens de paiement). Le design doit avoir un look fintech premium — pense Stripe Dashboard ou Mercury Bank : sobre, beaucoup d'espace blanc, typographie soignée, données financières mises en valeur avec clarté, aucune fioriture inutile.



## DIRECTION ARTISTIQUE

- Typographie : une police sans-serif moderne (type Inter ou Geist), hiérarchie claire entre titres, montants et texte secondaire

- Les montants doivent être visuellement dominants (taille, poids) par rapport au reste — c'est un dashboard financier, l'argent doit "peser" visuellement

- Cards avec coins arrondis discrets, ombres légères, jamais de bordures dures

- Mobile-first : le prestataire consulte ça majoritairement sur téléphone entre deux clients — priorise les interactions à une main, boutons d'action accessibles au pouce

- Devise affichée systématiquement en MAD

- Interface entièrement en français



## STRUCTURE DE NAVIGATION

Barre de navigation à 5 entrées : Accueil, Réservations, Boutique, Finances, Compte. Sur mobile, navigation en bas d'écran (bottom tab bar) ; sur desktop, barre latérale.

Un bouton d'action flottant "+" toujours visible depuis l'Accueil pour créer un lien de paiement rapide.



## ÉCRAN ACCUEIL

- Bandeau d'alertes en haut si nécessaire (ex: "Versement échoué", "Pièce KYC en attente", "Solde proche du plafond") — style bannière discrète mais visible, couleur d'alerte ambre/rouge selon gravité

- Carte "Solde disponible" bien mise en avant, avec date du prochain versement automatique en sous-texte

- Section "Aujourd'hui" : timeline des réservations du jour (heure, nom client, statut visuel par couleur) + commandes boutique en attente de retrait

- Bouton "Créer un lien de paiement" accessible en un tap



## ÉCRAN RÉSERVATIONS

- Vue planning par ressource (ex: Terrain 1, Terrain 2, Salle A), en vue jour et vue semaine (toggle)

- Chaque réservation affiche : heure, nom client, montant, statut avec badge coloré (Autorisée = bleu, Capturée = vert, Annulée = gris, No-show = orange)

- Sur chaque réservation : actions rapides "Marquer no-show" et "Annuler" (avec confirmation avant action)

- Filtres : par ressource, par statut, par période

- Section "Configuration" séparée du planning : gestion des ressources, horaires d'ouverture, prix, politique d'acompte/annulation



## ÉCRAN BOUTIQUE

- Liste des commandes avec statut paiement (Payée/Échouée) et statut retrait (À récupérer/Récupérée)

- Sous-section Catalogue : grille de produits avec photo, nom, prix, stock ; édition en modal



## ÉCRAN FINANCES (le plus important — soigne particulièrement cet écran)

- Sélecteur de période en haut (aujourd'hui / semaine / mois / personnalisé)

- Trois montants toujours affichés ensemble et clairement distingués visuellement : Montant brut, Commission, Montant net — jamais un seul chiffre agrégé, toujours les trois

- Filtre par source : Réservation / Boutique / Lien de paiement

- Section Versements : historique avec statut, prochain versement prévu, RIB configuré

- Bouton d'export de relevé (CSV/PDF)

- Section "Liens de paiement envoyés" : liste avec montant, statut (Payé/En attente/Expiré), possibilité de renvoyer ou annuler



## ÉCRAN COMPTE

- Infos entreprise et statut de validation KYC (badge "Vérifié" / "En attente" / "Pièce à redéposer")

- Taux de commission appliqué (affichage lecture seule)

- Configuration du versement automatique : fréquence, RIB, seuil minimum

- Gestion des accès équipe (inviter un collaborateur avec permissions limitées)



## RÈGLES DE DONNÉES IMPORTANTES

- Ne jamais recalculer ou arrondir différemment les trois montants (brut/commission/net) : ils doivent toujours apparaître exactement comme fournis par les données, sans transformation

- Chaque statut (réservation, commande, versement, lien de paiement) doit avoir un badge couleur cohérent et réutilisé partout dans l'app

- Prévoir des états vides soignés (illustration légère + texte) pour : aucune réservation aujourd'hui, aucune commande, aucun lien de paiement envoyé

- Prévoir des états de chargement (skeleton screens) plutôt que des spinners génériques



## TON GÉNÉRAL

Sérieux et rassurant, jamais ludique ou "startup flashy" — c'est un outil de gestion d'argent réel pour un commerçant, la confiance visuelle est l'objectif n°1.



Utilise des données factices réalistes en MAD pour peupler chaque écran (noms marocains, montants cohérents avec des services de réservation/boutique).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e4140b01-f66c-4a80-bbde-610bc99152b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
