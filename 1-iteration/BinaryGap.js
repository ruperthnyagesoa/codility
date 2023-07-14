// solution


function solution(N) {
    let binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;
  
    for (let i = 1; i < binary.length - 1; i++) {
        if (binary[i] === '0') {
            currentGap++;
        }else{
            if (currentGap > maxGap) {
                maxGap = currentGap;
            }
            currentGap = 0;
        }
    }
    if (maxGap > 0) {
        return maxGap;
    }else {
        return 0;
    }
  }