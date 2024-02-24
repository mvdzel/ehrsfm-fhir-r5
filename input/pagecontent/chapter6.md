<style>table, td, th { border: 1px solid black; padding:5px; }</style>

### Introduction (Reference)

Sections 6.2 through 6.7 are the HL7 EHR Work Group approved Conformance Clauses. As important
background on conformance, please note the following:
1. This Conformance Clause defines what it means to conform to the EHR-S Functional Model.
2. Conformance to the Functional Model is defined for functional domain profiles, and for functional
companion profiles. An EHR system does not directly conform to the Functional Model, rather it
conforms to one or more Functional Profiles.
3. Conformance criteria are associated with functions in the EHR-S Functional Model.
4. This Conformance Clause does not specify inspection, testing or validation procedures to determine
whether an EHR system conforms to a EHR-S Functional Profile or whether a Functional Profile
conforms to the EHR-S Functional Model.

### Scope and Field of Application <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

This Conformance Clause defines the minimum requirements for Functional Profiles claiming conformance to the
EHR System Functional Model. It also identifies how EHR systems achieve conformance to the Functional Model,
which is via the system’s conformance to a particular functional domain profile, multiple Functional Profiles, or
combination of domain and companion profiles. This clause specifies:
5. The purpose, structure, and use of conformance criteria that are to be included in the Functional Model
and conforming Functional Profiles,
6. The rules for defining conforming Functional Profiles of the Functional Model,
7. The relationship between Functional Profiles and EHR systems,
8. Sample Conformance Clauses and use case scenarios,
9. Guidance on the conformance requirements that a Functional Profile might levy on EHR systems,
10. Guidance on the purpose and use of an EHR system Conformance Statement.

While the conformance requirements for Functional Profiles can be found in this clause, they necessarily
reference the Functional Model and other sources.

This Conformance Clause does not specify inspection, testing or validation procedures to assess a Functional
Profile’s conformance to the Functional Model. It also does not specify inspection, testing or validation procedures
to determine whether an EHR system conforms to a Functional Profile or matches the EHR System Conformance
Statement.

### Concepts <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

#### Functional Profiles

Creating a Functional Profile is a method for defining subsets of the Functional Model. A Functional Profile is a
specification which uses the Functional Model to indicate which functions are required, desired, or implemented
for certain EHR systems, healthcare delivery settings, or for other purposes (e.g., the functional profile for Records
Management and Evidentiary Support).

Functional Profiles can be created by healthcare community stakeholders with interest in using and/or providing
a Functional Profile for an EHR system. Functional Profiles can represent the functionality required and desired
for a realm (country/region), domain, care setting or service/specialty, or reflect the functionality incorporated in
a vendor’s EHR system.

(NOTE: During the process of creating a Functional Profile, it may be important to discuss clinical processes,
work flows and/or interaction(s) of the healthcare actors. The international standard ‘ISO 13940 System of
Concepts to Support Continuity of Care’ provides an outline of key principles and processes in the provision of
healthcare. We would highly recommend reviewing this standard as part of your work.)

There are two types of Functional Profiles. The Functional Domain Profile is the common type of profile used to
describe an EHR system for use in one or more care settings, or to describe an EHR system for use in a selected
realm (country/region) to meet the rules, regulations and standards applicable for that realm, to describe an EHR
system for use by a particular service or specialty, etc. The Functional Companion Profile is a type of profile that
must be paired with one or more Domain Profiles. The purpose of a Companion Profile is to add unique features
to an EHR System, such as for research or for evidentiary support. For example, many EHR systems in a clinic
environment do not need to support clinical research. But for a clinic that was supporting advanced research,
they might want an EHR system that was both capable of all of the expected functions for routine clinic patient
care activities, but also had unique features to support the needs for research reporting and clinical trials.

Once a Functional Profile is defined its functions (complying with conformance criteria) can be implemented within
EHR systems or it may trigger the creation of derived Functional Profiles. A derived Functional Profile is a
Functional Profile that is created from an existing Functional Profile, inheriting FP functions and conformance
criteria. There are two types of derived Functional Profiles: Derived Domain FP and Derived Companion FP.

There are two types of mandatory inheritance in the EHR-S FM. All Functional Domain Profiles will inherit the full
set of functions in the EHR-S FM Overarching section and their related “SHALL” criteria. All criterion listed in a
parent function will be applicable to all the children of that parent function.

A formal HL7 process exists for registering and balloting Functional Profiles. Functional Profiles that are
submitted to the HL7 EHR WG with an attestation of conformance to Section 7: Conformance Clause of the HL7
EHR-S Standard and successfully complete review by the WG are designated as “Registered Functional Profiles”.
Registered Functional Profiles that undergo formal public scrutiny via the HL7 consensus process as an
Informative EHR TC ballot at the committee level will be designated as HL7 functional domain or companion
profiles. HL7 Functional Profiles are eligible to undergo full membership ballot via the HL7 consensus process.

#### Conformance Model

