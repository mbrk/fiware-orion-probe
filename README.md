# fiware-orion-probe

A mini explorer for entities stored in FiWare Orion Context Explorer

# Installation

    npm install
    
Copy /config/config.sample.js to /config/config.js. and adjust settings. 
    
# Usage

    node bin/www
    
To specify a port (default is 3000)

    PORT=3333 node bin/www
    
Open http://localhost:<PORT> 

    '/' - list all entities in instance of context broker
    '/entity/<ID> - query specified entity
    '/type/<TYPE> - query all entities with specified type
    '/delete/<ID> - delete specified entity
    
    
# Versions

*0.1.0 first go
