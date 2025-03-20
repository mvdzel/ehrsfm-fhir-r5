# Glossary

## Preface <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a>

Portions of this Glossary Clause are classified as NORMATIVE, including
the Action-Verb Structure Section (8.4). See section by section labels.
The Glossary is provided as guidance for preparing and interpreting HL7
Electronic Health Record and Personal Health Record System Functional
Models (EHR-S FM and PHR-S FM respectively) and Functional Profile (FP)
specifications and conformance statements. The goal is to promote
clarity and consistency when interpreting and applying language of the
FMs.

This Glossary is intended to be international in application. However,
each realm may want to adjust terms to their own language.

## Introduction <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

The Health Level Seven International (HL7) EHR-S and PHR-S FM Glossary
is an HL7 reference document that provides a set of definitions and
guidelines in order to ensure clarity and consistency in the terms used
throughout the FMs and in related FPs. The Glossary includes the
definition of important terms used in the expression of EHR and PHR
system functionalities, and comprises a consensus-based list of
Action-Verbs and specific guidelines for constructing conformance
criteria (CC).

Action-Verbs play a critical role in phrasing conformance criteria.
Extensive efforts were made to categorize and normalize Action-Verbs and
to develop guidelines for creating clear and consistent CCs throughout
the FMs and in related FPs. Continuity with previous FM versions is
provided by including Glossary terms that have been deprecated,
accompanied by suggestions for preferred replacement terms. Vigorous
efforts were deployed to reduce the ambiguities inherent in the use of
human language; care was used to respect the fundamental meaning of
words and to avoid domain specific usage of terms.

## Overview <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a>

HL7's EHR Work Group has unified glossaries for both the EHR-S and PHR-S
FMs to ensure consistency. Each FM has a unique focus and coverage in
the health information domain with specific system functional
requirements, yet readers are often the same people. It is expected that
FPs created within the context of either FM will align with this
Glossary. However, this Glossary will not provide definitions for all
the terms used in FPs. FPs will typically use context-specific,
realm-specific, or specialized terms associated with their area of
focus, and may need to incorporate a complementary glossary for these
special terms.

In the case where FPs are merged, care should be exercised to ensure
that the same Action-Verbs are used with the same meaning, and that
identical meanings are conveyed with the same Action-Verb. It is
recommended that existing FPs be re-examined and updated to closely
align with the current set of Action-Verbs.

Some common terms and Action-Verbs have not been included in this
Glossary. For example, terms like 'computer', 'keyboard', 'archive' and
'compact' are considered general computer field terms that do not need
to be defined here. Some other terms reflect functionalities inherent in
any computer system and are not defined here, e.g. compute. Readers who
desire definitions of terms not covered in the Glossary are invited to
consult trusted dictionaries or encyclopedias. Where definitions of
terms are taken from recognized sources, specific references are
included.

## The Action-Verb Structure <a href="https://hl7.org/fhir/versions.html#std-process" title="Normative Content" class="normative-flag">N</a>

The Action-Verbs to be used for writing conformance criteria in the
EHR-S FM and the PHR-S FM are organized in two hierarchies, each with
its own specific set of Action-Verbs to:

-   Secure and operationalize systems;

-   Manage data and the health record.

Each hierarchy consists of Action-Verbs that collectively represent a
logical set of actions.

### Secure (System) Hierarchy

The Secure System hierarchy, as show in Table 6, provides Action-Verbs
for controlling access (authenticating and authorizing users), tracking
activities (logging and auditing), and sustaining operations. This
hierarchy has one parent, Secure (System), and three (3) intermediate
children: Control Access, Track, and Sustain (Operations).

<table class="grid">
<caption><p>Table 6: Action-Verbs supporting the Secure System Hierarchy</p></caption>
<colgroup>
<col style="width: 9%" />
<col style="width: 8%" />
<col style="width: 10%" />
<col style="width: 8%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr class="header">
<th colspan="5">Secure (System)</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td colspan="2">Control Access</td>
<td colspan="2">Track</td>
<td>Sustain (Operations)</td>
</tr>
<tr class="even">
<td>Authenticate</td>
<td>Authorize</td>
<td>Log</td>
<td>Audit</td>
<td></td>
</tr>
</tbody>
</table>

-   Control Access: to limit the use of a system to only those who are
    permitted

-   Track: to govern; control; administrate; oversee; inspect; examine;
    assess; observe; monitor; police; enforce; check

-   Sustain (Operations): to keep the system running correctly (e.g.,
    sustain operations; quality; integrity; throughput; mirror;
    reliability; failover; failsafe; versioned; virus-free; leak-free;
    up-to-date; safeguard)

### Data Management Hierarchy

The Data Management hierarchy provides Action-Verbs for the complete
range of data handling actions by a system. The hierarchy, as show in
Table 7 has one parent, Manage (Data), and six (6) children with
subsets: Capture, Maintain, Render, Exchange, Determine, and
Manage-Data-Visibility.