Conformance to the Functional Model is defined for Functional Profiles. A functional domain profile conforms
either (1) directly to the base EHR-S FM or (2) to another conforming functional domain profile. NOTE: All
functional domain profiles must include all the functions and “SHALL” criteria of the Overarching Chapter. An EHR
system does not conform directly to the Functional Model; rather, it conforms to a functional domain profile, or to
a domain profile in combination with selected companion profile(s). Thus, Functional Profiles claim conformance
to the Functional Model and EHR systems claim conformance to one or more conforming domain Functional
Profiles. An EHR system can also claim conformance to a domain Functional Profile, in combination with one of
more companion profiles. An EHR system cannot claim conformance to only a companion profile. Figure 3
(below) illustrates this relationship.

{% include img.html img="figure3.png" caption="Figure 3: Conformance Relationships" width="70%" %}

#### Profile Traceability

Functional Profiles allow for added specificity and extensibility to the Functional Model with changes allowed to
the base FM functions and criteria. However, Section 6.6 (following) defines rules for these changes. It is also
required that any changes and additions be tracked. Two added columns in profiles accomplish this. One column
will document the unique source FM row number for each item in the new profile (or source profile for a derived
profile). The second column will provide codes for the type of changes from the source FM (or source profile).
Together, these two traceability columns will keep track of the origins of the functions or criteria – and whether it
is modified or unchanged from that within the FM or the source profile. This may be important when questions
arise as to where did it come from, why was it chosen or modified, etc. It can also be helpful to have traceability
back to the FM functions and criteria if and when revisions to a profile or for derived profile are needed to reflect
care setting, regulatory, technology changes – or a future new release of the base EHR-S FM.

### Normative Language <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

The EHR-S Functional Model (i.e., all chapters) contains normative, informative, and reference sections. In this
Conformance Clause section, the normative content defines how a Functional Profile achieves conformance to
the Functional Model.
The following keywords (i.e., normative verbs) **SHALL** be used to convey conformance requirements.
* SHALL – to indicate a mandatory requirement to be followed (implemented) in order to conform. Synonymous with ‘is required to’.
* SHALL NOT – to indicate a prohibited action. Synonymous with ‘prohibited’.
* SHOULD – to indicate an optional recommended action, one that is particularly suitable, without mentioning or excluding others. Synonymous with ‘is permitted and recommended’.
* MAY – to indicate an optional, permissible action. Synonymous with ‘is permitted’.

### Conformance Criteria <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

Every function in the Functional Model is associated with a set of conformance criteria. These *conformance
criteria* form the basis for determining whether the function has been implemented

#### Criteria in the Functional Profile

Functional Profiles also have conformance criteria associated with functions in the Functional Profile. The
Functional Profile’s criteria are either (1) adapted from the Functional Model conformance criteria with
requirements or language specific to the purpose, care-setting, realm (country/region), domain, service or
specialty focus of the Functional Profile; or otherwise (2) inherited directly from Functional Model. Functional
domain and companion profiles **MAY** change Functional Model criteria to match the needs and priorities of the
Functional Profile’s constituency, e.g., by making it more specific, or changing it from ‘may’ or ‘should’ to ‘shall’.
Functional Profiles **MAY** change the criteria of a function to allow for alignment to realm specific nomenclature,
including language distinctions and implication of non-english translations. In these cases, the International
Organization for Standardization (ISO) country code (ISO 3166 Country Codes) **SHALL** be appended to the
function ID in the Functional Profile.

The functional domain profile **SHALL NOT** be made less restrictive than the Functional Model by changing ‘shall’
criteria to ‘may’ or ‘should’ criteria (The functional companion profile **MAY** be less restrictive that the FM by
ignoring ‘shall’ criterion). Functional domain and companion profiles **MAY** also add additional criteria.

#### ‘Dependent SHALL’ Criteria

Conformance criteria that contain the keyword ‘shall’ **and** a dependency on situational conditions are called
‘dependent shall’ criteria. The ‘dependent shall’ **SHALL** contain the phrase “in accordance with scope of practice,
organizational policy, or jurisdictional law” or other appropriate grammatical tie-in words (e.g., ‘based on’ rather
than ‘in accordance’). A ‘dependent shall’ criteria is used to highlight only these (i.e., scope of practice,
organizational policy or jurisdictional law) conditions. A ‘dependent shall’ criterion is a mandatory criterion for
Functional Profiles and situational for EHR systems. Specifically,
* All functional domain profiles SHALL inherit the criterion if the function appears in the Functional Profile.
* An EHR system is required to implement the Dependent SHALL criterion only if the criterion is applicable per the stated dependency in the Functional Model. (If the Dependent SHALL criterion is not applicable to the profile, the developer of the profile may still use the criterion if desired.)

#### Referencing Other Criteria or Functions

