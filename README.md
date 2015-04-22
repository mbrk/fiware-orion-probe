# fiware-orion-probe

A mini explorer for entities stored in FiWare Orion Context Explorer

# Installation

    npm install
    
Copy /config/config.sample.js to /config/config.js. and adjust settings. 
    
# Usage

    node bin/www
    
Open http://localhost:3000 (if not specified otherwise in ENV)

    '/' - list all entities in instance of context broker
    '/entity/<ID> - query specified entity
    '/type/<TYPE> - query all entities with specified type
