
### Function List Component Descriptions

The Function List (see [artifacts](artifacts.html)) includes the following components:

| FM Element | Requirements element | Description |
| --- | --- | --- |
| Function ID # <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> | [id](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.id) | This is the unique identifier of a function in the Function List (e.g. CP.1.1) and should be used to uniquely identify the function when referencing functions. The Function ID also serves to identify the section within which the function exists (CP = Care Provision Section) and the hierarchy or relationship between functions (CP.1.1 is a sibling to CP.1.2, parent of CP.1.1.1 and child of CP.1). In many cases the parent is fully expressed by the children. |
| Function Type <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a> | [meta.profile](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.meta.profile) | Indication of the line item as being a header (H) or function (F) or conformance criteria. |
| Header / Function Name <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> | [title](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.title)  | This is the name of the Function and whilst expected to be unique within the Function List; it is not recommended to be used to identify the function without being accompanied by the Function ID.<br/>Example: Manage Medication List |
| Function Statement <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> | [description](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.description) | This is a brief statement of the purpose of this function. Whist not restricted to the use of structured language that is used in the Conformance Criteria (see below); the Statement should clearly identify the purpose and scope of the function.<br/>Example: Create and maintain patient-specific medication lists.|
| Description <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a> | [purpose](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.purpose) | This is a more detailed description of the function, including examples if needed.<br/>Example: Medication  lists are managed over time, whether over the course of a visit or stay, or the lifetime of a patient. All pertinent dates, including medication start, modification, and end dates are stored. The entire medication history for any medication, including alternative supplements and herbal medications, is viewable. Medication lists are not limited to medication orders recorded by providers, but may include, for example, pharmacy dispense/supply records, patient-reported medications and additional information such as age specific dosage. |
| Conformance Criteria <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> | [statement.requirement](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.statement.requirement)  | Each function in the Function List includes one or more Conformance Criteria. A Conformance Criteria, which exists as normative language in this standard, defines the requirements for conforming to the function. The language used to express a conformance criterion is highly structured with standardized components with set meanings. The structured language used to define conformance clauses in the Function List are defined in the Glossary (Chapter 4).
| R1.1 Reference <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a> | [statement.derivedFrom](https://hl7.org/fhir/R5/requirements-definitions.html#Requirements.statement.derivedFrom) | Reference to the previous version of the Functional Model is included to support transition from one version to the next. The first 2 digits indicate the source document; FM = Functional Model, LM = Lifecycle Model. The remainder of the reference is to the function and, if applicable, conformance criteria.
| Change Indicator | *derive or extension?* | The change indicator shows the change from previous versions. This will be valued as follows: <br/>C - Changed<br/>D - Deleted<br/>N - New<br/>NC - No Change |
| Row # | *extension?* | A unique number for the row within the section. |

### Relationships in this FM

* solid lines are Consequence Links
* dotted lines are See Also relationships

<div>
{% include relationships.svg %}
</div>

### Dependencies

{% include dependency-table.xhtml %}

### Authors and Contributors

| Role  | Name | Organization | Contact |
| --- | --- | --- | --- |
| **Co-Chair, EHR Work Group** | Gary Dickinson | CentriHealth/UnitedHealth Group | gary.dickinson@ehr-standards.com |
| **Co-Chair, EHR Work Group** | Mark Janczewski MD MPH | Medical Networks, LLC | mark.janczewski@verizon.net |
| **Co-Chair, EHR Work Group** | Michael Brody DPM |  | mbrody@cmeonline.com |
| **Co-Chair, EHR Work Group** | John Ritter |  | johnritter1@verizon.net |
| **Co-Chair, EHR Work Group** | Stephen Hufnagel, PhD | Registry Clearinghouse | shufnagel@registryclearinghouse.net |
| **Co-Chair, EHR Work Group** | Feliciano Yu MD, MS | University of Arkansas Medical Sciences | Pele.Yu@archildrens.org |
| **Publishing Facilitator** | Anneke Goossen, MScN | Results4Care | annekegoossen@results4care.nl |
| **Publishing Facilitator** | Michael van der Zel | UMCG | m.van.der.zel@umcg.nl |
