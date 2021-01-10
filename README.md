we build a simple API using ExpressJs and MongoDb with CRUD functions for Contacts.

https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d

Test if it works by visiting http://localhost:8080/api

Let’s try with the browser. Visit http://localhost:8080/api/contacts


curl -i --request GET localhost:8080/api

// router.route('/contacts') \
//    .get(contactController.index) \
//    .post(contactController.new); \

curl -i --request GET localhost:8080/api/contacts
curl --location --request POST 'localhost:8080/api/contacts' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Roberto Perez' \
--data-urlencode 'email=Roberto@yahoo.es' \
--data-urlencode 'phone=670988773' \
--data-urlencode 'gender=Male'

// router.route('/contacts/:contact_id') \
//    .get(contactController.view) \
//    .patch(contactController.update) \
//    .put(contactController.update) \
//    .delete(contactController.delete); \

curl -i --request GET localhost:8080/api/contacts/5ffae71c0a41272aed7c87e3
curl -i --request DELETE localhost:8080/api/contacts/5ffae71c0a41272aed7c87e3

curl -i --request PUT 'localhost:8080/api/contacts/5ffa09e07c2dd81eb4666724' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Roberto Perez' \
--data-urlencode 'email=roberto@yahoo.es' \
--data-urlencode 'phone=670988773' \
--data-urlencode 'gender=Male'

curl -i --request PATCH 'localhost:8080/api/contacts/5ffa09e07c2dd81eb4666724' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Roberto Perez' \
--data-urlencode 'email=roberto@yahoo.es' \
--data-urlencode 'phone=670988773' \
--data-urlencode 'gender=Male'