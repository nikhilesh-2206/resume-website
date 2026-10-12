package withoutTemplatePattern;


/* in this we see tha certain logius have been duplicate in the 2 classes which is boilerplate code and
another issue is that we might miss some of the common code in a file by mistake
 */
public class MainWithoutTemplateMethod {

    public static void main(String[] args) {
        CsvParser csvParser = new CsvParser();
        csvParser.parse();
    }
}
