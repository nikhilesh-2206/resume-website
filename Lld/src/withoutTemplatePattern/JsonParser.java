package withoutTemplatePattern;

public class JsonParser {

    public void parse()
    {
        openFile();

        System.out.println("parsing json");

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
