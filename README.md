# Projet Angular M2 BackEnd

## Table des matières

- [Projet Angular M2 BackEnd](#projet-angular-m2-backend)
  - [Table des matières](#table-des-matières)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Fonctionnalités](#fonctionnalités)
  - [Contributeurs](#contributeurs)
    - [ETU1340 (noumsfinoana@gmail.com)](#etu1340-noumsfinoanagmailcom)
    - [ace34TT (tafinasoa35@gmail.com)](#ace34tt-tafinasoa35gmailcom)
  - [Améliorations Possibles](#améliorations-possibles)

## Introduction

Ce projet constitue le backend pour la gestion des devoirs dans un cadre éducatif. Il offre diverses fonctionnalités, y compris les opérations CRUD pour les devoirs, le défilement infini, les capacités de recherche et les statistiques. Le backend est construit en utilisant Node.js et MongoDB, et il communique avec un frontend développé en Angular.

## Installation

Pour installer et exécuter ce projet localement :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ETU1340/Angular_M2_BackEnd.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd Angular_M2_BackEnd
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Configurez la base de données MongoDB et configurez la chaîne de connexion dans un fichier `.env`.

5. Démarrez le serveur :
   ```bash
   npm start
   ```

## Utilisation

Une fois le serveur démarré, vous pouvez accéder aux points de terminaison de l'API pour gérer les devoirs. Utilisez un outil comme Postman ou intégrez-le avec le frontend pour interagir avec les services backend.

## Fonctionnalités

- **Opérations CRUD pour les Devoirs** : Créer, lire, mettre à jour et supprimer des devoirs.
- **Défilement Infini** : Charger efficacement de grands ensembles de données avec le défilement infini.
- **Fonctionnalité de Recherche** : Capacités de recherche améliorées pour les devoirs.
- **Statistiques** : Générer des statistiques liées aux devoirs.
- **Glisser-Déposer** : Fonctionnalité de glisser-déposer pour soumettre des devoirs.
- **Intégration MongoDB** : Stocker et gérer les données en utilisant MongoDB.

## Contributeurs

### ETU1340 (noumsfinoana@gmail.com)
- **Commit Initial et Configuration** : Configuration initiale du projet et upload des fichiers.
- **Gestion des Professeurs** : Création des classes pour gérer les professeurs.
- **Glisser-Déposer** : Ajout de la fonctionnalité de glisser-déposer pour les devoirs.
- **Défilement Infini** : Implémentation du défilement infini et ajout de 1000 entrées de test.
- **Fonctions de Recherche** : Création et amélioration des fonctionnalités de recherche pour les devoirs.
- **Mise à Jour de la Classe Devoir** : Mise à jour de la classe devoir.

### ace34TT (tafinasoa35@gmail.com)
- **Gestion de l'API** : Gestion de l'API des étudiants et autres mises à jour initiales.
- **Améliorations du Modèle** : Ajout d'éléments supplémentaires au modèle.
- **Fonctionnalité de Statistiques** : Implémentation des fonctionnalités liées aux statistiques.
- **Refactorisation du Code** : Refactorisation du code et mise à jour du schéma.
- **Initialisation des Devoirs** : Initialisation des devoirs avec MongoDB.

## Améliorations Possibles

- **Authentification et Autorisation** : Implémenter l'authentification et l'autorisation des utilisateurs pour sécuriser les points de terminaison de l'API.
- **Tests Complètes** : Ajouter des tests unitaires et des tests d'intégration pour garantir la fiabilité des services backend.
- **Documentation de l'API** : Créer une documentation détaillée de l'API en utilisant des outils comme Swagger pour aider les développeurs à comprendre et utiliser l'API.
- **Gestion des Erreurs** : Améliorer la gestion des erreurs et fournir des messages d'erreur plus descriptifs.
- **Optimisation des Performances** : Optimiser les requêtes à la base de données et la logique backend pour améliorer les performances.

Pour toute question ou contribution supplémentaire, n'hésitez pas à ouvrir une issue ou à soumettre une pull request. Merci d'utiliser notre service backend !