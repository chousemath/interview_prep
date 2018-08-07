using System;
using System.Collections.Generic;

namespace TwoSumCs
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] result = twoSum(new int[] { 3, 2, 4 }, 6);
            for (int i = 0; i < result.Length; i++)
            {
                Console.WriteLine($"index: {i}, value: {result[i]}");
            }
        }

        static int[] twoSum(int[] nums, int target)
        {
            Dictionary<int, int> map = new Dictionary<int, int>();
            for (int i = 0; i < nums.Length; i++)
            {
                int diff = target - nums[i];
                Console.WriteLine($"diff: {diff}");
                Console.WriteLine(map.ContainsKey(diff));
                if (map.ContainsKey(diff))
                {
                    Console.WriteLine("Match was found");
                    return new int[] { map[diff], i };
                }
                map[diff] = i;
            }
            return new int[] { 0, 0 };
        }
    }
}
