import java.util.Stack;

public class MinAddToMakeParenthesisValid {
    public int minAddToMakeValid(String s) {
        if (s.isEmpty()) return 0;
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(stack.isEmpty()) {
                stack.push(ch);
                continue;
            }
            if (ch == ')' && stack.peek() == '(') {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
        return stack.size();
    }
    public static void main(String[] args) {
        MinAddToMakeParenthesisValid obj = new MinAddToMakeParenthesisValid();
        int ans = obj.minAddToMakeValid("(((");
        System.out.println(ans);
    }
}
