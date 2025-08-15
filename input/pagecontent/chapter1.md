The HL7 EHR System Functional Model provides a reference list of functions that may be present in an Electronic
Health Record System (EHR-S). The function list is described from a user perspective with the intent to enable
consistent expression of system functionality. This EHR-S Functional Model, through the creation of Functional
Profiles for care settings, realms, services and specialties, enables a standardized description and common
understanding of functions sought or available in a given setting (e.g., intensive care, cardiology, office practice
in one country or primary care in another country).

### EHR-S Functional Model Scope

The HL7 EHR-S Functional Model defines a standardized model of the functions that may be present in EHR
Systems. From the outset, a clear distinction between the EHR as a singular entity and systems that operate on
the EHR – i.e., EHR Systems is critical. This Standard makes no distinction regarding implementation - the EHR-
S described in a Functional Profile may be a single system or a system of systems. Within the normative sections
of the Functional Model, the term “system” is used generically to cover the continuum of implementation options.
This includes “core” healthcare functionality, typically provided by healthcare-specific applications that manage
electronic healthcare information. It also includes associated generic application-level capabilities that are
typically provided by middleware or other infrastructure components. The latter includes interoperability and
integration capabilities such as location discovery and such areas as cross application workflow. Interoperability
is considered both from semantic (clear, consistent and persistent communication of meaning) and technical
(format, syntax and physical connectivity) viewpoints. Further, the functions make no statement about which
technology is used, or about the content of the electronic health record. The specifics of 'how' EHR systems are
developed or implemented is not considered to be within the scope of this model now or in the future. This EHR-
S Functional Model does not address or endorse implementations or technology, nor does it include the data
content of the electronic health record.

Finally, the EHR-S Functional Model supports research needs by ensuring that the data available to researchers
follow the required protocols for privacy, confidentiality, and security. The diversity of research needs precludes
the specific listing of functions that are potentially useful for research.

This Functional Model is not:
* a messaging specification
* an implementation specification
* a conformance specification
* an EHR specification
* a conformance or conformance testing metric
* an exercise in creating a definition for an EHR or EHR-S

It is important to note that the EHR-S Function Model does not include a discussion of clinical processes or the
interaction of the healthcare actors. However, ISO 13940 Health Informatics – System of Concepts to Support
Continuity of Care, is an international standard that does outline key principles and processes in the provision of
healthcare. It is recommended that users of the EHR-S FM refer to this standard for clinical processes that EHR
systems support.

This EHR-S Functional Model package includes both Informative and Normative sections.

| Status | Description |
| -- | -- |
| Informative <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a> | Content of the EHR-S Functional Model Package that contains information which clarifies concepts or otherwise provides additional information to aid understanding and comprehension. Informative material is not balloted as part of the standard. |
| Normative <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> | Content that is part of the EHR-S Functional Model which HL7 committee members and interested industry participants have formally reviewed and balloted following the HL7 procedures for Balloting Normative Documents. This HL7 developed Functional Model document has been successfully balloted as a normative standard by the HL7 organization. |
{: .grid .table-striped}

**Table 1: Normative Status Types**

Each section within this document is clearly labeled "Normative" <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a> if it is normative. For example, in section 3.4
(Overview) section 3.4.3 is normative. In section 3.7, Conformance Clause; sections 3.7.1 through 3.7.6 are normative.

In Annex A, Function List, the Function ID, Function Name, Function Statement, and Conformance
Criteria components are Normative in this Functional Model.