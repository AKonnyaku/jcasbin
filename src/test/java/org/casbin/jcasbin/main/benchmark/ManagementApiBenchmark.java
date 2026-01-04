package org.casbin.jcasbin.main.benchmark;

import org.casbin.jcasbin.main.Enforcer;
import org.openjdk.jmh.annotations.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

@OutputTimeUnit(TimeUnit.NANOSECONDS)
@BenchmarkMode(Mode.AverageTime)
public class ManagementApiBenchmark {

    private static final String MODEL_PATH = "examples/rbac_model.conf";

    @State(Scope.Benchmark)
    public static class ThreadState {
        @Param({"1000", "10000", "100000"})
        public int currentRuleSize;

        Enforcer enforcer;
        int invocationSeed;
        List<List<String>> existingRules;

        @Setup(Level.Trial)
        public void setup() {
            enforcer = new Enforcer(MODEL_PATH, "", false);
            enforcer.enableLog(false);
            enforcer.enableAutoBuildRoleLinks(false);

            existingRules = new ArrayList<>(currentRuleSize);
            for (int i = 0; i < currentRuleSize; i++) {
                String user = "user" + i;
                String data = "data" + (i / 10);
                String act = "read";
                enforcer.addPolicy(user, data, act);
                existingRules.add(Arrays.asList(user, data, act));
            }
        }

        @Setup(Level.Invocation)
        public void resetInvocation() {
            // No-op to avoid overhead if not strictly needed, but kept structure for future use
        }
    }

    @Benchmark
    public void addPolicy(ThreadState state) {
        state.invocationSeed++;
        state.enforcer.addPolicy("user_new_" + state.invocationSeed, "data_new", "read");
    }

    @Benchmark
    public void removePolicy(ThreadState state) {
        state.invocationSeed++;
        int index = Math.abs(state.invocationSeed) % state.existingRules.size();
        List<String> rule = state.existingRules.get(index);
        state.enforcer.removePolicy(rule);
    }

    @Benchmark
    public void hasPolicy(ThreadState state) {
        state.invocationSeed++;
        int index = Math.abs(state.invocationSeed) % state.existingRules.size();
        List<String> rule = state.existingRules.get(index);
        state.enforcer.hasPolicy(rule);
    }

    @Benchmark
    public void updatePolicy(ThreadState state) {
        state.invocationSeed++;
        int index = Math.abs(state.invocationSeed) % state.existingRules.size();
        List<String> oldRule = state.existingRules.get(index);
        List<String> newRule = Arrays.asList(oldRule.get(0), oldRule.get(1) + "_updated", oldRule.get(2));

        state.enforcer.updatePolicy(oldRule, newRule);
    }
}
