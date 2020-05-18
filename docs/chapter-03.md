# III. MONGODB ADATBÁZIS FELÉPÍTÉSE
## Adatbázis fogalma
> A MongoDB nyílt forráskódú dokumentumorientált adatbázis szoftver, amelyet a MongoDB inc. (korábbi nevén 10gen) fejleszt. A NoSQL adatbázisszerverek közé tartozik. A dokumentumokat JSON-szerű formátumban tárolja (BSON).
  
## Rendszer adatbázisok
[Dokumentáció](https://docs.mongodb.com/manual/reference/system-collections/)  
- `admin.system.roles` itt a rendszergazdák által létrehozott egyéni role -ok tárolódnak.
- `admin.system.users` a felhasználók hitelesítési adatait és a hozzájuk rendelt role -okat tárolja.
- admin.system.version

## Adatbázisok fizikai felépítése, növekedése

- Collection
- Document
- Elemek azonosítása
- Mező adattaípusok
- BSON, JSON alapok