There is often a link between functions and their criteria with other functions and criteria. For example, a given
function may depend on another function or on a specific criterion associated with another function.
A criterion in the Functional Profile that references another function in the Functional Profile **SHALL** reference
that function by indicating its name and ID, as “X.n.n (Name)”. If the referenced function is required to be
implemented, then all the ‘shall’ criteria of this referenced function apply. If the referenced function is a parent
with children, the reference must be explicit on whether the children are included in the reference, all or selected
ones. See the examples below:
* The system SHALL/SHOULD/MAY conform to TI.1.1 (Entity Authorization).
* The system SHALL/SHOULD/MAY conform to TI.2 (Audit) and all child functions.
* The system SHALL conform to CPS.4 Support Orders, and separate function(s) The systems SHALL conform to CPS.4.3 Non-medication Orders. The systems SHALL conform to CPS.4.6 Support for Referrals and all children functions.

A criterion in the Functional Profile that references a specific criterion in another function SHALL reference that
function by rewriting the referenced criterion as one of its own and indicating the function and criterion number
from where it came (e.g. F#, CC3).

### Functional Model Structure and Extensibility <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

#### Hierarchical Structure

Functions **MAY** be contained (i.e., nested) within other functions. A nested function is a ‘child’ to its ‘parent’ (i.e.,
the function that contains it). A child **SHALL** always have a parent. A function that is not a parent to another
function is considered a ‘leaf’. Figure 2 illustrates this hierarchical structure.
The Functional Model is represented as a hierarchical list of functions, consisting of functional header parents,
functional header children and functional leaf functions. Headers include an ID, Name and “H” in the column
labeled “Type”. Parent and Child Headers **MAY** contain conformance criteria only if the criteria apply to all its
descendent functions (i.e., children, grandchildren, and leafs). Parent, Child and Leaf functions contain at a
minimum the following: ID, Name, Statement, Description, and Conformance Criteria and have a “F” in the “Type”
column. Conformance criteria listed in a parent function **SHALL** be inherited by all its children functions.
Conformance Criteria have a “C” in the “Type” column.

{% include img.html img="figure4.png" caption="Figure 4: Portion of the Functional Model hierarchical structure" width="70%" %}

(Note: The numbering schema above reflects functions in the Care Provision chapter. For instance, CP.4.2 is
the function ‘Manage Medication Orders.)

Functional Profiles either:
* Select functions from the Functional Model for inclusion in the Functional Profile,
* Deem a function in the Functional Model as not applicable, thus do not select it for inclusion in the Functional Profile, or,
* Add a new child function when it has been determined that there is no applicable function in the Functional Model to represent a functional need in the Functional Profile.

#### Naming Convention

Functional Profiles **SHALL NOT** change the name or statement of a function except to allow for alignment to
realm specific nomenclature, including language distinctions and implication of non-english translations. In these
cases, the International Organization for Standardization (ISO) country code (ISO 3166 Country Codes) **SHALL**
be appended to the function ID in the Functional Profile. It is recommended that the HL7 Affiliate for the respective
realm coordinate with the profile development process to maintain a mapping of the Functional Model function
name and/or statement and the realm-adjusted name and/or statement.

#### Priorities

Functional Profiles indicate the importance and/or immediacy of a Functional Profile by associating a priority with
a function. Three priorities have been defined, Essential Now, Essential Future, and Optional.
* Essential Now indicates that the implementation of the function is mandatory, as of the profile issuance date.
* Essential Future indicates that the implementation of the function is currently optional but will be mandatory at some future time, which is specified by the Functional Profile
* Optional indicates that the implementation of the function is optional.

Any or all of these priorities **SHALL** be used in a Functional Profile. If the Essential Future priority is used, then
Functional Profiles are required to define the timeframe associated with implementing functions. A timeframe
**MAY** be a date, time allotment (e.g., year 2014 or 4 months after Functional Profile publication), or event (e.g.,
republication of this Functional Profile). A Functional Profile **MAY** define multiple timeframes for the Essential
Future priority. If multiple timeframes are defined, then the timeframe **SHALL** be used to qualify each occurrence
of the Essential Future priority (e.g., EF-2015, EF-2016).

#### Extensibility

To accommodate changes in technology as well as Functional Profiles’ needs, the Functional Model is designed
for extensibility, for functions and their related criteria. Incorporation of additional functions in the Functional
Profile beyond what is defined in the Functional Model is accommodated through a set of rules for adding new
functions as defined in Section 6.7.2.

Incorporation of additional criterion, changing the sequence of criterion and providing greater profile-specific detail,
beyond what is defined in the Functional Model, is accommodated through a set of rules for adding new criterion
or changing existing criterion as defined in Section 6.7.2.

### Functional Profile Conformance <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

A Functional Profile claiming conformance to the Functional Model **SHALL** meet all requirements specified in the
6.7.1 Rules for Functional Domain Profiles or in the 6.7.5 Rules for Functional Companion Profiles.

#### Rules for Functional Domain Profiles

Functional Domain Profiles SHALL claim conformance to the version of the EHR-S Functional Model from which
it was derived.

**Functional Profiles claiming Functional Model conformance SHALL:**
1. Identify the Functional Model with version/date, from which the Functional Profile is derived,
2. Include a description, version and issuance date of the Functional Profile,
3. Contain a Conformance Clause which
    1. Defines the requirements that EHR systems must satisfy in order to claim conformance to the Functional Profile,
    1. Defines the requirements that Functional Profiles derived from the Functional Profile (i.e., derived Functional Profiles) must satisfy in order to claim conformance to the Functional Profile.
    1. Specifies that functions designated with the priority ‘Essential Now’ SHALL be implemented by
    conformant EHR systems.
    1. Specifies that functions designated with the priority ‘Essential Now’ SHALL be included in any
    derived Functional Profiles.
    1. If Essential Future is used, defines the meaning of ‘Essential Future’, including specifying the
    timeframe for when these functions are required to be implemented.
    1. Requires that at least one function, regardless of its priority, be implemented in order for an EHR
    system to claim conformance to the profile.
4. Include all functions in the Overarching section of Function List as Essential Now and identify functions
from other sections of Function List of the Functional Model that are applicable to the functional
domain profile. For each identified function, indicate its priority (i.e., Essential Now, Essential Future or
Optional).
5. For each function, derive conformance criteria based on the Functional Model’s conformance criteria.
    1. In the Functional Profile, there SHALL be at least one criterion for each function that is mandatory
    (a ’shall’ criterion).
    1. If there are ‘shall’ criteria (for the function in the Functional Model), then those criteria SHALL also
    exist for the function (in the Functional Profile). Additionally, if the function is split (in the Functional
    Profile), then the parent's ‘shall’ criteria SHALL appear in at least one child of that function.
    1. If, as yet there is no ‘shall’ criterion (for the function in the Functional Model), then at least one of
    the ‘should’ or ‘may’ criterion SHALL be made mandatory, i.e., a ‘shall’ criterion.
    1. Adhere to the rules for referencing functions or criteria in Section 6.5.3.
6. For any function in the Functional Model where one or more criteria are ‘dependent shall’ criteria, the
Functional Profile for that function SHALL
    1. Replicate verbatim each ‘dependent shall’ in the Functional Profile, regardless of whether the
    dependent situation applies or not.
    1. When the dependent situation applies, create ‘shall’ criteria that apply the dependency to the
    ‘dependent shall’ criterion, resulting in one or more new, constrained versions of the ‘dependent
    shall’ criterion.
    1. State the specific scope of practice, organizational policy, and/or jurisdictional law which applies or
    state why these dependencies do not apply.
7. Adhere to the rules for creating new functions in Functional Profiles in Section 6.7.2.
8. Adhere to the rules for creating and changing conformance criteria in Section 6.5.
9. Complete the two traceability columns, see Section 6.3.3, for any changes to functions or criteria, and
include the following codes for type of change: (N/C for no change; A for added; M for modified.).
10. Be structured in accordance with the structural requirements defined for the Functional Model in
Section 6.6.1.
11. Use the Glossary Action verbs for modifying or creating new conformance criterion.

Functional domain profiles claiming conformance to the Functional Model MAY:
1. Create additional functions according to the rules specified in Section 6.7.2.
2. Contain conformance criteria more specific and limited in scope than those of the Functional Model.
3. Replace the text ‘standard(s)-based’ found in some criteria with specific standards and/or
specifications named at the most discrete level of designation.
4. Change a ‘should’ criterion to a ‘shall’ or a ‘may’ criterion.
5. Change a ‘may’ criterion to a ‘shall’ or a ‘should’ criterion.
6. Ignore a ‘should’ or ‘may’ criterion in the Functional Model (i.e., not include it in the Functional Profile).
7. Add additional conformance criteria beyond those in the Functional Model.
8. Make the order of the conformance criteria significant (e.g., put all ‘shall’ criteria first).
9. Enforce common resolution of ambiguous semantics of the Functional Model.
10. Make the Functional Profile public (e.g., published on a web site) so interested parties can see/use it.
11. Submit the Functional Profile for registration review by the HL7 EHR Work Group.

Functional domain profiles claiming conformance to the Functional Model SHALL NOT:
1. Specify any requirements that would contradict or cause non-conformance to the Functional Model.
2. Modify the name or statement of any function in the Functional Model, except to allow for alignment
with realm specific nomenclature as specified in Section 6.6.2.
3. Change a mandatory conformance criteria to an optional criteria (i.e., replace the ‘shall’ within the
criteria to ‘should’ or ‘may’) of any function in the Functional Model.
4. Modify any requirements of a function not selected for the Functional Profile (i.e., all unselected
functions default to the Functional Model’s criteria. If a profiling group wants to change something,
they SHALL promote it into their Functional Profile).

#### Rules for Creating New Functions in Functional Profiles

If a function is not adequately specified for a Functional Profile or does not exist, the Functional Profile SHALL
only create new children, the new children can be parents or leafs . Figure 5 illustrates the addition of a new child
function.

{% include img.html img="figure5.png" caption="Figure 5: Creating a new function" width="70%" %}

The following rules specify the method for creating new functions.
1. Whenever possible, conformance criteria SHOULD be used to avoid creating a new function. This may
be done, for example, in cases where the original function’s conformance criteria are too broad: divide
the Functional Model’s or base Functional Profile’s inherited conformance criteria into two criteria in the
Functional Profile, one being mandatory and the other optional. If this is not possible, the creation of a
new child function and associated criteria is allowed if necessary to clearly define the profile
requirements.
2. When a ‘leaf’ function exists (a child that is not a parent) but is too broadly specified in the Functional
Model or base Functional Profile for conformance criteria to adequately constrain it, then the function
MAY be split as follows:
3. The original ‘leaf’ function is retained as the parent of its newly created children functions, or
4. The original ‘leaf’ function’s conformance criteria SHALL be distributed among its children functions.
5. When no candidate function exists to express the requirements of a Functional Profile, a new child
function MAY be created (e.g., adding a new kind of summary list under the summary list’s parent).
6. ‘Parent functions SHALL NOT be split. This preserves the structure of the underlying Functional Model
in the Functional Profiles.

{% include img.html img="figure6.png" caption="Figure 6: Splitting a function" width="70%" %}

If new children functions are created by a Functional Profile that is balloted or registered, these new functions will
be captured by the HL7 EHR WG and tracked for review. The EHR TC WILL use these new functions and
related criterion as input and candidates for changes to the Functional Model (e.g., inclusion, relaxation of
conformance criteria). The EHR WG MAY maintain a file of functions and criterion reviewed and rejected for
inclusion in a future version of the FM.

{% include img.html img="figure7.png" caption="Figure 7: Adding a new child function" width="70%" %}

Function IN 4.4 is added as a new child which is a sibling to IN 4.1, IN 4.2, and IN 4.3.

#### Rules for Derived Functional Profiles

**Derived functional domain profiles claiming conformance to one or more base functional
domain profiles SHALL:**
1. Adhere to all the rules for Functional Domain Profiles as specified in Section 6.7.1.
2. Adhere to the rules for creating new functions as specified in Section 6.7.2, if not prohibited by the
base Functional Profile.
3. Identify the base Functional Profiles from which it is derived.
4. For each function inherited from a base Functional Profile, retain and not change mandatory
conformance criteria to optional conformance criteria.

#### Conformance Statement

Functional Profiles **MAY** want to require that a conformance statement be produced for systems claiming
conformance to the profile. A Conformance Statement provides information about an EHR system, by presenting
in a uniform manner the functions that have been implemented by the EHR system. A blank (i.e., yet to be
completed) Conformance Statement typically takes the form of a questionnaire or checklist, to be completed for
each EHR system.

A Conformance Statement provides a concise summary of a Functional Profile. It follows a standard layout, thus
providing EHR system vendors and users a quick overview of the Functional Profile’s functions. Moreover, it can
also be used to highlight optional functions and capabilities supported by the EHR systems as well as document
any extensions (i.e., additional functionality beyond what is in the Functional Profile) or specializations that have
been made. An EHR system’s Conformance Statement provides information that can be used in assessing the
EHR system’s conformance to a specific Functional Profile. Additionally, organizations wishing to acquire an
EHR system **MAY** produce a Conformance Statement to indicate the functions that are required and/or desired
in an EHR system.

Functional Profiles **MAY** want to include a blank, to be completed, sample Conformance Statement in order to
promote consistency among completed Conformance Statements. Conformance Statements can be useful in
determining the chances of interoperability between two EHR systems, by comparing the functions supported by
each EHR system. Additionally, for conformance testing purposes, it can be used to facilitate the selection of
tests that would be applicable to a particular EHR system being tested. For example, if an EHR system did not
implement functions designated as ‘Essential Future’, this would be evident in the Conformance Statement and
the tests for these functions (which are unimplemented) would not be performed.

#### Rules for Functional Companion Profiles

Functional Domain Profiles **SHALL** claim conformance to the version of the EHR-S Functional Model from which
it was derived. Functional Companion Profiles will follow the section 6.7.1 Rules for Functional Domain Profiles
and the section 6.7.3. Rules for Derived Functional Profiles, except for the exceptions and addition described
below:
Functional companion profiles claiming Functional Model conformance SHALL:
1. Adhere to section 6.7.2 for adding new functions,
2. Contain a Conformance Clause which
    1. Defines at least one functional domain profiles for which the companion profile can be linked that
    EHR systems must satisfy in order to claim conformance, or state any specific domain profiles that
    can or cannot be link to the companion profile,
    1. Defines the requirement(s) that companion profiles derived from the base functional companion
    profile (i.e., derived Functional Profiles) must satisfy in order to claim conformance to the functional
    companion profile.
3. Include **only functions being modified** from the Overarching section of Function List as Essential
Now and identify functions from other section of Function List of the Functional Model that are
applicable to the functional companion profile. For each identified function, indicate its priority (i.e.,
Essential Now, Essential Future or Optional).
4. For each function, derive conformance criteria based on the Functional Model’s conformance criteria.
    1. In the Functional Profile, there **SHALL** be at least one criterion for each function that is mandatory
    (a ’shall’ criterion).
    1. If there are ‘shall’ criteria (for the function in the Functional Model), then those criteria **MAY** also exist
    for the function (in the functional companion profile) if changes. Additionally, if the function is split (in
    the Functional Profile), then the parent's ‘shall’ criteria **MAY** appear in at least one child of that
    function.
5. For any function in the Functional Model where one or more criteria are ‘dependent shall’ criteria, the
functional companion profile may elect to ignore the criterion, but if selected for that function **SHALL**
follow the rules of section 6.7.1.

Functional companion profiles claiming conformance to the Functional Model MAY:
1. Ignore a ‘shall’, ‘‘should’ or ‘may’ criterion in the Functional Model (i.e., not include it in the Functional
Profile).

There are no exceptions to section 6.7.5. for Derived Functional Companion Profiles

### Use Cases and Samples (Reference)

#### Functional Profile Use Cases

**Care setting**

It is determined that a new care setting functional domain profile is needed to reflect the care setting specific
requirements. To help ensure widespread use and uniformity, the Functional Profile authors elect to undergo the
registration review followed by the HL7 consensus process (i.e., submitting the registered Functional Profile for
an “Informative” committee level ballot). If successful, the result will be designated a HL7 Informative Functional
Profile.

After looking at current list of HL7 informative Functional Profiles, the decision to create a new Functional Profile
is made. Each function in the EHR System Functional Model is examined and those that are relevant to the care
setting are chosen. From these functions, a small set of ‘core’ functions are selected as being essential and
mandatory. For each function, conformance criteria is developed either adapting the Functional Model
conformance criteria or in a few cases, using the Functional Model criteria as is. To complete the Functional
Profile, a description of the Functional Profile, including its intended use and audience as well as a Conformance
Clause is written. The Functional Profile is made public by publishing it on various web sites. Additionally, the
Functional Profile is submitted to HL7’s EHR Work Group for registration review, comment and ballot.

**Community of interest derived functional domain and companion profiles**

A community of interest (e.g., regional health information exchange network) wants a functional domain profile to
reflect their specific needs, and the needs of one of their members to support clinic research.

The Community of Interest doesn’t want to create a new Functional Profile from scratch. After looking at the list
of Registered Functional Profiles, they find an existing Functional Profile that is very close to what they want.
Using this Functional Profile as the base, they accept all the functions designated as ‘Essential Now’, reject
functions designated as ‘Future’ and add several more functions. For each function, they review the conformance
criteria and adapt the criteria to reflect their situational information.

For the one member of the community that needs to support research, a functional companion profile is created.
The Functional Profile is only needed to address the narrow areas of operation that are specific to research. So,
the group finds an existing companion profile for clinical research and modifies it to reflect the functions needed
for the specific disease state implications for the research activities of their member. Now the Community of
Reference can seek a vendor that can meet the needs of both the domain profile for the group and the companion
profile for the unique member.

**Vendor functional domain profile and overarching conformance**

A vendor with an EHR system wants to claim conformance to the EHR System Functional Model.
The vendor identifies and lists all the functions that are in his product. The vendor adds a description and a
Conformance Clause (see samples in section 7.2). This is the vendor’s functional domain profile. If the vendor
has actually implemented all the functions listed, then this is equivalent to ‘Essential Now’ and these functions
are mandatory. If functions that are currently implemented and those that will be implemented in the future are
listed, then the Functional Profile is comprised of ‘Essential Now’ and ‘Essential Future’ and/or optional
functionality. Finally, the vendor adds conformance criteria for each function, inheriting some criteria directly
(without change) from in the Functional Model. But can also add new criterion to reflect added system features.
If all children of a function have the same new criterion, that criterion would be moved to the parent function as
overarching, and applicable to all the children. This is appealing in that, the vendor has the opportunity to list all
the current functionality and if desired, indicate future plans. In essence, this is similar to a vendor Conformance
Statement (a concept most vendors are already familiar with). A vendor may create multiple Functional Profiles.

#### Sample Functional Domain Profile Conformance Clauses

To aid Functional Profile developers in developing a Conformance Clause for their Functional Profile, as required
by Section 6.1 rule #3, the following examples are offered. Note: in these examples, the keywords ‘shall’, ‘should’,
and ‘may’ are capitalized and bold. This is a convention to draw attention to the keywords.

**Conformance Clause for a care-setting functional domain profile**

This functional domain profile defines the conformance requirements for EHR systems and derived functional
domain profiles. To conform to this Functional Profile, all ‘Essential Now’ functions **SHALL** be implemented.
‘Essential Now’ functions are considered mandatory functions. An EHR system is conforming if it implements all
the functions designated as ‘Essential Now’ and the mandatory conformance criteria associated with that function.
A derived functional domain profile is conforming if it follows the Rules for Functional Profiles.
Mandatory conformance criteria are indicated by the keyword ‘shall’. Optional conformance criteria are indicated
by the keywords ‘should’ or ‘may’.
EHR systems **SHALL** provide a Conformance Statement structured according to the rules and policies defined
in this Functional Profile.

**Conformance Clause for an application**

E-Application is an application that if included in a care-setting specific system SHALL conform to this Functional
Profile. E-Application is an application that has a defined set of attributes of which a minimum set of functions is
required of any system claiming this e-Application functionality. Two levels of conformance are designated:
* Core Conformance is comprised of the functions in the minimal set of functions that are designated
as ‘Essential Now’.
* Advanced Conformance comprises the entire minimal set of functions (i.e., all ‘Essential Now’ as
well as those designated ‘Essential Future’ functions).

A system **MAY** claim conformance to either the Core or Advanced Conformance levels, if it implements all the
mandatory criteria for the functions at the conformance level for which the claim is being made.

Functions designated with the priority ‘Essential Now’ indicate core functionality. These functions are required to
be implemented in order to claim conformance to E-Application, regardless of the level of conformance (i.e., core
or advanced) to which the claim is made.

Functions designated with the priority ‘Essential Future’ indicate advanced functionality. These functions are
required to be implemented in order to claim advanced level conformance. ‘Essential Future’ functions become
mandatory 18 months after publication of this Functional Profile and thus, required for immediate implementation
in order to claim conformance at either the core or advanced levels.

**Conformance Clause for a vendor system functional domain profile**

Conformance is defined for My-EHRsystem. All functions in this Functional Profile are mandatory, are deemed
as ‘essential now’, and SHALL be implemented in order to conform to this Functional Profile.

**Conformance Clause for a community of interest functional companion profile**

Conformance is defined for BuyMyDiabetesEHR. To conform to this functional companion profile, all functions
labeled as ‘essential now’ **SHALL** be available and have been implemented, , and all functions labeled ‘essential
now’ in the Long Term Care or Ambulatory domain profile must also be available and implemented. Functions
labeled ‘essential future’ are optional, in that they are present for informational purposes only and **MAY** be
implemented in future functional companion profiles.

#### Interpreting and Applying a Conditional ‘SHALL’ (Reference)

Conformance criteria in the FM and those created can be structured in the simple format an Actor followed by
normative verb followed by action or property. For example: The system **SHALL** capture demographic information
as part of the patient record.

However, there are two conditional forms for which if the condition is true, then the following text must apply. One
is If/Then. If condition, then Actor followed by normative verb followed by action. If the condition is not met (i.e.,
false) then ignore the rest of the sentence. For example, IF data is exchanged with internal or external systems,
THEN the system **SHALL** conform to function IN 5.1 (Interchange Standards)

The other is a ‘Dependent Shall’ format. Actor followed by normative verb followed by action/interaction followed
by ‘according to scope of practice, organizational policy or jurisdictional law’. For example, "The system SHALL
enable EHR-S security administrators to grant authorizations to principals according to scope of practice,
organizational policy, or jurisdictional law."

The following example of a Functional Model ‘dependent shall’ criterion will be used to illustrate conditional
concepts throughout this section.
> Functional Model criterion: The system SHALL enable EHR-S security administrators to
grant authorizations to principals according to scope of practice, organizational policy, or
jurisdictional laws.

#### General Concepts

The purpose of the ‘dependent shall’ is to allow Functional Profiles to constrain a Functional Model ‘shall’ criteria
based on situational conditions such as policy and legal implications. Specifically, the ‘dependent shall’ criteria
in the Functional Model are ‘shall’ criteria + a dependency, where the dependency is defined by:
* Scope of practice which applies to the EHRs user’s scope of practice and refers to best practices within
the user’s discipline – which may be care setting specific or not.
* Organizational policy which refers to a plan or course of action intended to influence and determine
decisions, actions, and other matters of a group of persons organized for a particular purpose within an
association and structure through which individuals cooperate systematically to conduct business.
* Jurisdictional law which refers to the territorial range of authority or control with the power, right, or
authority to interpret, apply, and declare the body of rules and principles governing the affairs of a
community and enforced by a political authority; a legal system.

The structure of the ‘dependent shall’ criteria in the Functional Model is the same as the ‘shall’ criteria except with
the addition of the phrase “in accordance with scope of practice, organizational policy or jurisdictional law” or
other appropriate grammatical tie-in words (e.g., based on rather than in accordance). Note that all three
dependencies are present in the Functional Model ‘dependent shall’ criteria. It is the Functional Profile that
narrows it to any one dependency or any combination of the three. Moreover, in the Functional Profile, the
specific scope of practice, organizational policy, and/or jurisdictional law which necessitates evoking the
‘dependent shall’ is explicitly identified.

For example: (derived from the Functional Model criterion above)
> Functional Model criterion: The system SHALL enable EHR-S security administrators to
grant authorizations in accordance with HIPAA.

The difference between a ‘shall’ criterion and a ‘dependent shall’ criterion is shown in Table 3 below.
||‘SHALL’ Criterion|‘Dependent SHALL’ Criterion| 
|---|---|---|
|Be present in the Functional Profile|Yes, either verbatim or modified (e.g., constrained or refined)|Yes, verbatim.
If dependency exists, add additional criteria reflecting the dependency.|
|Implemented by EHR systems|Yes.|Situational - only implement if the dependency exists.<br/>Specifically, EHR system does not implement the ‘dependent shall’ criterion (as copied from the FM), but does implement additional ‘shall’ criteria created to reflect the dependency.|

Table 3 Differences between 'shall' and 'dependent shall'

#### Rationale for ‘Dependent SHALL’

The reason for using a ‘dependent shall’ in the Functional Model is to highlight these criteria and bring them to
the attention of the reader – both developers of Functional Profiles as well as other users. These criteria are
considered to be special cases, where there are one or more dependencies that affect these criteria, across
multiple care settings. Using the ‘dependent shall’ ensures that developers of all Functional Profiles address the
criterion and consciously decide whether the criterion in question is applicable, based on the stated dependency.
Regardless of whether a dependency exists or not, the ‘dependent shall’ is copied verbatim into the Functional
Profile. The reasons for this are:
* Adherence to the rule that a ‘shall’ criterion is always inherited by the Functional Profile.
* Consistency with handling the ‘dependent shall’ under all conditions (i.e., when there are dependencies and when there are not.
* Retention of the ‘dependent shall’ so that it is present for derived profiles.
* Retention of the ‘dependent shall’ so that it remains effective for this profile if future requirements change (i.e., the dependency may not be applicable at this present time, but may be applicable in the future due to changes in scope of practice, organizational policy or jurisdictional law.

#### How to Apply the ‘Dependent SHALL’

The way to interpret and apply a ‘dependent shall’ criterion in a functional domain profile is as follows:
* Copy the criterion into the Functional Profile.
* Review the criterion and determine if any of the dependencies are applicable to the Functional Profile.

##### Dependency exists

If one or more dependencies are applicable to the Functional Profile (e.g., there are jurisdictional legal
requirements), add one or more ‘shall’ criteria that refine and further constrain the ‘dependent shall’ with
respect to the dependencies.

For the new criteria, add an explanation and/or citing for the dependency. For example, jurisdictional
legal requirements for this Functional Profile are defined by Federal Regulations (see 45 CFR Parts
160, 162 and 164 – The HIPAA Security Rule. The explanation or citing may be in an appendix. It is
likely that multiple criteria will reference the same explanation or citing.

Examples:

Functional Profile criteria
1. The system SHALL enable EHR-S security administrators to grant authorizations to principles in
accordance with HIPAA*.
2. The system SHALL enable EHR-S security administrators to grant authorizations for roles in
accordance with 42 CFR Part 2*.

**Dependency Explanation**
*For a U.S. realm Functional Profile, the Health Insurance Portability and Accountability Act of 1996
(HIPAA) as well as other jurisdictional legal requirements or other more stringent requirements would
be applied to ‘dependent shall’ criteria in the Functional Profile.

<table>
<tr><th>FM</th>
<th>Dependency Applicable?</th>
<th>Applicability</th>
<th>Functional Profile</th></tr>
<tr><td rowspan="4">Dependent SHALL</td><td rowspan="4">Yes</td><td>Mandatory</td><td>Copy SHALL from FM</td></tr>
<tr><td>Mandatory</td><td>Add additional criteria to reflect the dependencies. Use ‘shall’.</td></tr>
<tr><td>Mandatory</td><td>Add explanation or citing</td></tr>
<tr><td>Optional</td><td>Add additional criteria derived from ‘dependent shall’. Use ‘shall’, ‘should’ or ‘may’.</td></tr>
<caption>Table 4 Summary of actions when dependency exists</caption>
</table>

##### No Dependency exists

If no dependency is applicable to the functional domain profile (i.e., there are no scope of practice,
organizational policies or jurisdictional legal requirements that apply), then document the rationale for
deciding that no dependencies apply. This explanation may be in an appendix. It is likely that this
explanation will apply to multiple ‘dependent shall’ criteria.

<table>
<tr><th>FM</th>
<th>Dependency Applicable?</th>
<th>Applicability</th>
<th>Functional Profile</th></tr>
<tr><td rowspan="4">Dependent SHALL</td><td rowspan="4">No</td><td>Mandatory</td><td>Copy SHALL from FM</td></tr>
<tr><td>Mandatory</td><td>Add explanation</td></tr>
<tr><td>Optional</td><td>Add additional criteria derived from ‘dependent shall’. Use ‘shall’, ‘should’ or ‘may’.</td></tr>
<caption>Table 5 Summary of actions for when no dependencies</caption>
</table>

Add additional criteria – regardless of whether a dependency exists or not.

It is always permissible for a Functional Profile to add new criteria. Add new criteria that are derived
from the ‘dependent shall’. Use any keyword: ‘shall’, ‘should’ or ‘may’ (see Section 3) in these new
criteria.

Examples:
1. The system **SHOULD** enable EHR-S security administrators to grant authorizations to principals.
2. The system **MAY** enable EHR-S security administrators to grant authorizations for roles.
3. The system **SHOULD** enable EHR-S security administrators to grant authorizations within contexts.
4. The system **SHALL** enable EHR-S security administrators to grant authorizations for roles for organizations with 10 employees or more.
