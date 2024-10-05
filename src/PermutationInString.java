import java.util.Arrays;

public class PermutationInString {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }
        int[] s1Freq = new int[26];
        int[] s2Freq = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            s1Freq[s1.charAt(i) - 'a']++;
            s2Freq[s2.charAt(i) - 'a']++;
        }

        for (int i = 0; i < s2.length() - s1.length(); i++) {
            if (Arrays.equals(s1Freq, s2Freq)) {
                return true;
            }
            s2Freq[s2.charAt(i)-'a']--;
            s2Freq[s2.charAt(i + s1.length()) - 'a']++;
        }
        return Arrays.equals(s1Freq, s2Freq);
    }
    public static void main(String[] args) {
        PermutationInString pis = new PermutationInString();
        boolean ans = pis.checkInclusion("adc", "dcda");
        System.out.println(ans);
    }
}
