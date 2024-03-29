## TODO

* LOW/script Get FM metadata from the .mif file + authors
* Overview Chapter8 content
* See https://github.com/mvdzel/ehrsfm-fhir-r5/issues/

## Running the scipt and IG publisher

### Convert script

Convert current computable version of the FM (MAX file) to FHIR IG artifacts.
```
> docker run --name=ehrsfm-fhir-r5 -it -v "$(pwd)":/app node:lts-buster /bin/bash
@> cd script
@> (once) dpkg -i jdk-21_linux-x64_bin.deb
@> (once) apt update; apt install graphviz jekyll
@> (once) npm instal
@> node max2fhir.js
@> node max2plantuml.js > ../input/images-source/relationships.plantuml 
```

### Validate
```
(optional) > curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o validator_cli.jar
> java -jar validator_cli.jar -version current input/resources -ig input/resources
```

### To build IG
```
(optional)> curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o publisher.jar
> java -jar publisher.jar -ig ig.ini
```

### Debugging xslt

```<!-- XXX --> <xsl:message><xsl:copy-of select="."/></xsl:message>```

### IG Parameters

http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html

No narrative removes rendering of Requirement.statements. So don't use this.
```
  {
    "code" : {
      "system": "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
      "code" : "no-narrative"
    },
    "value": "Requirements/*"
  },
```

## SFTP Publish

```
> sftp user@sftp
@> cd WWW/ehrsfm-fhir-r5
@> put -r *
```

--------------------
--------------------

## Solutions / workarounds

* How to create links [[TI.1.5]] from criteria to Functions? -> done in ig-template _append.fragment-footer.html javascript include
* How to create links from criterie to satisfiedby -> done in ig-template Requirements.liquid
  * Example: CP.1.4 add as last in first requirement
        "satisfiedBy": [ "https://hl7.org/fhir/condition.html" ]

### Tips: Convert Overview Table Content to MD

We need these steps to keep formatting in table.

* paste table in Google Sheet
* select all & CTRL-\
* paste in Libreoffice
* select all & CTRL-M (remove formatting)
* export to HTML
* put ''< table >'' in MD
* CTRL-H: ' height="\d+"'