# Open Theater Trigger Server Demo

A minimal demo http server setup for the <a href="https://gitlab.com/open-theater/open-theater-api">Open Theater API</a>'s Trigger API.

Receives trigger payloads from an Open Theater compatible Cueing Software and/or the adapter app (**todo: link repo!**) and broadcasts those to all clients, who registered at the trigger server's endpoint

This is meant as a demo implementation to get started on your own Open Theater trigger server.

Check out the other Open Theater repositories linked <a href="https://gitlab.com/open-theater/open-theater-api">in the Open Theater API repo</a> to get started.

## Install

1. clone this repository:
```bash
git clone https://gitlab.com/open-theater/open-theater-trigger-server-demo .;

cd open-theater-trigger-server-demo;
```

2. install all dependencies
```bash
npm install
```

## Start
```bash
npm run start
```


## Disclaimer
This is for testing and further development only! 

For simplicities sake, its just operating with HTTP and does not include encryption.

Feel free to fork and add config files, TLS support etc.

Or use nginx or another webserver as reverse proxy

It also only supports one Open Theater project and it's channels and therefore exposes only one trigger endpoint.
For multiproject support, you can extend with routes and seperate socket.io instances.
