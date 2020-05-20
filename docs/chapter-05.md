# VI. MONGODB AGGREGÁLÁSOK

- count `db.test.find({name: {$regex: /dump/}}).count()`
- distinct `db.test.distinct("name")`
- group `db.test.aggregate([{ $group: {_id: "$salary", total: {$sum: "$salary"}} }    ])`