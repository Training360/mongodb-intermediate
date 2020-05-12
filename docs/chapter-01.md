# I. SQL ÉS NOSQL ADATBÁZISOK ÖSSZEHASONLÍTÁSA

## NoSQL adatbázisok típusai (key value, document store, wide column store, graph stb.)

** Key-value stores ** ezek a legegyszerűbbek. Mindig, amikor az adatbázis eltárol egy adatot, azt egy egyszerű kulcs => érték hozzárendeléssel teszi. Például:  
- [Riak](https://riak.com/)
- [Voldemort](https://www.project-voldemort.com/voldemort/)
- [Redis](https://redis.io/) például chache -elésre kiváló  
  
** Document databases ** a kulcsokhoz komplex adatszerkezetek tartoznak, ezek a dokumentumok. A dokumentumok sokféle különböző típusú értéket, vagy beágyazott dokumentumokat, tömböket is tartalmazhatnak. Ilyen a mongoDB is.  
- [mongoDB](https://www.mongodb.com)  
  
** Wide-column stores ** az összetartozó adatokat oszlopokban tárolja, nem sorokban, így a nagy adatmennyiség lekérdezése lesz gyors. Ilyen a Cassandra és a HBase:  
- [CASSANDRA](https://cassandra.apache.org/)  
- [HBASE](https://hbase.apache.org/)
  
** Graph databases ** a hálózatokról tárolnak infromációt, mint például a social networks -ök:  
- [Neo4J](https://neo4j.com/)
- [HyperGraphDB](http://www.hypergraphdb.org/)

## NoSQL adatbázisok jellemzői és felhasználási területük
Sokféle megvalósítás van, ahogy az előzőekben átnéztük. A NoSQL nem azt jelenti, hogy nem SQL technológiát használ, mert van közöttük néhány ami igen. Pontosabb megnevezés lenne a __post/non-relation__, mert ebben viszont általában eltérnek az SQL -től. Tehát alapvetően az adattárolás szerkezete más.
A legtöbbre jellemző:  
- nem-relációs adatmodell,
- elosztott működés,
- nyílt forráskód,
- horizontális skálázhatóság
