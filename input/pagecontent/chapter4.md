<style>table, td, th { border: 1px solid black; padding:5px; }</style>

The EHR-S Functional Model is composed of a list of functions, known as the Function List, which is divided into
seven sections: Overarching, Care Provision, Care Provision Support, Population Health Support, Administrative
Support, Record Infrastructure and Trust Infrastructure.

{% include img.html img="figure1.png" caption="Figure 1: Function List Sections" width="70%" %}

Within the seven Sections of the Functional List the functions are grouped under header functions which each
have one or more sub-functions in a hierarchical structure.

### Sections of the Function List

Below is a summary description of each of the seven sections:
* Overarching: The Overarching Section contains functions and conformance criteria that apply to complete EHR Systems and which are typically included in all EHR-S FM compliant profiles.
* Care Provision: The Care Provision Section contains those functions and conformance criteria that enable direct care to a specific patient and facilitate hands-on delivery of healthcare. The functions are general and are not limited to a specific care setting and may be applied as part of an Electronic Health Record supporting healthcare clinics, hospitals, services, specialties, acute, post-acute and long-term care settings.
* Care Provision Support: The Care Provision Support Section focuses on functions and conformance criteria supporting the provision of care. This section is organized generally in alignment with Care Provision Section. For example, CP.4 (Manage Orders) is supported directly by CPS.4 (Support Orders).
* Population Health Support: The Population Health Support Section focuses on functions and conformance criteria supporting the prevention and control of disease among a group of people (as opposed to the direct care of a single patient). This section includes functions to support input to systems that perform medical research, promote public health and improve the quality of care to a population.
* Administrative Support: The Administrative Support Section focuses on functions and conformance criteria enabling the management of clinical practice and facilitating administrative and financial operations. This includes management of resources, workflow and communication with patients and providers as well as the management of non-clinical administrative information on patients and providers.
* Record Infrastructure: The Record Infrastructure Section consists of functions and conformance criteria describing how an EHR system manages an EHR record, particularly those functions vital to managing the lifecycle of EHR record entries (such as origination/retention, attestation, amendment/update, access/use, translation/transformation, transmittal/disclosure, receipt, de-identification, archive...) and record entry lifespan (persistence, indelibility, continuity, audit, encryption). RI functions are core and foundational to all other functions of the EHR-S FM (CP, CPS, POP, AS).
* Trust Infrastructure: The Trust Infrastructure Section consists of functions and conformance criteria common to an EHR System infrastructure, particularly those functions foundational to system operations, security, efficiency and data integrity assurance, safeguards for privacy and confidentiality, and interoperability with other systems. TI functions are core and foundational to all other functions of the EHR-S FM (CP, CPS, POP, AS and RI).

### Functional Profiles

While the Functional Model contains all reasonably anticipated EHR-S functions, it is not itself intended as a list
of all functions to be found in a specific EHR-S or implementation thereof. Functional Profiles offer a method to
constrain EHR-S FM functions and conformance criteria to an intended use.
In the aggregate, the EHR-S FM is intended to include the superset of functions from which a profile subset can
be generated. This subset illustrates what is needed within an EHR-S. Only a subset of all EHR-S FM functions
will apply to any particular EHR-S Functional Profile (FP).

{% include img.html img="figure2.png" caption="Figure 2. Profiling from the EHR-S FM" width="70%" %}

Figure 2 shows that a profile would include all 7 sections of the Functional Model, however it may not be
necessary to include all the functions and criteria within each section. A profile may include additional functions
and criteria to meet the requirements of the particular profile domain or subject area.
The Conformance Clause is a high-level description of what is required of profiles and implementations. It, in
turn, refers to other parts of the standard for details. The Conformance Clause describes concepts critical to the
understanding and implementation of the Functional Model, such as: ‘What is a profile? What are Conformance
Criteria? Or how do you know what is mandatory versus optional?. A Conformance Clause can also provide a
communication between the implementers (producers) and users (buyers) as to what is required, and gives
meaning to the phrases, “conforming profile” and “conforming EHR system”. Additionally, it serves as the basis
for inspection, testing and/or certification activities which may be performed by organizations external to HL7.
Refer to the Conformance Clause, section 7, for additional information related to the rules for selecting and adding
Conformance Criteria in the development of a Functional Profile.

### EHR-S Function List Components

