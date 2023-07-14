# Binary Gap
## Problem Description
A **binary gap** within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
For example:
- Number 9 has binary representation 1001 and contains a binary gap of length 2.
- The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
- The number 20 has binary representation 10100 and contains one binary gap of length 1.
- The number 15 has binary representation 1111 and has no binary gaps.
- The number 32 has binary representation 100000 and has no binary gaps.
You need to write a function `solution(N)` that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
## Example
```
Input:
N = 1041
Output:
5
Explanation:
N has binary representation 10000010001, and its longest binary gap is of length 5.
```
```
Input:
N = 32
Output:
0
Explanation:
N has binary representation 100000, and it does not contain any binary gaps.
```
## Algorithm
The goal is to find the longest binary gap in the binary representation of a given positive integer N. We can do this by performing the following steps:
1. Convert the given positive integer N into its binary representation.
2. Initialize variables: `max_gap_length` to 0 and `current_gap_length` to 0.
3. Iterate through each character in the binary representation:
   - If the current character is '0', increment `current_gap_length` by 1.
   - If the current character is '1', update `max_gap_length` with the maximum value of `max_gap_length` and `current_gap_length`, and reset `current_gap_length` to 0.
4. Return `max_gap_length` as the length of the longest binary gap.
## Time Complexity
The time complexity of this algorithm is O(log(N)), where N is the given positive integer.
## Constraints
