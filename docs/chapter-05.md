# VI. MONGODB AGGREGÁLÁSOK

- count `db.test.find({name: {$regex: /dump/}}).count()`
- distinct `db.test.distinct("name")`
- group / sum `db.test.aggregate([{ $group: {_id: "$salary", total: {$sum: "$salary"}} }    ])`
- match `db.test.aggregate([ { $match: {salary: {$gt: 900000}} } ])`
- sort `db.test.aggregate([ { $match: {salary: {$gt: 900000}} }, { $sort: {salary: -1 } } ])`