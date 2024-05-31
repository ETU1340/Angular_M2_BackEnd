# Projet Angular M2 BackEnd

## Table des matières

- [Projet Angular M2 BackEnd](#projet-angular-m2-backend)
  - [Table des matières](#table-des-matières)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Fonctionnalités](#fonctionnalités)
  - [Contributeurs](#contributeurs)
    - [VALIMBAVAKA Nomena Finoana - 57 (ETU1340)](#valimbavaka-nomena-finoana---57-etu1340)
    - [Rabenandrasana 	Tafinasoa - 11 (ace34TT)](#rabenandrasana-tafinasoa---11-ace34tt)

## Introduction

Ce projet constitue le backend pour la gestion des devoirs dans un cadre éducatif. Il offre diverses fonctionnalités, y compris les opérations CRUD pour les devoirs, le défilement infini, les capacités de recherche et les statistiques. Le backend est construit en utilisant Node.js et MongoDB, et il communique avec un frontend développé en Angular.

## Installation

Pour installer et exécuter ce projet localement :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ETU1340/Tp_angular_assignment_back_11_57.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd Tp_angular_assignment_back_11_57
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

5. Démarrez le serveur :

   ```bash
   cd src
   ```
   ```bash
   node server.js
   ```

## Utilisation

Une fois le serveur démarré, vous pouvez accéder aux points de terminaison de l'API pour gérer les devoirs. Utilisez un outil comme Postman ou intégrez-le avec le frontend pour interagir avec les services backend.

## Fonctionnalités

- **Opérations CRUD pour les Devoirs** 
- **Défilement Infini** 
- **Fonctionnalité de Recherche** 
- **Statistiques**
- **Glisser-Déposer**
- **Intégration MongoDB**

## Contributeurs

### VALIMBAVAKA Nomena Finoana - 57 (ETU1340)
- **Commit Initial et Configuration** : Configuration initiale du projet et upload des fichiers.
- **Gestion professeurs et éleves** : Creation des classes pour geré les professeurs et éleves
- **Glisser-Déposer** : Ajout de la fonctionnalité de glisser-déposer pour les devoirs.
- **Défilement Infini** : Implémentation du défilement infini pour la gestion des 1000 données
- **Fonctions de Recherche** : Création et amélioration des fonctionnalités de recherche pour les devoirs.

### Rabenandrasana 	Tafinasoa - 11 (ace34TT)
- **Opérations CRUD pour les Devoirs** : Créer, lire, mettre à jour et supprimer des devoirs.
- **Gestion de l'API** : Gestion de l'API pour tous les modéles .
- **Fonctionnalité de Statistiques** : Implémentation des fonctionnalités liées aux statistiques.
- **Deployement** : Deployement du projet en ligne
- **Generation des données** : Création et ajout de tous les données (assignments,teacher,students)