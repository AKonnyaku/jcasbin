window.BENCHMARK_DATA = {
  "lastUpdate": 1767357409647,
  "repoUrl": "https://github.com/AKonnyaku/jcasbin",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "50104361+AKonnyaku@users.noreply.github.com",
            "name": "Konnyaku",
            "username": "AKonnyaku"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b0e40597f84b99371faa25882b4ff08316854a3",
          "message": "Merge pull request #1 from AKonnyaku/benchmark-refractor-test\n\nBenchmark refractor test",
          "timestamp": "2025-12-29T06:13:38+08:00",
          "tree_id": "0280eac4791633019bcf1308e2ed945f5f53eb19",
          "url": "https://github.com/AKonnyaku/jcasbin/commit/7b0e40597f84b99371faa25882b4ff08316854a3"
        },
        "date": 1766960220725,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 20.79881470976724,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 9627.594213746515,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 16.09366299539732,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 7911.566916030984,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 21.38549286382815,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 9465.561396909208,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 2.0446907405849637,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 9544.408790558047,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 1.7891437636565168,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 8061.9485734368545,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 2.1389990494921665,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 9616.04918756088,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 0.3400063710337932,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 2019.5131408455911,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 0.23846559258019748,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 0.2559667788330537,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 0.3462256561904802,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 1960.1835969600513,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 893.7246843265534,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 871.6031844279286,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 884.8347104560247,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6975.934931215949,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 6267.934332926855,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 5293.8777801769675,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 7964.994934286878,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 0.9491657698689383,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 0.04874989824292925,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6189.320864297756,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 5756.175432936127,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 5548.215155643527,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ACL\"} )",
            "value": 340.82151,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC\"} )",
            "value": 340.8552613333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Medium\"} )",
            "value": 396.30625166666664,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Large\"} )",
            "value": 839.4754283333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_With_Domains\"} )",
            "value": 341.1662343333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"Priority\"} )",
            "value": 341.051138,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ABAC_Complex\"} )",
            "value": 342.20021033333336,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50104361+AKonnyaku@users.noreply.github.com",
            "name": "Konnyaku",
            "username": "AKonnyaku"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c169338862734688332d899dd2166462e00c780b",
          "message": "Merge pull request #2 from AKonnyaku/benchmark-refractor-test\n\nci: refactor benchmark workflow and align runner with Go-Casbin standards",
          "timestamp": "2025-12-29T06:48:22+08:00",
          "tree_id": "381922b9ac0c598d23c6a3163b443a5632e17d1a",
          "url": "https://github.com/AKonnyaku/jcasbin/commit/c169338862734688332d899dd2166462e00c780b"
        },
        "date": 1766962294220,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 23.34819243931185,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7596.547457202229,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 16.36541749036329,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5856.5333922580685,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 21.06723180488798,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7827.823809738747,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 2.31539350643054,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7499.155211835685,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 1.7032264609055716,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5632.431735427525,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 2.1514427836505887,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7507.740799145693,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 0.3254721160722856,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 564.8155308417357,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 0.23608503688120583,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 0.21786535700015744,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 0.32891434583617984,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 1103.3250327608691,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 605.3853823568746,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 569.510875409831,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 595.8800229072273,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6069.148416190117,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 5269.511392525418,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4228.7488489055395,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6807.401348185206,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 0.7262152692788154,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 0.04713112744196483,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 4643.497587175584,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 5140.951147303695,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4455.364781683308,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ACL\"} )",
            "value": 332.9431253333334,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC\"} )",
            "value": 337.841243,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Medium\"} )",
            "value": 429.8479196666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Large\"} )",
            "value": 1110.785253,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_With_Domains\"} )",
            "value": 337.72003966666665,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"Priority\"} )",
            "value": 339.1253113333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ABAC_Complex\"} )",
            "value": 335.5286586666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50104361+AKonnyaku@users.noreply.github.com",
            "name": "Konnyaku",
            "username": "AKonnyaku"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aeb01e02d5dc12df6b3b4a65a134cbddcd5c65a",
          "message": "Merge pull request #3 from AKonnyaku/benchmark-refractor-test\n\nci: refactor benchmark workflow and align runner with Go-Casbin standards",
          "timestamp": "2025-12-29T07:06:20+08:00",
          "tree_id": "0f1ae45290b7f6b5331b344cd140500d9156c983",
          "url": "https://github.com/AKonnyaku/jcasbin/commit/9aeb01e02d5dc12df6b3b4a65a134cbddcd5c65a"
        },
        "date": 1766963378497,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 23.905082561022326,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7567.145901265799,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 18.450048912458104,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5653.40247665677,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 21.416485796440714,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7560.721919162689,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 2.2164932944970794,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7523.366630218209,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 1.6892722978082275,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5707.316247253683,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 2.1462609166200166,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7600.027717555368,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 0.3224971695615724,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 1443.1318603744273,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 0.2332957473238756,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 0.22248581793961617,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 0.3149778616160537,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 1769.7630885631804,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 577.7719735101864,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 581.1578539967057,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 595.3606444846123,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6217.467417862154,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 5638.333908399619,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4617.739890458431,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6798.645554242171,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 0.7353388631093938,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 0.04904358767289524,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 4648.1742940887525,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 4882.71820395919,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4481.813594849359,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ACL\"} )",
            "value": 333.042086,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC\"} )",
            "value": 335.2226726666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Medium\"} )",
            "value": 432.2699753333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Large\"} )",
            "value": 1114.3427543333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_With_Domains\"} )",
            "value": 333.793466,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"Priority\"} )",
            "value": 333.60902400000003,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ABAC_Complex\"} )",
            "value": 331.14338933333335,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50104361+AKonnyaku@users.noreply.github.com",
            "name": "Konnyaku",
            "username": "AKonnyaku"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba79f958805f937ac801584423ff83808bfeab78",
          "message": "Merge branch 'casbin:master' into master",
          "timestamp": "2026-01-02T20:29:51+08:00",
          "tree_id": "f224e6ae0f870f69b379654ef8054e094e481e6a",
          "url": "https://github.com/AKonnyaku/jcasbin/commit/ba79f958805f937ac801584423ff83808bfeab78"
        },
        "date": 1767357408739,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 22.061330785934683,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7609.876178345126,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 18.224695247214793,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5861.153949525607,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 21.509277184821666,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"small\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7711.628694652062,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 2.228382689755471,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 7432.895381813785,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 1.6827172567004955,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 5634.2871430777695,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 2.2438630473564287,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"medium\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 7425.474085185495,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"false\"} )",
            "value": 0.3083244818816843,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac\",\"useCache\":\"true\"} )",
            "value": 1105.197968263141,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"false\"} )",
            "value": 0.2539395225660173,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_domains\",\"useCache\":\"true\"} )",
            "value": 0.2229513185450711,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"false\"} )",
            "value": 0.30358271383213786,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkEnforce.enforce ( {\"dataScale\":\"large\",\"modelType\":\"rbac_with_resource_roles\",\"useCache\":\"true\"} )",
            "value": 866.700848340588,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 586.3709362726003,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 582.1626384379086,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.addPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 579.5259198790114,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6321.184617291526,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 5716.928745388599,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.hasPolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4592.1092281178735,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 6874.2608247053395,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 0.7376250469816314,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.removePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 0.05063328358411185,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"1000\"} )",
            "value": 5221.32105318719,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"10000\"} )",
            "value": 4881.937306750736,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkManagement.updatePolicy ( {\"currentRuleSize\":\"100000\"} )",
            "value": 4604.148876078157,
            "unit": "ops/ms",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedABACModel",
            "value": 1666.182387523254,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedBasicModel",
            "value": 1342.96241990374,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedKeyMatchModel",
            "value": 1270.3174327148145,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedPriorityModel",
            "value": 1091.3579759025854,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModel",
            "value": 1058.6007449862489,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelLarge",
            "value": 3.2975195662106422,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelMedium",
            "value": 44.20499358195055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelMediumParallel",
            "value": 8974699.02205517,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelSmall",
            "value": 285.39841462681176,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelWithDeny",
            "value": 1124.831902232808,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelWithDomains",
            "value": 1003.89851308671,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRBACModelWithResourceRoles",
            "value": 989.7032815871866,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.CachedEnforcerBenchmarkTest.benchmarkCachedRaw",
            "value": 236577406.57103255,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkABACModel",
            "value": 1734.5853666964597,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkABACRuleModel",
            "value": 8.846110945942259,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkBasicModel",
            "value": 1533.9015964422708,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkKeyMatchModel",
            "value": 1187.9815105028636,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkPriorityModel",
            "value": 1119.385381279557,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModel",
            "value": 1115.6631264212015,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelLarge",
            "value": 3.0066187848073818,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelMedium",
            "value": 44.575770105919446,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelSmall",
            "value": 279.212590478497,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelWithDeny",
            "value": 1058.1155953802884,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelWithDomainPatternLarge",
            "value": 33.12776279650867,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelWithDomains",
            "value": 1046.6082160524945,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRBACModelWithResourceRoles",
            "value": 990.1802552917683,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.EnforcerBenchmarkTest.benchmarkRaw",
            "value": 234468073.56438747,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkAddPolicyLarge",
            "value": 47.045324137935374,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkAddPolicyMedium",
            "value": 360.08542187084504,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkAddPolicySmall",
            "value": 1645.3006599820055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkHasPolicyLarge",
            "value": 48.917367381289296,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkHasPolicyMedium",
            "value": 440.8590860272034,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkHasPolicySmall",
            "value": 1505.9277271135559,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkRemovePolicyLarge",
            "value": 57.76835378438767,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkRemovePolicyMedium",
            "value": 425.0803204235179,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.ManagementApiBenchmarkTest.benchmarkRemovePolicySmall",
            "value": 1694.5779328438796,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 38.48747564527381,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 0.3235488289977911,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkBuildRoleLinksWithPatternLarge",
            "value": 0.48067735462792305,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkConcurrentHasLinkWithMatching",
            "value": 4404339.523621052,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkHasLinkWithDomainPatternLarge",
            "value": 54.64440463373623,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 0.4648352536607436,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkHasLinkWithPatternLarge",
            "value": 0.870710889713239,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkRoleManagerLarge",
            "value": 3.44398136673138,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkRoleManagerMedium",
            "value": 32.798739476620746,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.RoleManagerBenchmarkTest.benchmarkRoleManagerSmall",
            "value": 367.81727500603114,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ACL\"} )",
            "value": 341.77669299999997,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC\"} )",
            "value": 341.6991046666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Medium\"} )",
            "value": 459.37285066666664,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_Large\"} )",
            "value": 1295.5952523333333,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"RBAC_With_Domains\"} )",
            "value": 344.73237666666665,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"Priority\"} )",
            "value": 344.979813,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.casbin.jcasbin.main.benchmark.BenchmarkMemory.measureMemory ( {\"scenario\":\"ABAC_Complex\"} )",
            "value": 342.9335026666667,
            "unit": "ms/op",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}