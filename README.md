# B.A.D.A.S.S
### (Breach Alert Defense And Security System)

A web portal for Root Access Hackerspace's security system.

Features will include arming/disarming the system, activity logging, and camera access via Wyze HLS streams

To run, simply clone and run

```
npm ci
docker compose up
```

once running, deploy the migrations
```
docker exec -it $(docker compose ps node --quiet) npx prisma migrate deploy
```

And you should be good to go
