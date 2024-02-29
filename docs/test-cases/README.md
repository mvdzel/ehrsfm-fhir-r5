
> curl -L https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar -o validator_cli.jar
> java -jar validator_cli.jar -version 5.0.0 docs/test-cases/*.json -ig input/profiles -tx n/a
