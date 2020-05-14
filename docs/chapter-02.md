# II. MONGODB TELEPÍTÉSE ÉS ALAPVETŐ ÜZEMELTETÉSI FELADATAI

## Működési módok
Alapvetően felhőben vagy saját szerveren lehet futtatni. A kettő közötti különbség egyértelmű, a legtöbb felhő szolgáltató készen kínál beállított instanc -okat mongoDB -vel.

## Telepítés
Lehet a Docker conatiner kezelővel is futtatni:  
[Docker](https://www.docker.com/get-started)  
- `docker run --name some-mongo -d mongo` futtatás
- `docker exec -it some-mongo bash` parancssor a szerveren
  
[Telepítés Windowra](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.6-signed.msi/download)  


## Opcionális komponensek
- MongoDB shell: megismerés, belépés.
- Külső eszközök (Mongo Management Studio, MongoVUE)
- Felhasználók adminisztrációja
- Jogosultságok
- Mentések és visszatöltések