<table class="grid">
<caption><p>Table 7: Action Verbs supporting the Data Management
Hierarchy</p></caption>
<colgroup>
<col style="width: 9%" />
<col style="width: 8%" />
<col style="width: 10%" />
<col style="width: 8%" />
<col style="width: 7%" />
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 11%" />
<col style="width: 8%" />
<col style="width: 7%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="header">
<th colspan="11">Manage (Data)</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Capture</td>
<td colspan="3">Maintain</td>
<td colspan="3">Render</td>
<td>Exchange</td>
<td colspan="2">Determine</td>
<td>Manage Data Visibility</td>
</tr>
<tr class="even">
<td rowspan="2">Auto-populate<br/>
Enter<br/>
Import<br/>
Receive<br/></td>
<td>Store</td>
<td>Update</td>
<td>Remove</td>
<td rowspan="2">Extract</td>
<td rowspan="2">Present</td>
<td rowspan="2">Transmit</td>
<td rowspan="2">Export<br/>
Import<br/>
Receive<br/>
Transmit<br/></td>
<td rowspan="2">Analyze</td>
<td rowspan="2">Decide</td>
<td rowspan="2">De-Identify/<br/>
Re-Identify<br/>
Hide/<br/>
Unhide<br/>
Mask/<br/>
Unmask<br/></td>
</tr>
<tr class="odd">
<td>Archive<br/>
Backup<br/>
Decrypt<br/>
Encrypt<br/>
Recover<br/>
Restore<br/>
Save<br/></td>
<td>Annotate<br/>
Attest<br/>
Edit<br/>
Harmonize<br/>
Integrate<br/>
Link/Unlink<br/>
Tag/Untag<br/></td>
<td>Delete<br/>
Purge<br/></td>
</tr>
</tbody>
</table>

The first three subsets cover the capture, maintenance and rendering of
data as follows:

-   Capture:

    -   Auto-populate fields of data based on partially filled
        information

    -   Enter data manually

    -   Import data from an external source (which may be a device)

    -   Receive data from another system (which may be a device)

-   Maintain:

    -   Store:

        -   Archive data to external media

        -   Backup data on backup storage media

        -   Encrypt data for security and privacy purposes

        -   Decrypt data to reverse encryption

        -   Recover/Restore data from backup

        -   Save data on local media

    -   Update:

        -   Annotate data with notes

        -   Attest data to verify and approve

        -   Edit data by modifying it

        -   Harmonize data across multiple sources

        -   Integrate data together

        -   Link data to other data

        -   Unlink data to remove prior linkage(s)

        -   Tag data with labels

        -   Untag data to remove prior label(s)

    -   Remove:

        -   Delete/Purge to remove data from storage media or
            directory(ies)

-   Render:

    -   Extract data based on certain criteria

    -   Present data on an attached device

    -   Transmit data to external systems or devices

The next subset pertains to the Exchange of data from one part or system
to another or others:

-   Exchange:

    -   Export (transfer) data in a format that can be used by other
        systems

    -   Import data from an external source (which may be a device)

    -   Receive data from another system (which may be a device)

    -   Transmit data to another party/system

The next subset provides verbs for the determination of actions in
processing data:

-   Determine:

    -   Analyze data using rules and analytical steps

    -   Decide appropriate actions as a result of that analysis

The final subset allows the construct of statements restricting the
visibility of data and reversing those actions:

-   Manage-Data-Visibility:

    -   De-Identify data as to prevent associating the data to a
        specific person

    -   Re-Identify data to reverse a prior de-identification

    -   Hide data so that only authorized users can see that the data
        exist

    -   Unhide data to reverse a prior hide operation

    -   Mask data so that users can see that the data exist but only
        authorized users can actually view the actual data

    -   Unmask data to reverse a prior mask operation

### How Action-Verbs are defined

Action-Verbs are defined in the following manner:

For an Action-Verb that has a parent, the Action-Verb's definition will
start with the immediate parent verb and then a restatement of the
meaning of the Action-Verb, followed by at least one (1) example labeled
as such. Examples will use the Action-Verb being defined with
explanatory descriptions where relevant. Such as:

-   PRESENT (Action-Verb): To RENDER (the parent Action-Verb) data by
    delivering the data to local users in a meaningful and appropriate
    way. For example, the system may PRESENT an alert automatically when
    a newly-arriving laboratory value is received that is out of normal
    range.

For a top level Action-Verb, the definition will include the next
immediate level of children, followed by at least one (1) example
labeled as such. Examples will use the Action-Verb being defined with
explanatory descriptions where relevant. An illustrative example
follows:

-   MANAGE (DATA) (Action-Verb): To handle data by capturing,
    maintaining, rendering and exchanging data, determining actions
    about data, and managing data visibility. For example, the system
    shall provide the ability for a user to MANAGE patient and family
    preferences as they pertain to current treatment plans.

Table 8 lists the full set of eligible Action-Verbs and their logical construction:

