

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
- <!-- TABLE OF CONTENTS -->
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
        <a href="#API">Les API</a></li></ol>
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




// USER
// login
POST http://localhost:8000/api/users/login
Content-Type: application/json

{
    "email": "user8@gmail.com",
    "password": "123"
}


###
// register
POST http://localhost:8000/api/users/register
Content-Type: application/json

{
    "fullname" : "user",
    "email" : "user11@gmail.com",
    "password" : "123",
    "address" : "adress1",
    "city" : "city1",
    "state" : "state1",
    "zip" : 1 ,
    "country" : "country1"
}


// ADMIN
###
POST http://localhost:8000/api/admin/register
Content-Type: application/json

{
    "email" : "admin@gmail.com",
    "password" : "123",
}

###
POST http://localhost:8000/api/admin/login
Content-Type: application/json

{
    "email" : "admin@gmail.com",
    "password" : "123",
}



// CAR 
###
GET localhost:8000/api/cars


// Ajouter les car
###
POST localhost:8000/api/cars
Content-Type: application/json
{
     "Name": "Nmax",
   "Type": "6384d6cdd6a1438f7ac78411"
   
}

// RESERVATION
###
//Confirmtion reservation sur email
POST localhost:8000/api/Reservation/Confirmer/:Gmail


//Ajouter Reservation 
###

POST localhost:8000/api/Reservation

Content-Type: application/json
{
        "NomUtilisateur": "Basidi",
        "NumeroCar": "1234-B-1",
        "villeDepare": "Safi",
        "DateDepart": "2022-11-10",
        "NumeroPlace": "4",
        "hoursDepart": "12:12",
        "Prix": "100",
        "villeCollections": "Rabat"

}

// Aficher Reservation

GET localhost:8000/api/Reservation

// SUprimer Reservation

DELETE localhost:8000/api/Reservation/:_id 


// Moudifier Reservation    
###
PUT localhost:8000/api/Reservation/:_id


// TYPES

###
//Aficher Les Types De Car
GET localhost:8000/api/Type

// Ajouter les Types~
###
POST localhost:8000/api/Type
Content-Type: application/json
{
     "Type_Name": "Huv1",
   "Date_Creation": "2022-06-06",
   "Prix": "10000",
   "Detalles":["6384af9ff34a59c11555dff7","6384b034f34a59c11555dffa","6384b051f34a59c11555dffd"]
   
}



//DETALLES

// Aficher les Detalles
###
GET localhost:8000/api/detalles


// Ajouter les Detalles
###

POST localhost:8000/api/detalles

Content-Type: application/json
{
     "Keys": "2",
   "Nom_Value": "Min",
   "Value": "100"
   
}
