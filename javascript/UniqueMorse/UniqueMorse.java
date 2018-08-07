public class UniqueMorse {
    static String[] morse = { ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
            "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.." };

    public static void main(String[] args) {
        for (String code : morse) {
            System.out.println(code);
        }
    }
}