<table class="grid">
<caption><p>Table 8: Action Verbs and their Logical Construction</p></caption>
<colgroup>
<col style="width: 9%" />
<col style="width: 90%" />
</colgroup>
<thead>
<tr class="row-ro1"><th style="text-align:left;width:0.889in; ">
<b>Action-Verb</b>
</th><th style="text-align:left;width:0.889in; ">
<b>Construction</b>
</th></tr>
</thead>
<tbody><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Analyze</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To DETERMINE actions in the flow of processing data by comparing, correlating, or weighting certain data and by applying clinical or business rules, hence leading to a decision (see DECIDE). For example, the system may ANALYZE patient information using a drug-interaction database and a set of clinical rules. Another example is that the system may ANALYZE various protocols relative to a patient’s condition. Another example is that a person may ANALYZE a proposed update to a patient’s home address and DECIDE to reject the proposed update.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Annotate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by attaching comments or notes to the data without editing the data. For example, an Attending physician may ANNOTATE the information entered by the Resident physician before signing the report.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Archive</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by moving the data to long-term storage media and deleting or purging data on the original online storage, according to scope of practice, organizational policy, and/or jurisdictional law. For example, the system at the Oak Street Hospital automatically ARCHIVES patient-related data that is older than eight years by encrypting and compressing it, moving it to long-term storage, purging it, identifying the data by month and year, and creating a pointer to the archived data. Another example is that a system may automatically ARCHIVE outpatient clinic schedules that are being replaced.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Attest</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE information by ATTESTing that an EHR record (or part of an EHR record) is genuine.. For example, a resident physician may ATTEST that the information contained in an EHR record was created by her. Another example is that an attending physician may annotate a resident’s version of the record and then ATTEST to those changes. Note: Attestations may be applied, affixed or bound to an EHR record, for example, via a digital signature, certification, or other verifying mark.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Audit</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To TRACK system-initiated or user-initiated activities by analyzing logs based on policies or rules. For example, the system may automatically AUDIT the daily log for multiple-failed-logon-attempts. Another example is that an administrator may AUDIT the excessive use of extraordinary (i.e., “break-the-glass”) access to certain patient information in the Emergency Department.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Authenticate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CONTROL ACCESS to a system by validating the identity of a user, another system or a device before authorizing access. For example, the system may AUTHENTICATE Dr. Jones by validating his identity using a UserID and a biometric device. Another example is that the system rejects Sara Smith’s attempt to AUTHENTICATE to the system after three failed password entries.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Authorize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CONTROL ACCESS to a system by applying permissions to use certain functionality or to view certain data. For example, the system may AUTHORIZE Dr. Jones, an Emergency Department physician, to view Emergency Department patient records (note: We assume that the administrator has entered a set of permissions for all Emergency Department physicians). Another example is that the system does not AUTHORIZE deletion by Sara Smith of a patient record that has already been signed.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Auto-populate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CAPTURE data by inputting it automatically using previously-existing data, providing a default value, or deriving it from other data, or by following various data-entry business rules. For example, the system may AUTO-POPULATE the city, state/province, and country fields when a user enters a zip-code. Another example is that the system may AUTO-POPULATE a newborn’s home address with the mother’s home address.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Backup</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by placing a copy of the data onto an electronically-accessible device for preservation in case the original is lost, corrupted, or destroyed. For example, a system may BACK UP the incremental changes made to a patient’s record by storing it locally on a daily basis. Another example is that an administrator may BACK UP a complete copy of certain data by storing it at an offsite facility.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Capture</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by auto-populating, entering, importing, or receiving the data, either through human intervention or automated means. For example, a system may CAPTURE patient’s data entered by a physician through the keyboard or sent by the physician using a mobile device. Another example is that the system may CAPTURE laboratory results by automatically receiving laboratory data or by keyboard entry for locally performed tests.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Control Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To AUTHENTICATE users and/or systems and AUTHORIZE access to functionality and/or data. For example, the system may CONTROL ACCESS to the patient’s data by authenticating Dr. Jones’ identity and authorizing him to update his patient’s records. Another example is the system may CONTROL ACCESS to the system by refusing a hospital visitor the ability to authenticate to the system. NOTE: the set of CONTROL ACCESS Action-Verbs requires data specifying permissions. This permission data is managed via the MANAGE data Action-Verbs set.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Decide</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To DETERMINE actions in the processing of data by choosing a certain alternative based on an analysis, and acting accordingly. For example, the system may DECIDE to render a notification to off-duty nurses to report for duty based on clinic rules and the receipt of a tornado alert. Another example is that the system may DECIDE to RENDER an alert to a clinician that a prescribed drug is contraindicated with the patient’s listed allergies, based on the analysis conducted.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Decrypt</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by converting encrypted data back into its original form, so it can be understood. For example, the system may DECRYPT clinical data received from an authenticated external laboratory system.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>De-identify</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by removing identifiers from data in such a way that the risk of identifying an individual is very small under the circumstances, as specified by scope of practice, organizational policy, and/or jurisdictional law. For example, a system may DE-IDENTIFY data for a researcher who wants to perform an analysis of drug effectiveness on diabetic patients. Another example is where a hospital may DE-IDENTIFY data for a set of patients to transmit to a university professor looking for illustrative cases for educational work.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Delete</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To REMOVE data by making it inaccessible to the application. For example, a user may DELETE an existing patient-appointment at the request of the patient. Note: In the case where the data becomes invalid but needs to remain in the system, the word “TAG” is preferred over the word “DELETE” or the word “Nullify”. This type of action is considered a data “Tagging” process and not a data deletion process. For example, a health information management professional may desire to TAG a certain clinical term as obsolete, but the term needs to remain in the system for backward compatibility purposes.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Determine</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by analyzing it and making a decision based on the analysis. For example, the system may DETERMINE the possible severity of a patient’s allergic reaction to a proposed drug by analyzing the patient’s profile against a drug database and deciding whether the clinician should be presented with an alert or not. Another example is that a system may DETERMINE the next steps in a workflow based on an analysis of a patient’s laboratory results, the patient’s profile, and the clinical rules of the clinic, this analysis leading to a decision as to the appropriate next steps in the clinical process.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Edit</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by correcting, amending, appending, or augmenting the data. For example, the physician may EDIT the patient’s home address by correcting the civic number from 368 to 638 Oak Street. Another example is that a physician may EDIT existing notes about an injury by appending an x-ray picture of a broken bone.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Encrypt</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by transforming the data into a form that is difficult to understand by unauthorized people or systems. For example, the system may ENCRYPT sensitive information such as the patient’s financial information.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Enter</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CAPTURE data by inputting it manually (for example, via a keyboard) or through other input devices. For example, the user may manually ENTER the patient’s street address via the keyboard. Another example is that the user may ENTER the patient’s body weight via an electronic weight scale.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Exchange</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by importing, receiving, exporting, or transmitting the data between systems. For example, the PHR Account Holder may exchange family history information with the PHR systems of other family members.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Extract</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To RENDER data by locating, retrieving and possibly assembling data based on certain criteria and for certain purposes. For example, a system may EXTRACT for a clinician all the x-ray reports regarding the patient’s chest. Another example is that the system may automatically EXTRACT allergy history when the physician enters a prescription. Another example is that a system may EXTRACT for a researcher the number of pneumonia-like cases treated at the Emergency Department within a specific time period. Another example is that a system may EXTRACT and aggregate information using a cohort of patients who have pneumococcal disease and categorize that cohort by specific age-ranges.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Harmonize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by aligning and reconciling it with other information in the system, or with the data of another system (or systems). For example, the system may HARMONIZE a patient’s new home address with the data of systems of other members of the care-team.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Hide</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by making specific information invisible so that the existence of the information is not expressed except to authorized users; viewers of the patient record receive no indication that the hidden information exists or does not exist. For example, the system may HIDE the existence of a patient’s psychiatric record from all viewers except for the patient’s psychiatrist. Note: the verb “unhide” is an acceptable verb to reverse the action of hiding.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Import</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CAPTURE data into a local system by proactively accessing data from an external source and then downloading and integrating the data into the local system. For example, the system may IMPORT the latest drug trial data every Friday evening. Another example is that the user may IMPORT various sets of best practices related to juvenile diabetes.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Inactivate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To maintain control of data by removing access to the data in such a way as the data is no longer active for a certain reason. For example, the PHR Account Holder may no longer employ a list of local oncologists, while the PHR Account Holder is stationed in another country for a while.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Integrate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by merging other data with the existing data in a controlled manner. For example, a user may INTEGRATE summaries of health care services that were provided in another jurisdiction into the patient’s local record. Another example is that an EHR system may INTEGRATE a single-sign-on application with the EHR system’s existing user-authentication services. Another example is that an EHR system may INTEGRATE multiple third-party modules to enhance its capabilities.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Link</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by associating one piece of data with another piece of data. For example, the system may LINK a patient’s encounter note with the patient’s laboratory results. Another example is that a system may LINK attestable changes to a patient’s record to the author’s identifying information.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Log</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To TRACK system-initiated or user-initiated activities (including access to data and/or functionality, attempts to access data and/or functionality, actions performed on data and/or functionality, and changes to system characteristics or versions) by storing a chronological trace of these activities. For example, the system may LOG the fact that modifications were made to a patient’s record by storing the date, time, and identity of the user who modified the record as well as what changes were made to that record. Another example is that the system may LOG the fact that updates were applied to a drug-interaction database table, by storing the date and time at which it was updated.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Maintain</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by storing, updating, and/or removing the data within a system. For example, a system may provide the ability for a clinician to MAINTAIN data by keeping or discarding it. Another example is that a system may provide the ability for a clinician to MAINTAIN data by correcting or annotating it.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Manage (Data)</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To handle data by capturing, maintaining, and rendering data, determining actions about data, and managing data visibility. For example, the system may provide the ability for a user to MANAGE patient and family preferences as they pertain to current treatment plans. Another example is that a clinician’s system may provide the ability for the clinician to MANAGE patient data by creating a patient’s record, updating a clinical note, utilizing clinical decision support tools, and transmitting the patient’s billing information.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Manage-Data-Visibility</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by de-identifying/re-identifying, masking/unmasking or hiding/unhiding that data. For example, the system may provide the ability for an administrator to MANAGE-DATA-VISIBILITY in terms of who is allowed to view what specific patient data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Mask (verb)</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by obscuring (masking) specific data elements in order that this information is not available except to authorized users; viewers of the patient record can see that the data exists but cannot see actual contents. For example, the administrator may MASK the pregnancy status of all patients who are below the age of eighteen except for the obstetric unit staff. Note: the verb “unmask” is an acceptable verb to reverse the action of masking.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Present</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To RENDER data by delivering the data to local users in a meaningful and appropriate way. For example, the system may PRESENT to a physician (upon manual request) a list of patients who are scheduled for care today, ordered by time-of-day, with the patient’s known diagnosis using the physician’s preferred terminology and language of choice. Another example is that the system may PRESENT an alert automatically when a newly-arriving laboratory value is received that is out of normal range. Another example is that a system may PRESENT to a physician a patient’s lung respiration sounds. Another example is that a system may PRESENT patient-instructions using an audio and video system. Note: It is reasonable to assume that any data that is presented ought to be formatted, filtered, translated, transformed, mapped, and/or normalized, etc., as appropriate.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Pseudonymize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MAINTAIN data by creating a pseudonym for its subject. For example, the name "Robert Q. Jamison" may be replaced with a pseudonym such as "John Smith" in a health care document before sharing it with others.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Purge</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To REMOVE data by making it unrecoverable at the storage and/or media-level. For example, the system may PURGE the patient record for John Smith according to a rule that targets all records that are older than seven years. (Note: Destroy and Purge are synonyms; PURGE is the preferred term.)</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Receive</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To CAPTURE data from an external source by taking in that data without manual / real-time user intervention. For example, the system may RECEIVE various emails for a clinician who will later review them. Another example is that the system may RECEIVE from authenticated and authorized external systems laboratory results for a given patient. Another example is that the system may RECEIVE a facsimile transmission from an external device.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Recover</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by rebuilding original data using backups of data. For example, the system may RECOVER last week’s data following a hard disk failure, using an offsite backup copy. (See BACKUP.)</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Re-identify</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by combining data in such a way that the patient’s identity is re-established according to scope of practice, organizational policy, and/or jurisdictional law. For example, the system may RE-IDENTIFY de-identified data by providing a key that allows authorized users to re-establish the link between a given patient and that patient’s de-identified data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Remove</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MAINTAIN data by making the data inaccessible or unrecoverable according to scope of practice, organizational policy, and/or jurisdictional law. For example, a system may, at a physician’s request, REMOVE by purging patient information that was received by mistake. Another example is that a system may, upon request by an administrator, REMOVE by deletion the schedule of outpatient clinic opening hours. NOTE 1: The data may be deleted either by removing the data’s pointer from the directory or by overwriting the data in such a way that the original data is unrecoverable. NOTE 2: In the case where the data becomes invalid but needs to remain in the system, the word TAG is preferred over the word REMOVE or “Nullify”. This type of action is considered a data “Tagging” process and not a data deletion process. For example, a health information management professional may desire to TAG a certain clinical term as obsolete, but the term needs to remain in the system for backward compatibility purposes.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Remove Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MAINTAIN data by disallowing access to the data in such a way as the data can no longer be retrieved.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Render</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE data by extracting, presenting and transmitting data to users or systems. For example, the system may RENDER a list of patients with a given disease that has been extracted from the clinic’s active patient records. For example, the system may RENDER laboratory results by presenting them on a computer screen. Another example is that the system may RENDER data by transmitting a drug prescription to a pharmacy.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Restore</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data to the production system by using previously archived data. For example, the system may RESTORE patient-encounter data for a returning patient whose data had been archived due to inactivity. Another example is that the system may RESTORE, for evidentiary support, patient data that had been archived after the patient expired. (See ARCHIVE.)</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Save</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To STORE data by placing it onto an electronically-accessible device for preservation. For example, a clinician may SAVE a given patient’s demographic data or a newly-prescribed medication. Another example is that an administrator may SAVE an updated list of physicians that have practice privileges at the local hospital.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Secure (System)</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To ensure system reliability and integrity by controlling access to system functionality and/or data, tracking activities, and sustaining system operations. For example, the system may provide the ability for an administrator to SECURE a system by setting configuration parameters for controlling access, tracking, and sustaining system operations. Another example is that the system may SECURE access to a patient’s record by controlling access to its content, tracking users who have modified the patient’s record, and sustaining the record’s availability on a continual basis.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Send</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To OUTPUT data from the PHR Account Holder’s system by exporting it in such a way as to (passively, automatically) route it to another system. For example, a PHR Account Holder’s system may (passively, automatically) send weekly reports to a diabetes specialist’s system regarding the PHR Account Holder’s current weight.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Store</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MAINTAIN data by backing up, decrypting, encrypting, restoring and saving that data onto electronically accessible devices. For example, a clinician may STORE a given patient’s demographic data or a newly-prescribed medication. Another example is that an administrator may configure a system to STORE progressive copies of certain data on a regularly-scheduled basis for backup purposes. Note: data may be stored as plain text or in encrypted or compressed form.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Sustain (operations)</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To SECURE a system by promoting actions that enable the system to perform predictably and as intended. For example, a system may SUSTAIN (OPERATIONS) by applying business rules that enforce role-based access to the authorization management portion of the system, thus protecting the PHR Account Holder’s data according to pre-determined security and privacy rules.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Synchronize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To OUTPUT data from the PHR Account Holder’s system by exporting it in such a way as to coordinate certain data with another system (or systems). For example, the PHR Account Holder may coordinate the medications prescribed by two physicians with a list of home remedies so that each relevant, authorized stakeholder has a current list of the PHR Account Holder’s medications/remedies.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Tag</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by marking it for special use. For example, a nurse may TAG the previous week’s records for patients that presented with a severe cough and fever. Another example is that a general practitioner may TAG certain data for review by an oncologist. Another example is that an administrator may TAG an interchange standard version as being deprecated. Note: see “flag” if the meaning is to signal a situation. Note: the verb “untag” is an acceptable verb to reverse the action of tagging.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Track</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To SECURE a system by logging and auditing system-initiated and/or user-initiated activities. For example, the system may TRACK the amount of time that the system was unavailable last month. Another example is that the system may provide the ability for an administrator to TRACK the number of active users of a newly-installed set of system functionality.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Transmit</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To RENDER data by delivering the data to devices or other systems in a meaningful and appropriate way. For example, the system may (without human intervention) TRANSMIT an alert to a physician’s beeper. Another example is that the system may (upon human intervention) TRANSMIT a given patient’s encounter summary to an external facility. Another example is that the system may TRANSMIT data to another facility after mapping local codes to national codes. Note: It is reasonable to assume that any data that is transmitted ought to be formatted, filtered, translated, transformed, mapped, and/or normalized, etc., as appropriate.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Unhide</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by making visible the existence of previously hidden information (see HIDE). For example, the system may provide the ability for a patient to UNHIDE his psychiatric record, and hence the existence of that part of his record becomes visible to all authorized clinicians.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Unmask</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MANAGE-DATA-VISIBILITY by making masked information visible. For example, the administrator my desire to UNMASK certain patient financial information for the admission Department. For example, a system may provide the ability for an emergency department physician to UNMASK a patient’s pregnancy status that was presented by the system as “******”, to reveal a status of “Pregnant”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Untag</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To UPDATE data by removing marking for special use. For example, a nurse may UNTAG the previous week’s records for patients that presented with a severe cough and fever that had been previously tagged. Another example is that a general practitioner may UNTAG certain data after completion of review another provider.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Update</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To MAINTAIN data by annotating, editing, harmonizing, integrating, linking and tagging the data. For example, a clinician may UPDATE a patient’s medication dosage. Another example is that the system may UPDATE a patient’s record.</p>
</td></tr>
</tbody></table>

