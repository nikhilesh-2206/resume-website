package withoutTemplatePattern;

public class CsvParser {

    public void parse()
    {
        openFile();

        System.out.println("parsing csv");

        closeFile();
    }


    public void openFile()
    {
        System.out.println("opening file");

    }

    public void closeFile()
    {
        System.out.println("closing file");

    }
}
