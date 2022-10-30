FROM cypress/included:7.6.0

COPY ./cypress.json /cypress.json

COPY ./cypress/integration/test.spec.js /cypress/integration/test.spec.js

CMD cypress run --config video=false --spec /cypress/integration/test.spec.js