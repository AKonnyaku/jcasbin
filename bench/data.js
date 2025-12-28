window.BENCHMARK_DATA = {
  "lastUpdate": 1766962294489,
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
      }
    ]
  }
}