#include <iostream>
#include <vector>
#include <algorithm>

using std::vector;
using std::cin;
using std::cout;

// magic multiplier of two numbers 
long long MaxPairwiseProduct(const vector<int>& numbers){
    long long result = 0;
    int i = 0;
    int j = 1;
    int max_index1 = -1;
    int max_index2 = -1; // these are not the last or null
    int size = numbers.size(); // size difference
    int a = 0;
    int b = 0;
    int last = 0;
    while (i < size)
    {
        if (a < numbers[i] || (numbers[i] > numbers[max_index1]))
        {
            a = numbers[i];
            max_index1 = i;
        }
        if ((numbers[j] != numbers[max_index1]) && ((max_index2 == -1) || (numbers[j] > numbers[max_index2])))
        {
            b = numbers[j];
            max_index2 = j;
        }
        i++;
    }
    return ((long long)(numbers[max_index1])) * numbers[max_index2];
}

int main(){
    int n; // size

    cin >> n;
    vector<int> numbers(n);
    for (int i = 0; i < n; i++)
    {
        cin >> numbers[i];
    }
    
    long long result = MaxPairwiseProduct(numbers);
    cout << result << "\n";
    return 0;
}