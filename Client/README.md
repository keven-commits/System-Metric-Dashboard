Pour importer le programme, il faut aller sur GitHub et me faire une demande pour accéder à mes Repos
Suite à mon aprobation, aller dans la Repo "System-Metric-Dashboard" et la cloner en local grace au lien HTTPS
Afin de cloner sur l'ordinateur la Repo, il faut avoir GitKraken ou un application similaire et importer la Repo grâce à un lien URL
Lorsque la Repo est installée dans l'ordinateur, il ne reste plus qu'à ouvrir le fichier avec VisualStudio Code et tout fonctionne. SIKE!
Puisque dans le code, les modules n'on pas été enregistrés dans la repo, on doit installer les modules et les packages pour lire les fichiers
Ouvrir un terminal et accèder au lien du fichier jusqu'au dossier "Client" et faire :
"npm install @emotion/react @emotion/styled @mui/icons-material @mui/material @recharts/devtools axios react react-dom recharts"
Ensuite ouvrir le terminal et accèder au lien du fichier jusqu'au dossier "Server" et faire :
"npm install cors express os-utils systeminformation"
Maintenant que tous les modules et packages sont installés dans les dossiers respectif, on peut lancer le projet.
ouvrir un terminal et aller dans "server" et faire "npm start" pour initialiser le serveur qui prend les données de ton ordinateur
ouvrir un terminal et aller dans "client" et faire "npm run dev" pour initialiser le contenu sur le browser
Vite va te donner un lien en local Host dans le terminal pour ouvrir le contenu dans ton browser
Si tu veux vérifier les données, tu peux accèder à "Localhost:3000/cpu" "Localhost:3000/gpu" "Localhost:3000/network" "Localhost:3000/disk" pour avoir les données respective
Tu vas pouvoir y voir un donnée "ts" qui est un time stamp qui correspond au nombre de milisecondes depuis 1970 (une unité de mesure du temps en programmation) et la donnée de la composante informatique (en % pour cpu, gpu et disk et en bytes/seconde pour network)
On peut voir sur le navigateur un Dashboard qui montre un graph qui s'update aux 10 secondes afin de visualier les données envoyées de ton ordinateur
La marge permet d'accèder aux donnée de la touche respective, mais seulement Dashboard à des données pour l'instant, on verra "En constuction" pour les autres
Voilà, plus qu'a laisser le tout fonctionner et on peut y voir les données de ton ordinateur

Afin d'explique la logique que j'ai utiliser et de la façon dont j'ai vu le projet, entrons dans les dossiers du code :

- Dans le dossier "server" on peut voir "information" qui contient les informations de "cpu", "gpu", "network" et "disk"
- Les données sont traitée dans le fichier "server.js" qui va les envoyers sur la page respective.

- Dans le dossier "client" on peut voir "scr" qui contiendra tout les components afin de former la page visuellement
- Dans le dossier "component" on peut voir "entete", "main" et "marge"
    - Entete forme l'entête fixe de la page soit : un avatar, une barre de recherche ainsi qu'un bouton activable pour cacher la liste dans la marge
    - Marge forme la marge de la page avec un logo qu'on peut voir en haut à gauche de la marge, une liste qui contien les boutons pour accèder aux pages respectives ainsi qu'un zone pour afficher la version.
    - Main forme le centre de la page, le contenu affiché lorsqu'on affiche la page, par exemple "Dashboard", "Settings", etc.. 
        - À l'intérieur on y voir le dossier "Chart" qui contien les fichiers respectifs aux graphique Rechart qui montre les données
        - On y voir aussi le fichier "card" qui délimite comment les charts seront affichés. Le fichier "enConstruction" qui met une page par défaut avec comme information "en construction" et "title" qui affiche les titres des pages respectives
    - On y trouve aussi le fichier "errorMessage" qui affichera un message d'erreur si les données du serveur ne sont pas bonnes ou pas compatible avec un chart
    - On y trouve le dossier "mainPage" qui contient tout dans un component (l'entête, la marge, les données etc.) et le fichier "theme" qui permet de garder les mêmes couleurs pour le programme
- Dans le fichier App.jsx, on retouve le tout dans une box et qui elle est dans le fichier "main.jsx" qui crée un élément et render en mode stricte l'app


