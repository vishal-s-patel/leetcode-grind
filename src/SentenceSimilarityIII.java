import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class SentenceSimilarityIII {
    public boolean areSentencesSimilar(String sentence1, String sentence2) {
        Deque<String> deque1 = new ArrayDeque<>(Arrays.asList(sentence1.split(" ")));
        Deque<String> deque2 = new ArrayDeque<>(Arrays.asList(sentence2.split(" ")));
        while (!deque1.isEmpty() && !deque2.isEmpty() && deque1.peek().equals(deque2.peek())) {
            deque1.poll();
            deque2.poll();
        }
        while (!deque1.isEmpty() && !deque2.isEmpty() && deque1.peekLast().equals(deque2.peekLast())) {
            deque1.pollLast();
            deque2.pollLast();
        }
        return deque1.isEmpty() || deque2.isEmpty();
    }
    public static void main(String[] args) {
        String s1 = "hello jane";
        String s2 = "hello my name is jane";
        SentenceSimilarityIII ss = new SentenceSimilarityIII();
        boolean ans = ss.areSentencesSimilar(s1, s2);
        System.out.println(ans);
    }
}
