# Foundation Test 
This is the public repo for Foundation test. Following up clearness and explanatory practices I implement on a daily basis, please see below a short abstraction regarding the project structure.

##This project is based on Angular 2
The decision behind using Angular 2 for this test was based on the fact that as a not-so-new technology, Angular 2, which stills under development, has changed a lot from version 1.*. I decided then to give it try this time, and to be honest this is perhaps one of the best frameworks out there.

###Considerations
- Angular 2 documentation is lacking
- Support for Protractor continues under development
- The core has changed

##Project architecture
The project is composed of hierachical classes (components, directives, pipes and services) that make it possible to achieve the main objectives. See the project structure in a graphical manner below:
![alt tag](https://raw.githubusercontent.com/manuelro/Foundation/master/assets/graph.png)

##Running tests
Based on [Angular CLI](https://github.com/angular/angular-cli) you can run unit tests and e2e tests using the following commands:
###Starting the server
`$ ng serve`
###Unit tests
`$ ng test`
###e2e tests
`$ ng e2e`

##References
See [Angular CLI Official Repo](https://github.com/angular/angular-cli). Visit [Angular.IO Project](https://angular.io/) for further details about the framework.
