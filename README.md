Output snapshot: https://vdzel.home.xs4all.nl/ehrsfm-fhir-r5/

## TODO
* Define extension to denote EHRS Requirements type, Functional Model, Funcional Profile, Header, Function, ...
* Get FM metadata from the .mif file
* How to create links [[TI.1.5]] from criteria to Functions?
* IG Template adjustments (.fhir/packages/fhir.base.template#current)
* Sorting the artifact index based on name -> TODO: based on FM section id and then alfa (ig/template/scripts/createArtifactSummary.xslt)

## Running the scipt and IG publisher

# Convert script
```
> docker run --name=ehrsfm-fhir-r5 -it -v "$(pwd)":/app node:lts-buster /bin/bash
@> npm init
@> node max2fhir.js
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
