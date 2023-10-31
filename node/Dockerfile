FROM node:14

WORKDIR /app

RUN apt update && \
  apt install netcat -y && \
  wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
  chmod +x /usr/bin/wait-for