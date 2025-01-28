Developed (in part) by the HL7 EHR/Security WG Vocabulary Alignment Project

Incorporated in:

* HL7 FHIR Core R4 and FHIR Record Lifecycle Event Implementation Guide (RLE IG)
* ISO 21089:2018 Trusted End-to-End Information Flows
* ISO/HL7 10781:2020 EHR System Functional Model Release 2.1
* ISO/HL7 16527:2020 PHR System Functional Model Release 2

### Record Lifecycle Events (See [RI.1.1.1](Requirements-EHRSFMR2-RI.1.1.1.html))

| Event | Description |
| --- | --- |
| Access/View Record Lifecycle Event | occurs when an agent causes the system to obtain and open a record entry for inspection or review. |
| Add Legal Hold Record Lifecycle Event | occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”. |
| Amend (Update) Record Lifecycle Event | occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent). |
| Archive Record Lifecycle Event | occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage. |
| Attest Record Lifecycle Event | occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content. |
| Decrypt Record Lifecycle Event | occurs when an agent causes the system to decode record entry content from a cipher. |
| De-Identify (Anononymize) Record Lifecycle Event | occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that may or may not be reversible. |
| Deprecate Record Lifecycle Event | occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use. |
| Destroy/Delete Record Lifecycle Event | occurs when an agent causes the system to permanently erase record entry content from the system. |
| Disclose Record Lifecycle Event | occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content. |
| Encrypt Record Lifecycle Event | occurs when an agent causes the system to encode record entry content in a cipher. |
| Extract Record Lifecycle Event | occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria. |
| Link Record Lifecycle Event | occurs when an agent causes the system to connect related record entries. |
| Merge Record Lifecycle Event | occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.  |
| Originate/Retain Record Lifecycle Event | occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record. |
| Pseudonymize Record Lifecycle Event | occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible. |
| Re-activate Record Lifecycle Event | occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated. |
| Receive/Retain Record Lifecycle Event | occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record. |
| Re-identify Record Lifecycle Event | occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject. |
| Remove Legal Hold Record Lifecycle Event | occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”. |
| Report (Output) Record Lifecycle Event | occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner. |
| Restore Record Lifecycle Event | occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact. |
| Transform/Translate Record Lifecycle Event | occurs when an agent causes the system to change the form, language or code system used to represent record entry content. |
| Transmit Record Lifecycle Event | occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another. |
| Unlink Record Lifecycle Event | occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again. |
| Unmerge Record Lifecycle Event | occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again. |
| Verify Record Lifecycle Event | occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy. |