# MongoDB image készítése Dockerfile segítségével

## Build paranccsal hozzuk létre az új image -et
1. Adjuk ki a parancsot ebben a mappában:  
`docker build -t ubuntu/mongo9 .`  
Az "ubuntu/mongo9" lesz az új image neve, ez átírható.  

2. Indítsuk el a linuxot az image alapján:  
`docker run -d --rm -p 27017:27017 -t ubuntu/mongo9`  
A -d kapcsoló hatására a háttérben fog elindulni.  
Ha az első portszámot átírjuk, akkor a gazdagépen azon a porton 
lesz elérhető a MongoDB.  
  
[Optional] Be is jelentkezhetünk a szerverre:  
`docker ps` nézzük meg, mi lett a container neve  
`docker exec -it <name> bash` belépés bash -be  
