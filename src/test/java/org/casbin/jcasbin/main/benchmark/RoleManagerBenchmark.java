package org.casbin.jcasbin.main.benchmark;

import org.casbin.jcasbin.main.Enforcer;
import org.casbin.jcasbin.rbac.RoleManager;
import org.casbin.jcasbin.util.BuiltInFunctions;
import org.openjdk.jmh.annotations.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

@OutputTimeUnit(TimeUnit.NANOSECONDS)
@BenchmarkMode(Mode.AverageTime)
public class RoleManagerBenchmark {

    @State(Scope.Benchmark)
    public static class RoleManagerSmallState {
        RoleManager rm;
        String[] groups;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);
            e.enableAutoBuildRoleLinks(false);

            List<List<String>> pPolicies = new ArrayList<>(100);
            groups = new String[100];
            for (int i = 0; i < 100; i++) {
                String groupName = "group" + i;
                groups[i] = groupName;
                pPolicies.add(Arrays.asList(groupName, "data" + (i / 10), "read"));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(1000);
            for (int i = 0; i < 1000; i++) {
                gPolicies.add(Arrays.asList("user" + i, "group" + (i / 10)));
            }
            e.addGroupingPolicies(gPolicies);
            rm = e.getRoleManager();
        }
    }

    @Benchmark
    public boolean roleManagerSmall(RoleManagerSmallState s) {
        boolean out = false;
        for (int j = 0; j < 100; j++) {
            out ^= s.rm.hasLink("user501", s.groups[j]);
        }
        return out;
    }

    @State(Scope.Benchmark)
    public static class RoleManagerMediumState {
        RoleManager rm;
        String[] groups;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);
            e.enableAutoBuildRoleLinks(false);

            List<List<String>> pPolicies = new ArrayList<>(1000);
            groups = new String[1000];
            for (int i = 0; i < 1000; i++) {
                String groupName = "group" + i;
                groups[i] = groupName;
                pPolicies.add(Arrays.asList(groupName, "data" + (i / 10), "read"));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(10000);
            for (int i = 0; i < 10000; i++) {
                gPolicies.add(Arrays.asList("user" + i, "group" + (i / 10)));
            }
            e.addGroupingPolicies(gPolicies);
            e.buildRoleLinks();

            rm = e.getRoleManager();
        }
    }

    @Benchmark
    public boolean roleManagerMedium(RoleManagerMediumState s) {
        boolean out = false;
        for (int j = 0; j < 1000; j++) {
            out ^= s.rm.hasLink("user501", s.groups[j]);
        }
        return out;
    }

    @State(Scope.Benchmark)
    public static class RoleManagerLargeState {
        RoleManager rm;
        String[] groups;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);

            List<List<String>> pPolicies = new ArrayList<>(10000);
            groups = new String[10000];
            for (int i = 0; i < 10000; i++) {
                String groupName = "group" + i;
                groups[i] = groupName;
                pPolicies.add(Arrays.asList(groupName, "data" + (i / 10), "read"));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(100000);
            for (int i = 0; i < 100000; i++) {
                gPolicies.add(Arrays.asList("user" + i, "group" + (i / 10)));
            }
            e.addGroupingPolicies(gPolicies);
            e.buildRoleLinks();

            rm = e.getRoleManager();
        }
    }

    @Benchmark
    public boolean roleManagerLarge(RoleManagerLargeState s) {
        boolean out = false;
        for (int j = 0; j < 10000; j++) {
            out ^= s.rm.hasLink("user501", s.groups[j]);
        }
        return out;
    }

    @State(Scope.Benchmark)
    public static class BuildRoleLinksWithPatternLargeState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
        }
    }

    @Benchmark
    public void buildRoleLinksWithPatternLarge(BuildRoleLinksWithPatternLargeState s) {
        s.e.buildRoleLinks();
    }

    @State(Scope.Benchmark)
    public static class BuildRoleLinksWithDomainPatternLargeState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedDomainMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
        }
    }

    @Benchmark
    public void buildRoleLinksWithDomainPatternLarge(BuildRoleLinksWithDomainPatternLargeState s) {
        s.e.buildRoleLinks();
    }

    @State(Scope.Benchmark)
    public static class BuildRoleLinksWithPatternAndDomainPatternLargeState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            e.addNamedDomainMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
        }
    }

    // @Benchmark
    public void buildRoleLinksWithPatternAndDomainPatternLarge(BuildRoleLinksWithPatternAndDomainPatternLargeState s) {
        s.e.buildRoleLinks();
    }

    @State(Scope.Benchmark)
    public static class HasLinkWithPatternLargeState {
        RoleManager rm;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            e.buildRoleLinks();
            rm = e.getRoleManager();
        }
    }

    @Benchmark
    public boolean hasLinkWithPatternLarge(HasLinkWithPatternLargeState s) {
        return s.rm.hasLink("staffUser1001", "staff001", "/orgs/1/sites/site001");
    }

    @State(Scope.Benchmark)
    public static class HasLinkWithDomainPatternLargeState {
        RoleManager rm;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedDomainMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            e.buildRoleLinks();
            rm = e.getRoleManager();
        }
    }

   @Benchmark
    public boolean hasLinkWithDomainPatternLarge(HasLinkWithDomainPatternLargeState s) {
        return s.rm.hasLink("staffUser1001", "staff001", "/orgs/1/sites/site001");
    }

    @State(Scope.Benchmark)
    public static class HasLinkWithPatternAndDomainPatternLargeState {
        RoleManager rm;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            e.addNamedDomainMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            rm = e.getRoleManager();
        }
    }

    // @Benchmark
    public boolean hasLinkWithPatternAndDomainPatternLarge(HasLinkWithPatternAndDomainPatternLargeState s) {
        return s.rm.hasLink("staffUser1001", "staff001", "/orgs/1/sites/site001");
    }

    @State(Scope.Benchmark)
    public static class ConcurrentHasLinkWithMatchingState {
        RoleManager rm;

        @Setup
        public void setup() {
            Enforcer e = new Enforcer("examples/rbac_with_pattern_model.conf", "examples/rbac_with_pattern_policy.csv", false);
            e.enableLog(false);
            e.addNamedMatchingFunc("g2", "keyMatch2", BuiltInFunctions::keyMatch2);
            rm = e.getRoleManager();
        }
    }

    @Benchmark
    @Threads(Threads.MAX)
    public boolean concurrentHasLinkWithMatching(ConcurrentHasLinkWithMatchingState s) {
        return s.rm.hasLink("alice", "/book/123");
    }
}
