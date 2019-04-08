#!/bin/bash

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -uo pipefail

main() {
    (
        npm i
        mocha --recursive section-* --reporter mochawesome
        open ./mochawesome-reports/mochawesome.html
    )
}

main ""