### Deprecated Action-Verbs

The use of verbs that are specific in definition and use allows for
greater understanding and consistency of conformance criteria throughout
the model.

In this Glossary, the term "deprecated" is used to identify Action-Verbs
that were used in conformance criteria (in previous FM Releases) but are
not part of the updated hierarchy of Action-Verbs. It is recommended
that deprecated Action-Verbs not be used in Conformance Criteria.

Table 9 lists a set of deprecated verbs and possible alternatives:

<table class="grid">
<caption><p>Table 9: Deprecated Action-Verbs and Possible Alternative(s)</p></caption>
<colgroup>
<col style="width: 9%" />
<col style="width: 90%" />
</colgroup>
<thead>
<tr class="row-ro1"><th style="text-align:left;width:0.889in; ">
<p>Deprecated Action-Verb</p>
</th><th style="text-align:left;width:0.889in; ">
<p>Possible Alternative(s)</p>
</th></tr>
</thead>
<tbody>
<tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use CONTROL-ACCESS if the context is one of controlling access to the system.. Use RENDER or PRESENT or another relevant Action-Verb when the context is one of accessing data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Affirm</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG (with an appropriate qualifier). Affirm, Assert, Declare, Indicate, and State are synonyms.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Alert</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “RENDER or PRESENT or TRANSMIT an alert to a person or another system (including a device)”. An Alert typically occurs after analyzing some data and arriving at a decision that someone must be alerted. See DETERMINE for some examples.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Amend</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use EDIT.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Append</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use the term EDIT. This means editing data by adding new data to existing data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Assert</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG (with an appropriate qualifier). Affirm, Assert, Declare, Indicate, and State are synonyms.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Augment</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use EDIT, ANNOTATE, or LINK with the appropriate qualifiers. Augmentation is the addition of information to existing healthcare data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Calculate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “DETERMINE and STORE” or “DETERMINE and PRESENT”, as appropriate in the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Compute</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “DETERMINE and STORE” or “DETERMINE and PRESENT” as appropriate in the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Configure</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “MANAGE configuration parameters for…”. For example, the user may desire to STORE configuration parameters regarding the preferred type of human language. Another example is that an administrator may UPDATE configuration parameters that control external access to the system by restricting access during the weekends.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Conform</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>To comply... Note: The verb ‘Conform’ is used with a special meaning in the FM and is not part of the Action-Verb model. It is a special instruction for including the functional requirements of one function in another function. For example: “The system SHALL conform to function IN.1.1 (Entity Authentication)”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Correct</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use EDIT.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Create</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “DETERMINE and STORE” or “DETERMINE and RENDER” or “DETERMINE and PRESENT” as appropriate to the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Declare</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG (with an appropriate qualifier). Affirm, Assert, Declare, Indicate, and State are synonyms.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Deprecate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG with an appropriate qualifier. Deprecation of certain information may be required when that data becomes invalid, but needs to remain in the system. For example, a health information management professional may desire to TAG a certain clinical term as deprecated, but the term is retained in the system for backward compatibility purposes.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Destroy</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default"> </td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Disable-Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “CONTROL ACCESS by removing permissions to use specific functionality and/or manage specific data”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Disclose</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “RENDER and TAG” with a label that identifies the data’s purpose as “for disclosure use only”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Display</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use PRESENT.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Document</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use ENTER, or “TAG with” appropriate references, or “LINK to” sources.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Eliminate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use DELETE or PURGE as applicable.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Export</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Use RENDER instead.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Flag</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “RENDER an alert”, or “PRESENT an alert”, or “TRANSMIT a notice”, if the intent is to signal a situation (i.e. flag a situation).</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Generate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “DETERMINE and STORE” or “DETERMINE and PRESENT” or “DETERMINE and RENDER“ as appropriate to the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Grant-Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use CONTROL ACCESS.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Identify</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use other Action-Verbs adapted to the context. . For example, instead of ‘…to uniquely identify a patient…’, one should say ‘…to MAINTAIN a unique identifier for a patient…’ Another example is: instead of ‘…to help identify the patient...’, use ‘…help DETERMINE the identity of the patient.’.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Input</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use CAPTURE, ENTER, RECEIVE, IMPORT or AUTO-POPULATE, depending on the context and scope of actions described.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Label (verb)</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Use “TAG with a label”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Merge</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use INTEGRATE.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Modify Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use: “MANAGE data regarding permissions”</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Notify</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “RENDER or PRESENT or TRANSMIT a notification to a person or another system (including a device)”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Nullify</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “TAG as nullified”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Obsolete</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “TAG as obsolete”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Order</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “ENTER the parameters for an order”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Permit Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “AUTHENTICATE a user and AUTHORIZE access based on permissions assigned to that user”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Persist</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “STORE“.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Print</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use RENDER, PRESENT, OR TRANSMIT, depending on the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Prioritize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “TAG with a priority level”, or “DETERMINE priorities”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Provide access to</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use CONTROL ACCESS, or PRESENT, as appropriate to the specific context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Query</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use ANALYZE or RENDER (or its children Action-Verbs), because queries or searches are implied when rendering or analyzing data.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Reactivate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG with an appropriate qualifier. Reactivation of certain information may be required when that data, previously deprecated or made inactive, becomes valid again. For example, a health information management professional may desire to TAG a certain clinical term as reactivated.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Reconcile</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use ANALYZE and DECIDE, or DETERMINE, or HARMONIZE depending on the context and the meaning intended.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Record</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use STORE (or its children Action-Verbs).</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Reject</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use ‘’PRESENT or RENDER a message of rejection” or “TAG as rejected”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Replace</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use EDIT, or “DELETE the old and SAVE the new”, or “TAG as obsolete and SAVE the new”, based on the context.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Report</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “RENDER a report”, or “PRESENT a report”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Repudiate</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “TAG as repudiated or rejected”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Retain</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use STORE (with the possible addition of language that includes the notion that retention management may be needed to accommodate scope of practice, organizational policy, or jurisdictional law). For example, the system may provide the ability to STORE personal health information, and DELETE that data only as allowed by the organization’s data-retention policies.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Revoke-Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “CONTROL ACCESS by eliminating permissions to use system functionality or to manage data”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Search</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use ANALYZE or RENDER (or its children action-verbs), because queries or searches are implied when rendering or analyzing data. For example, instead of saying “The system SHALL provide the ability to search patient records based on previous names”, one can say ‘‘The system SHALL provide the ability to PRESENT a list of records with possible patient name matches using previous patient names”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Select</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “ENTER a selection”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Sign</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “TAG-with-authenticated-signature”. For example, a system may TAG a patient note with an authenticated signature when the physician completes the patient’s note.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>State</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use TAG with an appropriate qualifier. Affirm, Assert, Declare, Indicate, and State are synonyms.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Support</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “PRESENT templates to do XYZ”, or DETERMINE, or other Action-Verbs depending on the context and functionality to specify.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Suspend-Access</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “CONTROL ACCESS by temporarily withholding permissions to use system functionality or to manage data”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Synthesize</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use “ANALYZE and STORE” or “ANALYZE and PRESENT”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Trigger</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, depending on the context, use “DECIDE on a course of action based on an analysis of certain data and rules”, or “DECIDE and RENDER some information (for example, an alert or a notification) based on the analysis of certain data and rules”.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>View</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead, use PRESENT.</p>
</td></tr><tr class="row-ro1"><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Term</p>
</td><td style="text-align:left;width:0.889in; " class="cell-Default">
<p>Instead use...</p>
</td></tr></tbody></table>

