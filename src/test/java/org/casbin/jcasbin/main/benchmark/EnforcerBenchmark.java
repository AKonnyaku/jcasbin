package org.casbin.jcasbin.main.benchmark;

import org.casbin.jcasbin.main.Enforcer;
import org.casbin.jcasbin.main.ModelUnitTest;
import org.casbin.jcasbin.util.BuiltInFunctions;
import org.openjdk.jmh.annotations.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

@OutputTimeUnit(TimeUnit.NANOSECONDS)
@BenchmarkMode(Mode.AverageTime)
public class EnforcerBenchmark {

    private static final String[][] RAW_POLICY = new String[][]{{"alice", "data1", "read"}, {"bob", "data2", "write"}};

    private static boolean rawEnforce(String sub, String obj, String act) {
        for (String[] rule : RAW_POLICY) {
            if (sub.equals(rule[0]) && obj.equals(rule[1]) && act.equals(rule[2])) {
                return true;
            }
        }
        return false;
    }

    public static class TestSubject {
        private final String name;
        private final int age;

        public TestSubject(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public int getAge() {
            return age;
        }
    }

    @Benchmark
    public boolean raw() {
        return rawEnforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class BasicModelState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/basic_model.conf", "examples/basic_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean basicModel(BasicModelState s) {
        return s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_model.conf", "examples/rbac_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean rbacModel(RBACModelState s) {
        return s.e.enforce("alice", "data2", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelSizesState {
        @Param({"small", "medium", "large"})
        public String size;

        Enforcer e;
        Object[][] enforcements;

        @Setup
        public void setup() {
            int roles;
            int resources;
            int users;

            switch (size) {
                case "small":
                    roles = 100;
                    resources = 10;
                    users = 1000;
                    break;
                case "medium":
                    roles = 1000;
                    resources = 100;
                    users = 10000;
                    break;
                case "large":
                    roles = 10000;
                    resources = 1000;
                    users = 100000;
                    break;
                default:
                    throw new IllegalArgumentException("Unknown size: " + size);
            }

            e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);
            e.enableAutoBuildRoleLinks(false);

            List<List<String>> pPolicies = new ArrayList<>(roles);
            for (int i = 0; i < roles; i++) {
                pPolicies.add(Arrays.asList(
                    "group-has-a-very-long-name-" + i,
                    "data-has-a-very-long-name-" + (i % resources),
                    "read"
                ));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(users);
            for (int i = 0; i < users; i++) {
                gPolicies.add(Arrays.asList(
                    "user-has-a-very-long-name-" + i,
                    "group-has-a-very-long-name-" + (i % roles)
                ));
            }
            e.addGroupingPolicies(gPolicies);
            e.buildRoleLinks();

            enforcements = new Object[17][];
            for (int i = 0; i < enforcements.length; i++) {
                int userNum = (users / enforcements.length) * i;
                int roleNum = userNum % roles;
                int resourceNum = roleNum % resources;
                if (i % 2 == 0) {
                    resourceNum += 1;
                    resourceNum %= resources;
                }
                enforcements[i] = new Object[]{
                    "user-has-a-very-long-name-" + userNum,
                    "data-has-a-very-long-name-" + resourceNum,
                    "read"
                };
            }
        }
    }

    @State(Scope.Thread)
    public static class IndexState {
        int i;

        @Setup(Level.Iteration)
        public void reset() {
            i = 0;
        }
    }

    @Benchmark
    public boolean rbacModelSizes(RBACModelSizesState s, IndexState idx) {
        int i = idx.i;
        if (i >= s.enforcements.length) {
            i = 0;
        }
        Object[] args = s.enforcements[i];
        idx.i = i + 1;
        return s.e.enforce(args);
    }

    @State(Scope.Benchmark)
    public static class RBACModelSmallState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);

            for (int i = 0; i < 100; i++) {
                e.addPolicy("group" + i, "data" + (i / 10), "read");
            }
            for (int i = 0; i < 1000; i++) {
                e.addGroupingPolicy("user" + i, "group" + (i / 10));
            }
        }
    }

    @Benchmark
    public boolean rbacModelSmall(RBACModelSmallState s) {
        return s.e.enforce("user501", "data9", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelMediumState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);

            List<List<String>> pPolicies = new ArrayList<>(1000);
            for (int i = 0; i < 1000; i++) {
                pPolicies.add(Arrays.asList("group" + i, "data" + (i / 10), "read"));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(10000);
            for (int i = 0; i < 10000; i++) {
                gPolicies.add(Arrays.asList("user" + i, "group" + (i / 10)));
            }
            e.addGroupingPolicies(gPolicies);
        }
    }

    @Benchmark
    public boolean rbacModelMedium(RBACModelMediumState s) {
        return s.e.enforce("user5001", "data99", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelLargeState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_model.conf", "", false);
            e.enableLog(false);

            List<List<String>> pPolicies = new ArrayList<>(10000);
            for (int i = 0; i < 10000; i++) {
                pPolicies.add(Arrays.asList("group" + i, "data" + (i / 10), "read"));
            }
            e.addPolicies(pPolicies);

            List<List<String>> gPolicies = new ArrayList<>(100000);
            for (int i = 0; i < 100000; i++) {
                gPolicies.add(Arrays.asList("user" + i, "group" + (i / 10)));
            }
            e.addGroupingPolicies(gPolicies);
        }
    }

    @Benchmark
    public boolean rbacModelLarge(RBACModelLargeState s) {
        return s.e.enforce("user50001", "data999", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelWithResourceRolesState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_with_resource_roles_model.conf", "examples/rbac_with_resource_roles_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean rbacModelWithResourceRoles(RBACModelWithResourceRolesState s) {
        return s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelWithDomainsState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean rbacModelWithDomains(RBACModelWithDomainsState s) {
        return s.e.enforce("alice", "domain1", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class ABACModelState {
        Enforcer e;
        ModelUnitTest.TestResource data1;

        @Setup
        public void setup() {
            e = new Enforcer("examples/abac_model.conf", "", false);
            e.enableLog(false);
            data1 = new ModelUnitTest.TestResource("data1", "alice");
        }
    }

    @Benchmark
    public boolean abacModel(ABACModelState s) {
        return s.e.enforce("alice", s.data1, "read");
    }

    @State(Scope.Benchmark)
    public static class ABACRuleModelState {
        Enforcer e;
        TestSubject sub;

        @Setup
        public void setup() {
            e = new Enforcer("examples/abac_rule_model.conf", "", false);
            e.enableLog(false);
            sub = new TestSubject("alice", 18);
            for (int i = 0; i < 1000; i++) {
                e.addPolicy("r.sub.age > 20", "data" + i, "read");
            }
        }
    }

    @Benchmark
    public boolean abacRuleModel(ABACRuleModelState s) {
        return s.e.enforce(s.sub, "data100", "read");
    }

    @State(Scope.Benchmark)
    public static class KeyMatchModelState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/keymatch_model.conf", "examples/keymatch_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean keyMatchModel(KeyMatchModelState s) {
        return s.e.enforce("alice", "/alice_data/resource1", "GET");
    }

    @State(Scope.Benchmark)
    public static class RBACModelWithDenyState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/rbac_with_deny_model.conf", "examples/rbac_with_deny_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean rbacModelWithDeny(RBACModelWithDenyState s) {
        return s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class PriorityModelState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/priority_model.conf", "examples/priority_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public boolean priorityModel(PriorityModelState s) {
        return s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class RBACModelWithDomainPatternLargeState {
        Enforcer e;

        @Setup
        public void setup() {
            e = new Enforcer("examples/performance/rbac_with_pattern_large_scale_model.conf", "examples/performance/rbac_with_pattern_large_scale_policy.csv", false);
            e.enableLog(false);
            e.addNamedDomainMatchingFunc("g", "", BuiltInFunctions::keyMatch4);
            e.buildRoleLinks();
        }
    }

    @Benchmark
    public boolean rbacModelWithDomainPatternLarge(RBACModelWithDomainPatternLargeState s) {
        return s.e.enforce("staffUser1001", "/orgs/1/sites/site001", "App001.Module001.Action1001");
    }
}
