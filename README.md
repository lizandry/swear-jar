# swear jar

### Setup Instructions

- `createdb swear-jar`
- `psql swear-jar < swear-jar.sql`
- `cd server`
- `npm install`
- `mkcert create-ca `
- `mkcert create-cert --key localhost-key.pem --cert localhost.pem`
- `npm start`
- `..`
- `cd client-app`
- `npm install`
- `npm start`
* NOTE: you will probably still have to bypass the https warning in yr browser

[detailed planning doc here](https://docs.google.com/document/d/146n-g6z_OT0pFS0uHEFkSqujsksm9uoES8COhlVQ4wE/edit?usp=sharing)
[trello here](https://trello.com/b/HizQsYP8/swear-jar)