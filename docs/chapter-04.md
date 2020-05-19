## IV. MONGODB ADATSZERKEZETEK DEFINIÁLÁSA



## insert
[Doc](https://docs.mongodb.com/manual/reference/method/db.collection.insert/)  

## find
[Doc](https://docs.mongodb.com/manual/reference/method/db.collection.find/)  
Teljes dokumentum keresése reguláris kifejezéssel:  
`db.myColl.aggregate( [ { $match: { category: "cafe" } } ] )`

## update
[Doc](https://docs.mongodb.com/manual/reference/method/db.collection.update/)  

## delete (remove)
[Doc](https://docs.mongodb.com/manual/reference/method/db.collection.remove/)  

## save
Az alapján, hogy mit adunk meg a document paraméterben, frissíti a meglévő documentet, vagy újat hoz létre.  
[Doc](https://docs.mongodb.com/manual/reference/method/db.collection.save/)  

## Feladat
db.myColl.aggregate( [ { $match: { category: "cafe" } } ] )


## tranzakciók
[Részletes útmutató](https://www.percona.com/blog/2018/06/25/mongodb-transactions-your-very-first-transaction-with-mongodb-4-0/)  