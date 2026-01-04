$ErrorActionPreference = "Stop"
$cp = (Get-Content cp.txt -Raw).Trim()
$fullCp = "target\test-classes;target\classes;$cp"

Write-Host "Running Stable Benchmarks..."
java -Xms3g -Xmx3g -Xmn2g -XX:+AlwaysPreTouch -XX:+UseParallelGC -cp "$fullCp" org.openjdk.jmh.Main `
  -wi 3 -i 3 -f 1 `
  -w 1s -r 500ms `
  -prof gc `
  -rf json -rff "stable.json" `
  -e ".*Large$" `
  "org\.casbin\.jcasbin\.main\.benchmark\.(EnforcerBenchmark|CachedEnforcerBenchmark|RoleManagerBenchmark|ManagementApiBenchmark)\..*"

Write-Host "Running Unstable Benchmarks..."
java -Xms4g -Xmx4g -Xmn3g -XX:+AlwaysPreTouch -XX:+UseParallelGC -cp "$fullCp" org.openjdk.jmh.Main `
  -wi 3 -i 3 -f 2 `
  -w 2s -r 2s `
  -prof gc `
  -gc true `
  -rf json -rff "unstable.json" `
  ".*Large$"

Write-Host "Benchmarks Completed."