## Guidelines for Use <a href="https://hl7.org/fhir/versions.html#std-process" title="Informative Content" class="informative-flag">I</a>

Contributors to the contents of the EHR-S and PHR-S FMs must be
thoroughly familiar with this 'Guidelines For Use' Section. It is
critical to the integrity of the FMs that key terms have a consistent
meaning throughout each FM specification.

### General Guidance

Throughout the EHR-S and PHR-S FMs, terms used for stating Conformance
Criteria (CC) must respect meanings as conveyed in the definitions
provided in this Glossary. Using the Action-Verbs rigorously will result
in clearly written Conformance Criteria (CC) and help ensure consistent
communication of functional requirements. Furthermore, combining various
functional models and functional profiles is facilitated when a
controlled set of terms is used consistently. Therefore, use of synonyms
(as replacements) or local jargon should be avoided.

In the FMs, Statements and Descriptions should be written in
'business-like language' defining, in business and user terms, system
capabilities that support user needs. CCs should be written from the
system's perspective, with rigor and consistency across functional
areas, using Action-Verbs and the guidelines; CCs should not be
duplicates of the Statements and Descriptions. However, scope-wise, both
Statement/Description and corresponding CCs must address the same
functionalities.

CCs represent a fundamental component of the FMs by defining its
functionalities in precise terms. Significant efforts were invested in
developing a set of Action-Verbs with precise definitions that must be
used in the construction of CC. The next section provides specific
guidance on how CC should be composed.

