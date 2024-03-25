#include <stack>
#include <string>
#include <vector>

using namespace std;

vector<int>a = {9,1,5,3,6,2};

vector<int> solution(vector<int> numbers) {
    
    vector<int> answer;
    answer.resize(numbers.size());
    stack<int>stk;

    for (int i = numbers.size() - 1; i >= 0; i--) {
        

        while (1) {
            if (stk.empty()) {
                answer[i] = -1;
                break;
            }
            if (stk.top() > numbers[i]) {
                answer[i] = stk.top();
                break;
            }
            stk.pop();
        }

        stk.push(numbers[i]);
    }

    return answer;
}


int main() {
   solution(a);
}

