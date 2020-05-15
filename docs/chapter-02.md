# II. MONGODB TELEPÍTÉSE ÉS ALAPVETŐ ÜZEMELTETÉSI FELADATAI

## Működési módok
Alapvetően felhőben vagy saját szerveren lehet futtatni. A kettő közötti különbség egyértelmű, a legtöbb felhő szolgáltató készen kínál beállított instanc -okat mongoDB -vel.

## Telepítés
Lehet a Docker conatiner kezelővel is futtatni:  
[Docker](https://www.docker.com/get-started)  
- `docker run --name some-mongo -d mongo` futtatás
- `docker exec -it some-mongo bash` parancssor a szerveren
  
[Telepítés Windowra](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.6-signed.msi/download)  

## MongoDB indítása
- `cd C:\\Program Files\\MongoDB\\Server\\4.2\\bin`
- `.\\mongod.exe` szerver indítása, tipikus hiba, ha nincs `C:\\data\\db` mappa.
- `mongod --dbpath="E:\\data\\db"` ezzel a paranccsal más data directory is 
megadható.

## Opcionális komponensek
### MongoDB shell: megismerés, belépés
- `.\\mongo.exe` shell indítása
- [Gyors referencia](https://docs.mongodb.com/manual/reference/mongo-shell/)

### MongoDB Compass
- A telepítőcsomag része.
- `mongodb://127.0.0.1:27017` kapcsolódás a default szerverhez

### Külső eszközök 
- [Mongo Management Studio](http://mms.litixsoft.de/index.php?lang=en)
- `mongodb://127.0.0.1:27017` kapcsolódás a default szerverhez
- [MongoVUE](https://mongovue.software.informer.com/) nem stabil és fizetős

### Felhasználók adminisztrációja
- [Dokumentáció](https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/)
- 

- Jogosultságok
- Mentések és visszatöltések