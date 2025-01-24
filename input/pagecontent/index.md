### This Project

Within HL7, since 2020, the Common H7 Toolset initiative to develop the same underlying publication process technology stack across all HL7 standards has been underway. The intent is to provide the same look and feel, to leverage inherent [validation and versioning](validation.html), to ease annual updates, and to avoid the unwieldy word and pdf publication process. This publication of EHR-S FM R2.1 is the realization of that intent for the [EHR-S FM product family](https://www.hl7.org/implement/standards/product_section.cfm?section=11).

This is a EHR-S FM specification that uses FHIR R5 Requirements resource to define its functional model sections, headers, functions and criteria. It references FHIR resources for data requirements and is based on FHIR R5 but not in a way that FHIR Implementation Guides would be based by profiling FHIR resources. It is important and relevant to declare the version of FHIR structures that are being used for toolsmiths and others using those structures.

<div class="note-to-balloters">
<b>Targetting May 2025 ballot</b>
This is the first publication of a EHR-S Functional Model using the Common HL7 Toolset (FHIR IG Tooling).
</div>

### Introduction

Start here: [Introduction section](chapter0.html).

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

### EHR WG CoChairs and Publishing Facilitators

| Role  | Name | Organization | Contact |
| --- | --- | --- | --- |
| **Co-Chair** | Gary Dickinson | EHR Standards Consulting | gary.dickinson@ehr-standards.com |
| **Co-Chair** | Mark Janczewski MD, MPH | Medical Networks, LLC | mark.janczewski@gmail.com |
| **Co-Chair** | Michael Brody DPM | Registry Clearinghouse | mbrody@registryclearinghouse.net |
| **Co-Chair** | John Ritter FHL7, MSc |  | johnritter1@verizon.net |
| **Co-Chair** | Lincoln Weed |  | ldweed424@gmail.com |
| **Co-Chair, Publishing Facilitator** | Michael van der Zel BSc | UMCG | m.van.der.zel@umcg.nl |
