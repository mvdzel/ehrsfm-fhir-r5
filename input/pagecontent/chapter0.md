### Notes to Readers

EHR System Functional Model Release 2.1 is based on a series of predecessors, starting in 2004 with the
release of the first consensus Draft Standard, followed in 2007 by Release 1, followed in 2009 with Release 1.1
(jointly balloted with ISO TC215 and CEN TC251), followed in 2014 with Release 2.0 (jointly balloted with ISO
TC215, CEN TC251, DICOM, SNOMED (IHTSDO), CDISC and GS1). HL7 also published Release 2.01 as an
unballoted errata version in 2017.

### Changes from Previous Release

The HL7 EHR-System Functional Model Release 2.1 had its first normative ballot in December 2019. Following
are key changes from Release 2.0:

* Includes updates from HL7 errata Release 2.01;
    * Record Infrastructure Section is updated to include three new Record Lifecycle Events: verify, encrypt and decrypt. There are now a total of 27 Record Lifecycle Events, describing how an Electronic Health Record System manages health record entries their lifespan, from first point of entry origination/retention to last point of entry deletion or destruction. The 27 Record Lifecycle Events match those specified in ISO 21089-2018, Health Informatics – Trusted end-to-end information flow and HL7 Fast Health Interoperable Resources (FHIR) Record Lifecycle Event Implementation Guide, published a spart of FHIR Core STU-3 (March 2017) and now part of FHIR Core R4 (in ballot, September 2018).
    * The 27 Record Lifeycle Event definitions/descriptions are updated according to agreements of the HL7 Vocabulary Alignment project (in joint collaboration of the HL7 EHR and Security Work Groups). The Glossary Section also includes those definitions/descriptions.
    * The Conformance Clause is updated to include a definition/description of a new type of EHR-S FM Functional Profile (FP): Derived Companion FP.
    * Trust Infrastructure is updated to include functions and conformance criteria to support ISO/HL7 Detailed Clinical Models (DCMs).