Since various realms may require the use of certain terms (for example,
a term that is embedded in national law), this FM Glossary maintains a
realm-independent perspective. The long-term intent is to construct CCs
that are computable and easy to validate as to their grammar and
contents when it is relevant (i.e., use list of approved Action-Verbs).

### Constructing Rigorous Conformance Criteria

Rigor, clarity and consistency in crafting CCs are of paramount
importance. The following rules are to be followed whenever possible:

-   It is generally preferable to use separate CCs instead of trying to
    include multiple actions in a single criterion, unless such a
    combination provides for an economy of statements and is
    unambiguous.

-   Where an action can be performed both automatically by the system
    and manually upon initiation by the user, CCs should be composed
    with the "provide the ability to" phrase incorporated.

Selected verbs in conformance criteria should be at the proper level of
granularity. If a parent verb in a hierarchy is used, then it means that
the actions of all the children verbs under it [are pertinent and
applicable:]{.underline}

-   For example, instead of saying MAINTAIN clinical data which would
    imply storage, update and deletion of data, one would say STORE and
    UPDATE data if deletion of data was not allowed.

-   For example, if a given CC expects EDIT and TAG to be reasonable
    application of the function, but that ANNOTATE, HARMONIZE,
    INTEGRATE, LINK are unreasonable, then the word MAINTAIN should be
    avoided in lieu of the more precise "EDIT and TAG".

