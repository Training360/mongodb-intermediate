# VI. MONGODB AGGREGÁLÁSOK

- count `db.test.find({name: {$regex: /dump/}}).count()`
- distinct `db.test.distinct("name")`
- group / sum `db.test.aggregate([{ $group: {_id: "$salary", total: {$sum: "$salary"}} }    ])`
- match `db.test.aggregate([ { $match: {salary: {$gt: 900000}} } ])`
- sort `db.test.aggregate([ { $match: {salary: {$gt: 900000}} }, { $sort: {salary: -1 } } ])`
- összetett példa `db.test.aggregate([ { $match: {salary: {$gt: 900000}} }, {$group: {_id: "$salary", total: { $sum: "$salary" }}} ])`

# VII. MONGODB INDEXEK
## Teljesítmény mérése, monitorozás
- `mongostat -i` interaktív módban
- `mongotop`
- `db.stats()`
- `db.serverStatus()`
- `db.runCommand({ collStats: "test", scale: 1024 })` kollekció statisztika
- Lekérdezési tervek (explain)
- Index típusok (default _id, single field, compound, multikey, text stb.)
- Egyedi indexek
- Indexek létrehozása (createIndex, ensureIndex)
- Indexek további menedzsmentje (dropIndex, getIndexes stb.)
