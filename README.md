Output snapshot: https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/

## TODO
* Define Profiles for EHRS types include constraints, Functional Model, Funcional Profile, Header, Function, ... 
  * Extension needed for "Dependent"
  * use Extension for statement -> short
* Get FM metadata from the .mif file + authors

## Solutions
* How to create links [[TI.1.5]] from criteria to Functions? -> done in template Requirements.liquid

## Running the scipt and IG publisher

# Convert script
```
> docker run --name=ehrsfm-fhir-r5 -it -v "$(pwd)":/app node:lts-buster /bin/bash
@> npm init
@> node max2fhir.js
@> node max2plantuml.js > ../input/images-source/relationships.plantuml 
@> java -jar { path-to-publisher }/org.hl7.fhir.publisher.jar -ig ig.ini -tx n/a
```

# Validate
```
(optional) > curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o validator_cli.jar
> java -jar ../../latest-ig-publisher/validator_cli.jar -version current input/resources -ig input/resources
```

# To build IG
```
(optional)> curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o publisher.jar
> java -jar ../../latest-ig-publisher/publisher.jar -ig ig.ini
```

--------------------
For debugging xslt:
``` <!-- XXX --> <xsl:message><xsl:copy-of select="."/></xsl:message> ```

--------------------
http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html

No narrative removes rendering of Requirement.statements. So don't do this.
        {
          "code" : {
            "system": "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
            "code" : "no-narrative"
          },
          "value": "Requirements/*"
        },

