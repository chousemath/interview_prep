import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static void main(String[] args) {
        int[] sample = new int[] { 3, 2, 4 };
        int[] response = twoSum(sample, 6);
        for (int i = 0; i < response.length; i++) {
            System.out.println(response[i]);
        }

        int[] response2 = twoSum2(sample, 6);
        for (int i = 0; i < response2.length; i++) {
            System.out.println(response2[i]);
        }
    }

    private static int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < (nums.length - 1); i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[] { 0, 0 };
    }

    private static int[] twoSum2(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] { 0, 0 };
    }
}