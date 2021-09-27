const findNumberOfLIS = function(nums) {
    let n = nums.length;
        if(n == 0)
            return 0;
        
        let len = [n + 1];
        let cnt = [n + 1];
        
        for(let i = 0; i <= n; i++) {
            cnt[i] = 1;
            len[i] = 1;
            
            for(let j = 0; j < i; j++) {
                if(len[j] + 1 < len[i])
                    continue;
                
                if(i != n && nums[i] <= nums[j])
                    continue;
                
                if(len[j] + 1 > len[i])
                    cnt[i] = 0;
                
                len[i] = len[j] + 1;
                cnt[i] += cnt[j];
            }
        }
        
        return cnt[n];
    }
