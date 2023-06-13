/*

Given a set of intervals arr, merge all the overlapping intervals and return the non-overlapping list.
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
    
*/

/*

function mergeIntervals(intervals) {
    if (!intervals.length) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]]; // [1,4]

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i]; // [1,4]
        const previous = merged[merged.length - 1]; // [1,4]

        if (current[0] <= previous[1]) { // 1 <// 4
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}


Certainly! Let's take the example array intervals = [[1, 4], [4, 5], [2, 7], [8, 10]] and go through each iteration of the loop to see how the merging process works:

Iteration 1:

current = [1, 4], previous = [1, 4], merged = [[1, 4]]
Since current[0] <= previous[1] (1 <= 4), the intervals overlap. We update previous[1] to be the maximum of the current and previous end times, which results in [1, 4].
merged remains unchanged: [[1, 4]]
Iteration 2:

current = [4, 5], previous = [1, 4], merged = [[1, 4]]
Since current[0] <= previous[1] (4 <= 4), the intervals overlap. We update previous[1] to be the maximum of the current and previous end times, which results in [1, 5].
merged remains unchanged: [[1, 5]]
Iteration 3:

current = [2, 7], previous = [1, 5], merged = [[1, 5]]
Since current[0] <= previous[1] (2 <= 5), the intervals overlap. We update previous[1] to be the maximum of the current and previous end times, which results in [1, 7].
merged remains unchanged: [[1, 7]]
Iteration 4:

current = [8, 10], previous = [1, 7], merged = [[1, 7]]
Since current[0] > previous[1] (8 > 7), the intervals do not overlap. We add the current interval to the merged list.
merged becomes [[1, 7], [8, 10]]
After iterating through all the intervals, the merged list contains the non-overlapping intervals: [[1, 7], [8, 10]].

*/

function mergeIntervals(intervals) {
	for (let i = 0; i < intervals.length; i++) {}
}
