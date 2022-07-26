console.log("Hello Sam");

const openssl = require("openssl-nodejs");
openssl("c:\\Program Files\\OpenSSL-Win64\\bin\\openssl req -config csr.cnf -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout key.key -out certificate.crt");
