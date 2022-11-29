

<p id="start" align="center"></p>
<!-- PROJECT LOGO -->

<div align="center">
  <a >
    <img src="https://www.namx-hydrogen.com/svg/logo-namx.svg" alt="Logo" style="background-color= red !important;"  width="80" height="80">
  </a>

  <h3 align="center">README-Template</h3>

  <p align="center">
  This is Awsome Project
  </p>
</div>



### HUV_VEHICULES

du NAMX HUV la plus grand SUV à pile à combustible. Annonçant jusqu’à 800 km d’autonomie d'une façon futuriste pour entamer sa commercialisation à horizon 2025.

la demande du CEO & Founder at NamX c'est de partage l'expérience immersive de la plus grand HUV .

## Table of Contents

- [Certifications](#certifications)
- [Commandeline](#commandeline)
- [Built With](#built)

 <!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
        <li>
      <a href="#certifications">certifications</a>
        </li>
        <li>
          <a href="#commandeline">commandeline</a>
      </li>
      <li>
        <a href="#built">built</a>
      </li>
   
   </ol>
 </details>
 
![HUV_VEHICULES Social Banner](https://www.namx-hydrogen.com/img/home/suv-hydrogene-1920w.webp)

  
# Introduction

Créez une API REST Node.js maintenable et évolutive avec Express et Mongoose.

The project structure is based on MVC and follows it's basic principles but is a little bit different in which instead of having the entities logic spread out into specific folders (models folder containing all models, controllers folder containing all controllers etc...).

Each entity has it's own folder containing all it's core logic . Let's take the `User` entity as an example:

```
backend
└── entities
    └── controllers
        ├── userController.js
    └── models
        ├── userModel.js 
    └── routes
         └── userRouter.js
```

Grâce à cette structure, il est plus facile de maintenir et de faire évoluer plusieurs entités (vous aurez rarement à passer d'un dossier à l'autre pour gérer une entité).

Le projet est livré avec de nombreuses fonctionnalités intégrées, telles que :

- Authentification avec [JWT](https://www.npmjs.com/package/jsonwebtoken) : fournissant à la fois un jeton d'accès et un jeton de rafraîchissement (envoyé sous forme de cookie http sécurisé uniquement et enregistré dans la base de données).
- Système de connexion unifié pour la prise en charge de plusieurs rôles d'utilisateurs.
- Validation utilisant [Joi](https://joi.dev/).
- Gestion des erreurs et méthode personnalisée de capture des erreurs.
- Population optionnelle, sélection des champs à remplir et des champs à renvoyer par les requêtes GET.
- Plus de détails ci-dessous...
### Certifications



### Built With
Cette section doit énumérer tous les principaux frameworks/bibliothèques utilisés pour lancer votre projet. Laissez les add-ons/plugins pour la section remerciements. Voici quelques exemples.

* [![express][express.js]][express-url]

### Commande line 
```sh
npm init
```






# Setup

## Usage

*By default, it uses `npm` to install dependencies.

- If you prefer another package manager you can pass it as an argument `yarn`

Then open the project folder and install the required dependencies:

```bash
npm init
```
```bash
npm install express
```


[Back to table of Contents](#table-of-contents)

## Configuration

Setup your environment variables. In your root directory, you will find a `.env`:

```
 .env
```

Then:

```bash
npm  start
```

The database should be connected and your server should be running. You can start testing and querying the API.

```bash
npm run start
```

[Back to top](#table-of-contents)

# Directory Structure

```
backend/
├──controllers/                 # Contains mostly global and reusable logic (such as auth and crud)
├── db/                         # Database, routes and server configurations
├── middlewares/                # Express middlewares
├── routes                      # Contains entity templates (default and user type)
├── models/                     # Custom/global type definitions
└── index.ts                    # App entry point (initializes database connection and express server)
```

[Back to table of Contents](#table-of-contents)


# Features

## API Endpoints

List of available routes:

**Auth routes** (public):\
`POST /api/register` - register\
`POST /api/login` - login\

**User routes** (private):\
`GET /api/users` - get all users\
`GET /api/users/:id` - get user by id\
`PATCH /api/users/:id` - update user\
`DELETE /api/users/:id` - delete user

**Admin routes**:\
`GET /api/admins` - get all admins\
`GET /api/admins/:id` - get admin by id\
`PATCH /api/admins/:id` - update admin\
`DELETE /api/admins/:id` - delete admin

[Back to table of Contents](#table-of-contents)

<h2 id="credits"> :scroll: Credits</h2>

Faiza RABHI

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Faizarabhi)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faiza-rabhi/)




Ayoub Benouahi

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Benouahi1)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/benouahi-ayoub-642542236/)
<p align="right"><a href="#start"><img width="45rem" src="https://raw.githubusercontent.com/xnbox/DeepfakeHTTP/main/img/top.png"></a></p>



