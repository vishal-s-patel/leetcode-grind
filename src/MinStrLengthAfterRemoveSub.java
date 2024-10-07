import java.util.Stack;

public class MinStrLengthAfterRemoveSub {
    public int minLength(String s) {
        Stack<Character> stack = new Stack<>();
        for (int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if (stack.isEmpty()) {
                stack.push(ch);
                continue;
            }
            if (ch == 'B' && stack.peek() == 'A') {
                stack.pop();
            } else if (ch == 'D' && stack.peek() == 'C') {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
        return stack.size();
    }

    public static void main(String[] args) {
        MinStrLengthAfterRemoveSub obj = new MinStrLengthAfterRemoveSub();
        int res = obj.minLength("ABFCACDB");
        System.out.println(res);
    }
}
