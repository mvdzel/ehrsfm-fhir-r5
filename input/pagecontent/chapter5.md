The HL7 International community supports development of Functional Profiles (FPs), which may be realm
(country) specific specifications (i.e., tailored functional requirements) built off the base EHR-S FM Standard.
There are a range of FPs developed and balloted by HL7 International or its national affiliates. These FPs
designate a subset of functions from the base EHR-S FM for use in specific care settings (e.g., Ambulatory Care),
services or specialties (e.g. Behavioral Health) or specify cross-cutting characteristics of EHR systems and/or
records (e.g. the Records Management and Evidentiary Support). Balloted, approved and published FPs, based
on the EHR-S FM, are available in the HL7 International library of Standards.

### Development Approach: Functional Profiles

A “Functional Profile" is a selected set of functions applicable for a particular purpose, realm (country), domain,
care setting, service or specialty.

It is not anticipated that any system or implementation will conform to all functions and conformance criteria set
forth in the base EHR-S FM. Rather EHR systems or implementations may conform to one or more Functional
Profiles.

For more information about creating, registering, and balloting Functional Profiles, see Conformance Section 7.

One might create a Functional Profile to support a business case for EHR-S use by selecting an applicable subset
of functions from the based EHR-S FM list of functions, in effect constraining the model to meet specific
requirements. For example, a Functional Profile may be created by a purchaser, to specify requirements; by a
vendor, to specify capabilities of a system design; or by any person/entity wishing to stipulate a desired subset of
functions for a particular purpose, for example, functions to support a care setting within a particular realm.

Readers may wish to focus on sections of the FM that are most relevant for their purpose of EHR-S use. For
example, a clinician might read the Care Provision and Care Provision Support sections very closely, while
technical specialists might focus especially on Record and Trust Infrastructure sections. Within an organization,
it might be helpful to designate responsibility for reviewing different FM sections among staff with different
responsibilities and expertise for use and support of the EHR system.

Three vignettes are included here to help readers in different positions or organizations envision how they would
study, and ultimately utilize the EHR-S Functional Model.

#### Scenario 1 – Group Practice

Dr. Smith is part of a 50-person group practice. The practice currently has a clinical information system that
provides billing, scheduling, and other administrative support. For several reasons, it will need to be upgraded
or replaced within 2 years. It does not include electronic health records. Dr. Smith and interested colleagues
review an Ambulatory Care registered profile to see how the use, setting and scenario illustrate the EHR functions
related to their practice; they look at the Ambulatory Care prioritization of the individual functions that a group of
experts working with HL7 have identified. With a good understanding of what the EHR functions would mean for
their practice, Dr. Smith and several other providers then focus on the Care Provision and Care Provision Support
sections, while clinic administration staff look at the Administrative Support section, while the technical support
staff look at the Record and Trust Infrastructure sections. They all meet to discuss their conclusions. They plan
to use the list of functions in discussions with vendors about their next EHR system, recognizing that some
functions may not yet be available.

#### Scenario 2 - Hospital

Mr. Jones is the Chief Informatics Officer in a large hospital organization Their IT system was installed two years
ago and includes patient tracking and ordering components; it was upgraded for compliance with United States
HIPAA (Health Insurance Portability and Accountability Act). It does not include clinical decision support,
performance monitoring, or public health reporting. Mr. Jones asks the Chief Medical Officer to organize a review
of the HL7 EHR-S FM while his team also reviews it. They both begin by looking at an Acute Care Functional
Profile to see how a group of experts working with HL7 have identified how an EHR-S could be used within a
hospital. The scenario and prioritization of the individual functions is helpful. The CMO and several doctors and
senior nurses review the Care Provision and Care Provision Support sections of the EHR-S Functional Model
Acute Care profile; the CIO and his team focus on the Record and Trust Infrastructure sections but also look at
the Care Provision and Care Provision Support sections. A small team of providers and IT staff meet to discuss
their conclusions. They plan to use the list of functions in discussions with vendors about adding decision support,
performance monitoring, and public health reporting to their existing system, recognizing that their budget will
only allow very limited expansion in the near term.

#### Scenario 3 - IT Vendor

Ms. Green is the head of the clinical systems division of a large health IT company. Their product line includes
both dedicated EHR systems and integrated systems that include an EHR. Their EHR and integrated systems
have some decision support for medication ordering, but no performance monitoring/reporting functions. While
most of their clients are larger provider organizations and hospitals, they are planning to expand into the small
practice and home health markets with a simple, less expensive clinical system. In anticipation of HHS’s
implementation of the Merit-Based Incentive Payment System (MIPS), which provides financial incentives for
providers who use IT to track patients, the company wants to add a range of functionality to its products that
would meet or exceed these requirements. Ms. Green asks her staff to review the entire HL7 EHR-S FM package,
and also review applicable care setting Functional Profiles. Based on these examples, they determine that they
could add a relatively small number of functions to various products to be able to offer superior products for
current and future clients. They see value in the EHR-S FM for their discussions with their clients about upgrades
or new purchases.

### Examples of Current Use

#### Functional Profile for Clinical Research based on the EHR-S FM

Below is the text of a November 2009 HL7 Press Release demonstrating industry use:

> Ann Arbor, Michigan, U.S.A.–November 5, 2009– Health Level Seven International® (HL7®), the global
authority for interoperability and standards in healthcare information technology with members in 57
countries, today announced it has published the healthcare industry’s first ANSI (American National
Standards Institute)-approved standard that specifies the functional requirements for regulated clinical
research in an electronic health record system (EHR-S). The HL7 EHR Clinical Research Functional
Profile for EHR systems is based upon the HL7 EHR Work Group’s EHR System Functional Model
Release 1, which is also an ANSI-approved American National Standard.

