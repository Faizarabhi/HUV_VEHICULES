

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
- [Les API](#API)
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
      <li>
        <a href="#API">API</a>
      </li>
    </ol>
 </details>
 
![HUV_VEHICULES Social Banner](https://www.namx-hydrogen.com/img/home/suv-hydrogene-1920w.webp)



### Certifications



### Built With
Cette section doit énumérer tous les principaux frameworks/bibliothèques utilisés pour lancer votre projet. Laissez les add-ons/plugins pour la section remerciements. Voici quelques exemples.

* [![React][React.js]][React-url]

### Commande line 
```sh
npm init
```







<h2 id="credits"> :scroll: Credits</h2>

Faiza RABHI

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Faizarabhi)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faiza-rabhi/)




Ayoub Benouahi

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Benouahi1)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/benouahi-ayoub-642542236/)
<p align="right"><a href="#start"><img width="45rem" src="https://raw.githubusercontent.com/xnbox/DeepfakeHTTP/main/img/top.png"></a></p>



<h2 id="API">Les API<h2>


<br>

// USER<br>
// login<br>
POST http://localhost:8000/api/users/login<br>
Content-Type: application/json<br>

{<br>
    "email": "user8@gmail.com",<br>
    "password": "123"<br>
}<br>
<br>

###
// register<br>
POST http://localhost:8000/api/users/register<br>
Content-Type: application/json<br>

{<br>
    "fullname" : "user",<br>
    "email" : "user11@gmail.com",<br>
    "password" : "123",<br>
    "address" : "adress1",<br>
    "city" : "city1",<br>
    "state" : "state1",<br>
    "zip" : 1 ,<br>
    "country" : "country1"<br>
}<br>
<br>

// ADMIN<br>
###<br>
POST http://localhost:8000/api/admin/register<br>
Content-Type: application/json<br>

{<br>
    "email" : "admin@gmail.com",<br>
    "password" : "123",<br>
}<br>
<br>
###<br>
POST http://localhost:8000/api/admin/login<br>
Content-Type: application/json<br>

{<br>
    "email" : "admin@gmail.com",<br>
    "password" : "123",<br>
}<br>

<br>

// CAR <br>
###<br>
GET localhost:8000/api/cars<br>
<br><br>

// Ajouter les car<br>
###<br>
POST localhost:8000/api/cars<br>
Content-Type: application/json<br>
{<br>
     "Name": "Nmax",<br>
   "Type": "6384d6cdd6a1438f7ac78411"<br>
   
}<br>

// RESERVATION<br>
###<br>
//Confirmtion reservation sur email<br>
POST localhost:8000/api/Reservation/Confirmer/:Gmail<br>

<br>
//Ajouter Reservation <br>
###<br>

POST localhost:8000/api/Reservation<br>

Content-Type: application/json<br>
{<br>
        "NomUtilisateur": "Basidi",<br>
        "NumeroCar": "1234-B-1",<br>
        "villeDepare": "Safi",<br>
        "DateDepart": "2022-11-10",<br>
        "NumeroPlace": "4",<br>
        "hoursDepart": "12:12",<br>
        "Prix": "100",<br>
        "villeCollections": "Rabat"<br>

}<br>
<br>
// Aficher Reservation<br>
###<br>
GET localhost:8000/api/Reservation<br>
<br>
// SUprimer Reservation<br>
<br>
DELETE localhost:8000/api/Reservation/:_id <br>
<br>

// Moudifier Reservation    <br>
###<br>
PUT localhost:8000/api/Reservation/:_id<br>

<br>
// TYPES
<br>
###<br>
//Aficher Les Types De Car<br>
GET localhost:8000/api/Type<br>
<br>
// Ajouter les Types~<br>
###<br>
POST localhost:8000/api/Type<br>
Content-Type: application/json<br>
{<br>
     "Type_Name": "Huv1",<br>
   "Date_Creation": "2022-06-06",<br>
   "Prix": "10000",<br>
   "Detalles":["6384af9ff34a59c11555dff7","6384b034f34a59c11555dffa","6384b051f34a59c11555dffd"]<br>
   
}<br>
<br>


//DETALLES<br>

// Aficher les Detalles<br>
###<br>
GET localhost:8000/api/detalles<br>

<br
// Ajouter les Detalles<br>
###<br>

POST localhost:8000/api/detalles<br>

Content-Type: application/json<br>
{<br>
     "Keys": "2",<br>
   "Nom_Value": "Min",<br>
   "Value": "100"
   <br>
}<br>