-   An example of multiple Action-Verbs: "The system SHALL provide the
    ability to CAPTURE, STORE, EDIT, and TAG-as-deprecated entries in an
    xxx registry or directory to keep it current."

The general grammar to use in developing rigorous CCs has the following
structure:

-   "The system \[SHALL \| SHOULD \| MAY\] \[provide the ability to\]
    \[Action-Verb\] \[functionality object(s)\] \[participant(s)\]
    \[qualifier(s)\] \['according to user preference, scope of practice,
    organizational policy, and/or jurisdictional law'\]".

<!-- -->

-   The system is the subject of all the Conformance Criteria.

-   \[SHALL \| SHOULD \| MAY\]. It is mandatory that one -- and only one
    -- of these three qualifier verbs be used.

    Meanings are defined in EHR-S FM Conformance Clause document and are
    repeated here for convenience:

    -   SHALL -- to indicate a mandatory functional requirement to be
        followed (implemented) in order to conform. Synonymous with 'is
        required to'.

    -   SHOULD -- to indicate an optional yet recommended functional
        requirement, one that is particularly suitable, without
        mentioning or excluding others. Synonymous with 'is permitted
        and recommended'.

    -   MAY -- to indicate an optional (permissible) functional
        requirement. Synonymous with 'is permitted'.

-   \[provide the ability to\]: optional phrase used to convey when the
    functional requirement may be either initiated by user action or
    automatically by system rules. System rules may be configurable.

-   \[Action-Verb\]: mandatory. The Action-Verb must come from the
    standardized list enumerated in this Glossary and respect the
    definitions provided. When another verb would appear preferable, it
    is suggested to look for that verb in the Glossary definition
    section where it may be listed with suggestions for a replacement
    verb and composition. This guide provides numerous examples.

-   \[functionality object(s)\]: mandatory. Identifies the object(s) of
    the functional requirement.

-   \[participant(s)\]: optional. Covers users (or external systems)
    that participate or are affected by the specified function.

-   \[qualifier(s)\]: optional. This may relate to time, interval,
    condition(s). Can include (for example): "automatically",
    "manually", "in real time", "according to the business rules"

-   \["according to user preference, scope of practice, organizational
    policy, and/or jurisdictional law"\]: optional, when the action can
    be governed by relevant practices, policies and/or laws.

Note that "The system SHALL..." means that the system is required to
perform the relevant function when all factors and specified conditions
are met.

Some examples of rigorous CCs follow:

-   The system SHALL provide the ability to PRESENT the list of
    scheduled patients according to selected criteria such as provider
    name, dates, time of day, nature of visit, etc. using language of
    choice.

-   IF a provider attempts to prescribe a drug using the system, THEN
    the system SHALL DETERMINE whether interactions exist between the
    newly prescribed drugs and the medications on the patient's current
    medication list, and RENDER an appropriate response to the provider,
    according to scope of practice, organizational policy, and/or
    jurisdictional law.

The verb 'Conform' is used with a special meaning in the FM and is not
part of the Action-Verb model. It is a special instruction for including
the functional requirements of one function in another function:

-   For example: The system SHALL conform to function TI.1.1 (Entity
    Authentication). 