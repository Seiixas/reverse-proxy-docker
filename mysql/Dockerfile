FROM --platform=linux/x86_64 mysql:5.7

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE node

COPY ./seed.sql /docker-entrypoint-initdb.d/