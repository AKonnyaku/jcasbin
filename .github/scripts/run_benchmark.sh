#!/bin/bash
set -euo pipefail

# Arguments
SHA="$1"
TYPE="$2"
TIER_NAME="$3"
PATTERN="$4"
DURATION="$5"
EXCLUDE="$6"
HEAP="$7"

echo "::group::Running $TYPE on $SHA ($TIER_NAME)"

# JVM Tuning
JVM_ARGS="-Xms${HEAP} -Xmx${HEAP} -XX:+AlwaysPreTouch -XX:+UseParallelGC"

if [ "${ACT:-false}" == "true" ]; then
  echo "Skipping git checkout/clean in ACT environment to protect local files"
else
  git checkout -f "$SHA"
  git clean -fdx -e "*.json" -e ".github"
fi

# Inject dependencies (JMH)
if ! grep -q "jmh-core" pom.xml; then
  sed -i 's|</dependencies>|    <dependency><groupId>org.openjdk.jmh</groupId><artifactId>jmh-core</artifactId><version>1.37</version><scope>test</scope></dependency>\n        <dependency><groupId>org.openjdk.jmh</groupId><artifactId>jmh-generator-annprocess</artifactId><version>1.37</version><scope>test</scope></dependency>\n    </dependencies>|' pom.xml
fi

mvn -q clean test-compile dependency:build-classpath -DincludeScope=test -Dmdep.outputFile=cp.txt
CP_ARGS="-cp target/test-classes:target/classes:$(cat cp.txt)"

# Minimum duration 100ms
if [[ "$DURATION" == "50ms" ]]; then DURATION="100ms"; fi

echo "--> Running $TIER_NAME ($DURATION)..."

exclude_arg=""
if [ -n "$EXCLUDE" ]; then
    exclude_arg="-e $EXCLUDE"
fi

# Output file: e.g., base-tier1_nano.json
out_file="${TYPE}-${TIER_NAME}.json"

java $JVM_ARGS $CP_ARGS org.openjdk.jmh.Main \
    -wi 3 -i 5 -f 3 \
    -w $DURATION -r $DURATION \
    -prof gc \
    -rf json -rff "$out_file" \
    $exclude_arg \
    "$PATTERN" || true
    
# Ensure file exists
if [ ! -f "$out_file" ]; then echo "[]" > "$out_file"; fi

echo "::endgroup::"
