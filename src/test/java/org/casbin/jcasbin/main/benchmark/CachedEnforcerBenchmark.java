package org.casbin.jcasbin.main.benchmark;

import org.casbin.jcasbin.main.CachedEnforcer;
import org.casbin.jcasbin.main.ModelUnitTest;
import org.casbin.jcasbin.util.EnforceContext;
import org.openjdk.jmh.annotations.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

@OutputTimeUnit(TimeUnit.NANOSECONDS)
@BenchmarkMode(Mode.AverageTime)
public class CachedEnforcerBenchmark {

    private static boolean rawEnforce(String sub, String obj, String act) {
        String[][] policy = new String[][]{{"alice", "data1", "read"}, {"bob", "data2", "write"}};
        for (String[] rule : policy) {
            if (sub.equals(rule[0]) && obj.equals(rule[1]) && act.equals(rule[2])) {
                return true;
            }
        }
        return false;
    }

    @Benchmark
    public void cachedRaw() {
        rawEnforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedBasicModelState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/basic_model.conf", "examples/basic_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedBasicModel(CachedBasicModelState s) {
        s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_model.conf", "examples/rbac_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedRbacModel(CachedRBACModelState s) {
        s.e.enforce("alice", "data2", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelSmallState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_model.conf", "", false);
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
    public void cachedRbacModelSmall(CachedRBACModelSmallState s) {
        s.e.enforce("user501", "data9", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelMediumState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_model.conf", "", false);
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
    public void cachedRbacModelMedium(CachedRBACModelMediumState s) {
        s.e.enforce("user5001", "data150", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelLargeState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_model.conf", "", false);
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
    public void cachedRbacModelLarge(CachedRBACModelLargeState s) {
        s.e.enforce("user50001", "data1500", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelWithResourceRolesState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_with_resource_roles_model.conf", "examples/rbac_with_resource_roles_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedRbacModelWithResourceRoles(CachedRBACModelWithResourceRolesState s) {
        s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelWithDomainsState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_with_domains_model.conf", "examples/rbac_with_domains_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedRbacModelWithDomains(CachedRBACModelWithDomainsState s) {
        s.e.enforce("alice", "domain1", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedABACModelState {
        CachedEnforcer e;
        ModelUnitTest.TestResource data1;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/abac_model.conf", "", false);
            e.enableLog(false);
            data1 = new ModelUnitTest.TestResource("data1", "alice");
        }
    }

    @Benchmark
    public void cachedAbacModel(CachedABACModelState s) {
        s.e.enforce("alice", s.data1, "read");
    }

    @State(Scope.Benchmark)
    public static class CachedKeyMatchModelState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/keymatch_model.conf", "examples/keymatch_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedKeyMatchModel(CachedKeyMatchModelState s) {
        s.e.enforce("alice", "/alice_data/resource1", "GET");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelWithDenyState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_with_deny_model.conf", "examples/rbac_with_deny_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedRbacModelWithDeny(CachedRBACModelWithDenyState s) {
        s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedPriorityModelState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/priority_model.conf", "examples/priority_policy.csv", false);
            e.enableLog(false);
        }
    }

    @Benchmark
    public void cachedPriorityModel(CachedPriorityModelState s) {
        s.e.enforce("alice", "data1", "read");
    }

    @State(Scope.Benchmark)
    public static class CachedWithEnforceContextState {
        CachedEnforcer e;
        EnforceContext ctx;

        @Setup
        public void setup() {
            Model m = newModel();
            e = new CachedEnforcer(m);
            e.enableLog(false);
            
            // Add policies directly
            e.addPolicy("p", "alice", "data1", "read", "allow");
            e.addPolicy("p", "data1_deny_group", "data1", "read", "deny");
            e.addPolicy("p", "data1_deny_group", "data1", "write", "deny");
            e.addPolicy("p", "alice", "data1", "write", "allow");
            e.addGroupingPolicy("g", "alice", "data1_deny_group");
            e.addPolicy("p", "data2_allow_group", "data2", "read", "allow");
            e.addPolicy("p", "bob", "data2", "read", "deny");
            e.addPolicy("p", "bob", "data2", "write", "deny");
            e.addGroupingPolicy("g", "bob", "data2_allow_group");

            ctx = new EnforceContext("", "", "2", "2");
        }

        private Model newModel() {
            Model m = new Model();
            m.addDef("r", "r", "sub, obj, act");
            m.addDef("p", "p", "sub, obj, act, eft");
            m.addDef("g", "g", "_, _");
            m.addDef("e", "e", "priority(p.eft) || deny");
            m.addDef("m", "m", "g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act");
            return m;
        }
    }

    @Benchmark
    public void cachedWithEnforceContext(CachedWithEnforceContextState s) {
        s.e.enforce(s.ctx, "alice", "data1");
    }

    @State(Scope.Benchmark)
    public static class CachedRBACModelMediumParallelState {
        CachedEnforcer e;

        @Setup
        public void setup() {
            e = new CachedEnforcer("examples/rbac_model.conf", "", false);
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
    @Threads(Threads.MAX)
    public void cachedRbacModelMediumParallel(CachedRBACModelMediumParallelState s) {
        s.e.enforce("user5001", "data150", "read");
    }
}
