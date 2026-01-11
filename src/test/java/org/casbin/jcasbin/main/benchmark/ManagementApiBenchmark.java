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
        List<List<String>> newRulesForUpdate;
        List<List<String>> newRulesForAdd;

        @Setup(Level.Trial)
        public void setup() {
            enforcer = new Enforcer(MODEL_PATH, "", false);
            enforcer.enableLog(false);
            enforcer.enableAutoBuildRoleLinks(false);

            existingRules = new ArrayList<>(currentRuleSize);
            newRulesForUpdate = new ArrayList<>(currentRuleSize);
            newRulesForAdd = new ArrayList<>(10000); // Buffer for addPolicy

            // Bulk load policies for speed
            List<List<String>> pPolicies = new ArrayList<>(currentRuleSize);
            for (int i = 0; i < currentRuleSize; i++) {
                String user = "user" + i;
                String data = "data" + (i / 10);
                String act = "read";
                // Only create list once
                List<String> rule = Arrays.asList(user, data, act);
                pPolicies.add(rule);
                existingRules.add(rule);
                
                // Pre-calculate update rules
                newRulesForUpdate.add(Arrays.asList(user, data + "_updated", act));
            }
            enforcer.addPolicies(pPolicies);
            
            // Pre-calculate users for addPolicy
            for (int i = 0; i < 10000; i++) {
                newRulesForAdd.add(Arrays.asList("user_new_" + i, "data_new", "read"));
            }
        }

        @Setup(Level.Iteration)
        public void setupIteration() {
            // Lightweight reset: Only if needed.
            // For addPolicy: Policies are added cumulatively. 
            // For removePolicy: Policies are removed.
            // To avoid full reconstruction (which is slow), we can use a "restore" strategy if possible,
            // or just accept that state changes within an iteration.
            
            // However, to ensure identical starting state for each iteration (critical for stability),
            // we must reset. But we can optimize the reset.
            // Instead of new Enforcer() and adding one by one, we can clear and batch add.
            
            enforcer.clearPolicy();
            // We need to re-add the initial policies.
            // Since existingRules already holds them, we can just batch add.
            enforcer.addPolicies(existingRules);
            
            invocationSeed = 0;
        }
    }

    @Benchmark
    public boolean addPolicy(ThreadState state) {
        state.invocationSeed++;
        if (state.invocationSeed >= state.newRulesForAdd.size()) {
            state.invocationSeed = 0;
        }
        return state.enforcer.addPolicy(state.newRulesForAdd.get(state.invocationSeed));
    }

    @Benchmark
    public boolean removePolicy(ThreadState state) {
        state.invocationSeed++;
        if (state.invocationSeed >= state.existingRules.size()) {
            state.invocationSeed = 0;
        }
        List<String> rule = state.existingRules.get(state.invocationSeed);
        return state.enforcer.removePolicy(rule);
    }

    @Benchmark
    public boolean hasPolicy(ThreadState state) {
        state.invocationSeed++;
        if (state.invocationSeed >= state.existingRules.size()) {
            state.invocationSeed = 0;
        }
        List<String> rule = state.existingRules.get(state.invocationSeed);
        return state.enforcer.hasPolicy(rule);
    }

    @Benchmark
    public boolean updatePolicy(ThreadState state) {
        state.invocationSeed++;
        if (state.invocationSeed >= state.existingRules.size()) {
            state.invocationSeed = 0;
        }
        List<String> oldRule = state.existingRules.get(state.invocationSeed);
        List<String> newRule = state.newRulesForUpdate.get(state.invocationSeed);

        return state.enforcer.updatePolicy(oldRule, newRule);
    }
}
