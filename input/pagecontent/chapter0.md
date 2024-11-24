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

### Background

#### What are Electronic Health Record Systems?

The effective use of information technology is a key focal point for improving healthcare in terms of patient safety,
quality outcomes, and economic efficiency. A series of reports from the U.S. Institute of Medicine (IOM)
identifies a crisis of "system" failure and calls for "system" transformation enabled by the use of information
technology. Such a change is possible by "an infrastructure that permits fully interconnected, universal, secure
network of systems that can deliver information for patient care anytime, anywhere.

In developing this EHR-S Functional Model, HL7 relied on three well-accepted definitions: two provided by the
U.S. Institute of Medicine and one developed by the European Committee for Standardization/ Comité Européen
de Normalisation (CEN). This Functional Model leverages these existing EHR-S definitions and does not
attempt to create a redundant definition of an EHR-S.

#### How were the Functions Identified and Developed?

To achieve healthcare community consensus at the outset, the functions are described at a conceptual level,
providing a robust foundation for a more detailed work. Functions were included if considered essential in at
least one care setting. Written in user-oriented language, the document is intended for a broad readership.

Functional Granularity is a term used to describe the level of abstraction at which a function is represented.
Functions that are commonly grouped together in practice or by major systems have been consolidated where
appropriate; functions requiring extra or separate language or involving different workflows have been kept
separate where appropriate. For example, decision support is maintained as a separate section, but mapped to
other key sections, to indicate the "smart" function behind an action. All of the functions could be expanded into
more granular elements but a balance between a usable document and an unwieldy list of functions has been
agreed upon. The goal of determining an appropriate level of functional granularity at this time is to present
functions that can be easily selected and used by readers of this standard, but that are not so abstract that
readers would need to create a large number of additional functions within each function.

Although the determination of functional granularity is a relatively subjective task, systematic evaluation of each
function by diverse groups of industry professionals has resulted in a level of granularity appropriate for this
EHR-S Functional Model. Every attempt has been made to provide supporting information in the functional
descriptions to illustrate the more granular aspects of functions that may have been consolidated for usability
purposes.

Keeping with the intent of this EHR-S Functional Model to be independent with regard to technology or
implementation strategy, no specific technology has been included in the functions, but may be used in the
examples to illustrate the functions. Inclusion of specific technologies in the examples does not endorse or
support the use of those technologies as implementation strategies.

The EHR-S Functional Model and specific functions have been widely reviewed by healthcare providers,
vendors, public health agencies, regulatory and accreditation bodies, professional societies, trade associations,
researchers and other stakeholders. This Standard reflects input from all these reviewers.