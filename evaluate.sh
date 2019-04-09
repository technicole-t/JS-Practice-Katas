#!/bin/bash

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -uo pipefail

main() {
    (
        rm -rf node_modules
        npm i -D mocha@3.5.3 mochawesome@^1.5.5 chai
        mocha --recursive section-* --reporter mochawesome
        open ./mochawesome-reports/mochawesome.html
    )
}

main 
