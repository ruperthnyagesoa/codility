// solution


function solution(N) {
    let binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (currentGap > maxGap) {
                maxGap = currentGap;
            }
            currentGap = 0;
        } else {
            currentGap++;
        }
    }
    return maxGap;
}