The EHR-S Function List is a list (superset) of functions organized into discrete sections. Functions describe the
behavior of a system in user-oriented language so as to be recognizable to the key stakeholders of an EHR-S.

EHR-S functions can be used to:
* Describe end user defined benefits such as patient safety, quality outcomes and cost efficiencies in terms of standard EHR-S functions.
* Promote a common understanding of EHR system functions upon which developers, vendors, users and other interested parties can plan and evaluate EHR system designs and implementations.
* Provide the necessary framework to drive the requirements and applications of next level standards, such as EHR content, coding, information models, constructs and interoperability for information portability between sub-systems of an EHR system and across EHR systems.
* Establish a standards-based method by which each realm (country) can apply these EHR system functions to care settings, services, specialties, other uses and priorities.
* Inform those concerned with supporting subsequent use of data initially collected for the purpose of care (also known as “secondary use”) on what functions can be expected in an EHR system.
* Inform those concerned with supporting realm-specific health information infrastructure on what functions can be expected in an EHR Systems.

Each function in the HL7 EHR-S Functional Model is identified and described using a set of elements or
components as detailed below.

| ID | Type | Name | Statement | Description | Conformance Criteria |
| -- | -- | -- | -- | -- | -- |
| CP.1 | H | Manage Clinical History | Manage the patient's clinical history lists used to present summary or detailed information on patient health history. | Patient Clinical History lists are used to present succinct “snapshots” of critical health information including patient history; allergy intolerance and adverse reactions; medications; problems; strengths; immunizations; medical equipment/devices; and patient and family preferences.
| CP.1.4 | F | Manage Problem List | Create and maintain patient-specific problem lists. | A problem list may include, but is not limited to chronic conditions, diagnoses, or symptoms, injury/poisoning (both intentional and unintentional), adverse effects of medical care (e.g., drugs, surgical), functional limitations, visit or stay-specific conditions, diagnoses, or symptoms...
| CP.1.4 | C | | | | 1. The system SHALL provide the ability to manage, as discrete data, all active problems associated with a patient.
| CP.1.4 | C | | | | 2. The system SHALL capture and render a history of all problems associated with a patient.
| CP.1.4 | C | | | | 3. The system SHALL provide the ability to manage relevant dates including the onset date and resolution date of problem.

**Table 2: Function List Example**

#### Function ID <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

This is the unique identifier of a function in the Function List (e.g., CP.1.1) and uniquely identifies the function.
The Function ID also serves to identify the section within which the function exists (CP = Care Provision Section)
and the hierarchy or relationship between functions (CP.1.1 is at the same level as CP.1.2, CP.1.1 is also a parent
of CP.1.1.1 and child of CP.1. In many cases the parent is fully expressed by the children. NOTE: For a detailed
discussion and graphic of the parent and child relationship, see 6.6.1 Hierarchical Structure in Chapter 6,
Conformance Clause.)

#### Function Type <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a>

This is an indication of the line item as being a Header (H), Function (F) or Conformance Criteria (C). The Tag
(T) is used to identify a new section in the spreadsheet and its related functions in the spreadsheet. A Tag has
no directly associated Functions or Criteria.

#### Function Name <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

This is the name of the Function and while expected to be unique within the Function List; it is not recommended
to be used to identify the Function without being accompanied by the Function ID.
Example: Manage Medication List

#### Function Statement <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

This is a brief statement of the purpose of this function. While not restricted to the use of structured language
that is used in the Conformance Criteria (see below); the Statement identifies the purpose and scope of the
function.
Example: Create and maintain patient-specific medication lists.

#### Description <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a>

This is a more detailed description of the function, including examples if needed.
Sample Description: Medication lists are managed over time, whether over the course of a visit or stay, or the
lifetime of a patient. All pertinent dates, including medication start, modification, and end dates are stored. The
entire medication history for any medication, including alternative supplements and herbal medications, is
viewable. Medication lists are not limited to medication orders recorded by providers, but may include, for example,
pharmacy dispense/supply records, patient-reported medications and additional information such as age specific
dosage.

#### Conformance Criteria <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

Each function in the Function List includes one or more Conformance Criteria. Conformance Criteria, which exist
as normative language in this standard, define the requirements for conforming to the function. The language
used to express a conformance criterion is highly structured with standardized components with set meanings.
The structured language used to define Conformance Criteria in the Function List are further specified in the
Conformance Section 7 and Glossary Section 8.