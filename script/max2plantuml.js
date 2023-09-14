const fs = require('fs'),
    xml2js = require('xml2js');
var xml = new xml2js.Parser();

var maxroot;
xml.parseString(fs.readFileSync('ehrs_fm_r2_1-2022APR.max'), function (err, data) {
    maxroot = data;
});

var objects = { };

console.log(`@startuml
skinparam nodesep 10
skinparam rectangle {
    backgroundColor<<OV>> 99ccff
    backgroundColor<<CP>> 99ff99
    backgroundColor<<CPS>> d0ebbf
    backgroundColor<<AS>> ffe389
    backgroundColor<<POP>> cdabe7
    backgroundColor<<RI>> e2c4a6
    backgroundColor<<TI>> ffa3a3
}`);

maxroot.model.relationships.forEach(relationships => {
    var relationships = relationships.relationship.filter(r => r.stereotype == "ConsequenceLink" || r.stereotype == "SeeAlso");
    relationships.forEach(relationship => {
        var sourceId = relationship.sourceId[0];
        if (sourceId != 6) {
            var destId = relationship.destId[0];
            if (!objects[sourceId]) {
                var sourceObj = maxroot.model.objects[0].object.find(o => o.id == sourceId);
                var name = sourceObj.alias[0] || sourceObj.name[0];
                var st = name.substring (0, name.indexOf('.'));
                var link = name.indexOf('#')==-1?name:name.substring(0, name.indexOf('#'));
                objects[sourceId] = sourceObj;
                console.log("rectangle", `"[[Requirements-EHRSFMR2.1-${link}.html ${name}]]"`, `<<${st}>>`, "as", sourceId);
            }
            if (!objects[destId]) {
                var destObj = maxroot.model.objects[0].object.find(o => o.id == destId);
                var name = destObj.alias[0] || destObj.name[0];
                var st = name.substring (0, name.indexOf('.'));
                var link = name.indexOf('#')==-1?name:name.substring(0, name.indexOf('#'));
                objects[destId] = destObj;
                console.log("rectangle", `"[[Requirements-EHRSFMR2.1-${link}.html ${name}]]"`, `<<${st}>>`, "as", destId);
            }
            if (relationship.stereotype == "ConsequenceLink") {
                console.log(sourceId, "-->", destId);
            }
            else if (relationship.stereotype == "SeeAlso") {
                console.log(sourceId, "-[dotted]->", destId);
            }
        }
    });
});

console.log("@enduml");