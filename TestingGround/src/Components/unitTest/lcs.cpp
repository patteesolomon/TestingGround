#include <vector>
// lowest common subsequence


int LCS (const std::vector<int> &a, const std::vector<int> &b)
{
    std::vector<std::vector<int>> dp(a.size() + 1,
    std::vector<int>(b.size() + 1, 0));

    for (int i = 1; i <= a.size(); i++)
    {
        for (int j = 0; j < b.size(); j++)
        {
            if (a[i - 1] == b[j - 1])
            {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else{
                dp[i][j] = std::max(dp[i - 1][j], 
                dp[i][j - 1]);
            }
        }
    }
    return dp[a.size()][b.size()];
}