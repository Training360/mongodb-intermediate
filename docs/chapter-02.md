# II. MONGODB TELEPÍTÉSE ÉS ALAPVETŐ ÜZEMELTETÉSI FELADATAI

## Működési módok
Alapvetően felhőben vagy saját szerveren lehet futtatni. A kettő közötti különbség egyértelmű, a legtöbb felhő szolgáltató készen kínál beállított instanc -okat mongoDB -vel.

## Telepítés
Lehet a Docker conatiner kezelővel is futtatni:  
[Docker](https://www.docker.com/get-started)  
- `docker run --name some-mongo -d mongo` futtatás
- `docker exec -it some-mongo bash` parancssor a szerveren
  
VAGY  
- `docker pull ubuntu:bionic` 18.04 letöltése
- `docker run --name u01 -d ubuntu:bionic` futtatása
- [Ubuntu + MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
- `docker run -v /host/directory:/container/directory --name u01 -d ubuntu:bionic` futtatás felcsatolt könyvtárral
  
VAGY  
  
[Telepítés Windowra](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.6-signed.msi/download)  

## Docker mentés visszaállítás
- `docker save ubuntu:bionic > mongo.tar.gz` mentés  
- `docker load -i .\mongo.tar.gz` visszaállítás
- `docker commit ab8915ac4a59 mongo/live` új image meglévő alapján
- `docker run -i -p 27018:27017 -t mongo/live` új image indítása

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

## Felhasználók adminisztrációja
- [Dokumentáció](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
- `.\\mongod.exe --dbpath="<path>"` először indítsuk el az adatbáziskezelőt 
jogosultságkezelés nélkül
- `.\\mongo.exe` csatlakozzunk hozzá a shell -el
- `use admin` váltsunk az admin adatbázisra
```shell
db.createUser(
  {
    user: "mongoAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```
ezzel a paranccsal létre tudunk hozni egy adminisztrátor jogosultsággal 
rendelkezdő felhasználót.  
- `.\\mongod.exe --auth --dbpath="<path>"` az --auth kapcsolóval 
már jogosultságkezeléssel fut a szerverünk.
- `mongo  --authenticationDatabase "admin" -u "mongoAdmin" -p` ezzel pedig 
elindítjuk a shellt és kérni fogja a jelszót a mongoAdmin felhasználóhoz.

## Jogosultságok
[Role](https://docs.mongodb.com/manual/reference/built-in-roles/)  
Amikor már rendelkezünk egy admin felhasználóval, akkor létre tudunk hozni új 
felhasználókat az egyes adatbázisokhoz és meg tudjuk határozni a 
jogosultságaikat.  
```shell
use nisz
db.createUser(
  {
    user: "nisz",
    pwd:  passwordPrompt(),   // or cleartext password
    roles: [ { role: "readWrite", db: "nisz" }]
  }
)
```
Ezzel létrehoztunk egy új felhasználót nisz néven, akinek jogosultsága van 
írni és olvasni a nisz adatbázist. A role tömbben igény szerint több 
adatbázisra vonatkozó beállítást is megadhatunk.  
- `mongo  --authenticationDatabase "nisz" -u "nisz" -p` itt jelszóval be tud 
lépeni az új felhasználó. Vigyázzunk, az authentikációs adatbázisnak annak 
kell lennie, amelyikben létrehoztuk az új felhasználót. 
He megpróbálunk a nisz adatbázison kívül bármilyen műveletet, hibát fogunk 
kapni, mivel azokhoz az adatbázisokhoz nem lesz hozzáférésünk.

## Listázás tiltása

## Mentések és visszatöltések
A mentéshez olyan felhasználóra van szükség, aki tudja olvasni az összes 
adatbázist. Ehhez lehet, hogy frissíteni kell a felhasználókat:  
- `mongodump --host=mongodb1.example.net --port=3017 --username=user --password="pass" --out=/opt/backup/mongodump-2013-10-24` ez egy általános kód  
- `mongodump --out "E:\dump\ --authenticationDatabase "admin" -u "mongoAdmin" -p "admin"` a mi esetünkben pedig így néz ki  
  
```shell
db.updateUser(
   "<username>",
    {
        roles : [
        { role: "<role>", db: "<database>" } | "<role>" }
        ]
    }
)
```  
- Lekérdezés eredményének exportálása fájlba: 
```bash
mongo localhost:27017/nisz --quiet --eval 'db.test.find({}, {_id:0}).forEach(printjson);' > test-eval.json
```
- Sortöréssel elválasztott json állomány esetén: 
```bash
mongoimport --type json --db nisz --collection test --fil
e test-eval.json --mode merge
```
- Exportálás csv állományba: 
```bash
mongoexport --db nisz --collection test --type=csv -o test.csv --fields=name,salary 
```

Előfordulhat, hogy bizonyos adatbázisokhoz a mentést végző felhasználónak nincs 
jogosultsága olvasásra. Ekkor az updateUser -el ezt meg tudjuk adni.  

### Visszatöltés
[Dokumentáció a mongorestore eszközhöz](https://docs.mongodb.com/manual/reference/program/mongorestore/#bin.mongorestore)  
A visszaállítást mongoResotre eszközzel tudjuk elvégezni.  
`.\\mongorestore.exe E:\\dump\\nisz\\orders.bson --authenticationDatabase="admin" -u "mongoAdmin" -p "admin"` ezzel a paranccsal például a nisz adatbázist állítjuk 
vissza.

https://docs.mongodb.com/manual/reference/program/mongorestore/#bin.mongorestore

### Import json állományból
`mongoimport --jsonArray --db nisz --collection coutries --file countrydata.json`