> The EHR Clinical Research Functional Profile defines high-level requirements critical for using
electronic health record data for regulated clinical research, and provides a roadmap for integrating the
information environment that must support both the patient care and the downstream clinical research
processes. According to Donald Mon, PhD, co-chair of the HL7 EHR Work Group and member of the
HL7 Board of Directors, “This profile is an excellent demonstration of how important functional
requirements for secondary data use, such as clinical research, can be integrated into the patient care
work flow and documented in EHR systems.” Pharmaceutical, biotechnology, clinical research
technology vendor, healthcare technology vendor, and federal regulatory stakeholders from the United
States and the European Union collaborated for two years to identify and address a broad list of data
protection, regulatory and ethical research requirements. The EHR Clinical Research Functional Profile
is also a resource for the Certification Commission for Healthcare Information Technology (CCHIT)
Clinical Research Work Group as they define new clinical research certification criteria for EHR
systems. This functional profile will be complemented by the EHR-Clinical Research interoperability
specification, currently being developed by the Health Information Technology Standards Panel
(HITSP). Additionally, Dr. Rebecca Kush, President and CEO of the Clinical Data Interchange
Standards Consortium (CDISC), commented that “CDISC is pleased to be a collaborator and to
contribute clinical research standards and eSource Data Interchange concepts towards these initiatives.
The ultimate goal is to accelerate the pace at which research informs healthcare for the benefit of
patients and this functional profile contributes to the achievement of that goal.”

#### AHRQ adopts Health Level Seven International (HL7) Child Health Functional Profile Specification, Release 1 and incorporates key functionalities in the Children’s Electronic Health Record Format

Below is an excerpt from AHRQ’s Children's Electronic Health Record Format - https://healthit.ahrq.gov/health-
it-tools-and-resources/pediatric-resources/childrens-electronic-health-record-ehr-format

> “The Children’s Electronic Health Record (EHR) Format was developed to bridge the gap between the
functionality present in most EHRs currently available and the functionality that would more optimally
support the care of children. Specifically, the Format provides information to EHR system developers and
others about critical functionality, data elements, and other requirements that need to be present in an
EHR system to address health care needs specific to the care of children, especially those enrolled in
Medicaid or the Children’s Health Insurance Program (CHIP). To address these needs, the Format
includes a minimum set of data elements and applicable data standards that can be used as a starting
point or checklist for EHR developers seeking to create a product that can capture the types of health
care components most relevant for children....The Children’s EHR Format contains portions of the Health
Level Seven International (HL7®) Child Health Functional Profile Specification, Release 1, and
modifications thereof, developed by HL7, the copyright of which is owned by HL7. Portions of the Format
that contain excerpts from the HL7 Child Health Functional Profile are identified in the Provenance Field...”

See the link below to access a copy of the “Children’s EHR Format” - https://ushik.ahrq.gov/mdr/portals/cehrf?system=cehrf

#### Linking clinical content descriptions to the EHR-S FM (Reference)

HL7 has ongoing initiatives to link clinical content descriptions to functions and criteria in the EHR-S FM. This
clinical content linkage can be helpful input to developers of EHR-systems. Examples of these clinical content
descriptions include the Domain Analysis Models (DAMs) and Detailed Clinical Models (DCMs). Each of these
examples can be linked to applicable sections of the EHR-S FM For example, a Care Plan DAM which can be
linked to a care planning functions in the Care Provision and Care Provision Support sections in the EHR-S FM.

At a more detailed level, the DCMs, can be linked to specific functions in the EHR-S FM or EHR-S Functional
Profiles. For example, a DCM for the Apgar score can be linked to CP.3.1 Conduct Assessments and CPS 3.1
Support for Standard Assessments. Another example is using the DCM for blood pressure with CP.3.2 Manage
Patient Clinical Measurements.

On the level of data elements, which can be specified in a DCM, or in a data table, the linkage to EHR-S FM is
usually through an individual criterion. For example, CP.3.2 Manage Patient Clinical Measurements, for example
criterion ‘The system SHALL provide the ability to capture patient vital signs including blood pressure,
temperature, heart rate, and respiratory rate, as discrete elements of structured or unstructured data.
Finally, similar to EHR-S FM Function TI.4 Standard Terminology and Terminology Services, a Function is
created for Clinical Models and Clinical Models Services. The function name is 'TI.10 Standard or Preferred
Clinical Models and Clinical Model Services'. There are three child functions:
- TI.10.1 Standard or Preferred Clinical Models. The statement is; Employ approved standard or
Preferred Clinical Models to ensure structured data correctness and to enable semantic interoperability
(both within an enterprise and externally). Support a standard or Preferred Clinical Model.
- TI.10.2 Maintenance and Versioning of Standard or Preferred Clinical Models. The statement is;
Enable version control according to scope of practice, organizational policy, and/or jurisdictional law to
ensure maintenance of utilized standard or preferred clinical models. This includes the ability to
accommodate changes to clinical models as the source clinical model undergoes its update process.
Such changes need to be cascaded to clinical content embedded in templates, custom formularies,
etc., as determined by existing policy.
- TI.10.3 Clinical Model Mapping; The statement is; Map or translate one clinical model to another as
needed by local, regional, national, or international interoperability requirements.