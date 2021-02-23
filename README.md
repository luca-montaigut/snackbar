# Snack Bar project

## Introduction

L'objectif de ce cas pratique est de manipuler les hooks react.
Ce projet contient actuellement trois pages "About", "Home" et "Users", sur chacune des pages se trouve un bouton permettant d'afficher une snack bar en bas à droite de l'écran.
Le but de cette snack bar est d'afficher des messages dans toute l'application et d'être partagé entre les écrans
L'implémentation actuelle de la snackbar a quelques faiblesses :

- lorsqu'on change de page elle disparaît
- si on re-clique sur le bouton d'alerting elle ne re-apparaît pas
- il faut inclure le composant dans les pages ou on veut l'afficher

## Objectifs

Nous souhaitons simplifier l'utilisation de cette snack bar grâce à l'utilisation des hooks.
Voici quelques objectifs à atteindre :

- rendre l'affichage du composant snackbar décorélé de son utilisation
- permettre d'afficher plusieurs messages
- optimiser le rendu

## Installation du projet

Utiliser node version 12 ou supérieur
Exécuter la commande `yarn install` pour installer les dépendances du projet
Exécuter `yarn start` pour lancer le projet, un serveur de développement ce lance et est accessible à l'adresse `http://localhost:3000`
