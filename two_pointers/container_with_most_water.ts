function maxArea(height: number[]): number {
    let left = 0, right = height.length-1, result = 0
    while (left < right) {
        let min = 0
        const distance = right - left
        if(height[left] < height[right]){
            min = height[left]
            left++
        }else{
            min = height[right]
            right--
        }
       
        const ans = min * distance
        result = ans > result ? ans : result
    }

    return result  
};
