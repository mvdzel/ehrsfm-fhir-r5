For issues: https://github.com/HL7/ehrsfm-ig/issues/ or https://github.com/orgs/HL7/projects/8

## CI-Build

* [HL7 FHIR CI Build](https://build.fhir.org/ig/mvdzel/ehrsfm-fhir-r5/) 
* [Auto-IG build dashboard](https://fhir.github.io/auto-ig-builder/)

### Trigger FHIR auto-ig builder
```
curl -X POST https://us-central1-fhir-org-starter-project.cloudfunctions.net/ig-commit-trigger \
  -H "Content-type: application/json" \
  --data '{"ref": "refs/heads/master", "repository": {"full_name": "mvdzel/ehrsfm-fhir-r5"}}'
```

## Running the scipt and IG publisher

### Convert script

Convert current computable version of the FM (MAX file) to FHIR IG artifacts.
```
> docker run --name=ehrsfm-ig -it -v "$(pwd)":/app node:latest /bin/bash
@> (once) dpkg -i jdk-23_linux-x64_bin.deb
@> (once) apt update; apt install graphviz jekyll
@> (once) git config --global --add safe.directory /app
@> cd script
@> (once) npm install
@> node max2fhir.js
@> node max2plantuml.js > ../input/images-source/relationships.plantuml 
```
Copy grouping & resource json from output.txt into ehrs-ig.json

### Validate
```
(optional) @> curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o input-cache/validator_cli.jar
@> java -jar validator_cli.jar -version current input/resources -ig input/resources
```

### To build IG

Requires 1.8.13+ because of hl7.ehrs support.
```
(optional) @> curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o input-cache/publisher.jar
@> java -jar input-cache/publisher.jar -ig ig.ini
```

### publication-request.json

https://confluence.hl7.org/spaces/FHIR/pages/144970227/IG+Publication+Request+Documentation

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

## GIT Mirror
The HL7 repo is now setup to being a mirror of the work repo (@mvdzel). Use these commands to update the HL7 mirror.
```
@> git clone --mirror https://github.com/mvdzel/ehrsfm-fhir-r5.git
@> cd ehrsfm-fhir-r5.git
@> git fetch
@> git push --mirror https://github.com/HL7/ehrsfm-ig.git
```

--------------------
--------------------

## Solutions / workarounds

* How to create links from criterie to satisfiedby -> done in ig-template Requirements.liquid
  * Example: CP.1.4 add as last in first requirement
        "satisfiedBy": [ "https://hl7.org/fhir/condition.html" ]

## Tips: Convert Overview Table Content to MD

We need these steps to keep formatting in table.

* paste table in Google Sheet
* select all & CTRL-\
* paste in Libreoffice
* select all & CTRL-M (remove formatting)
* export to HTML
* put ''< table >'' in MD
* CTRL-H: ' height="\d+"'

## Using Pandoc to convert docx to markdown

https://pandoc.org/

```
> docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/core Glossary.docx -o chapter8.md
```

## Converting figures from powerpoint to svg

1. Saved using desktop powerpoint to svg files 
1. Installed Inkscape v0.92 
1. Open in Inkscape and ungroup and remove big background pane
1. `> inkscape --verb=FitCanvasToDrawing --verb=FileSave --verb=FileQuit input.svg`
