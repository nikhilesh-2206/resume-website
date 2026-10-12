package TemplateMethodPattern;

abstract class DataParser {

    public final void dataParse()
    {
        openFile();
        parse();
        closeFile();
    }

    public void openFile()
    {
        System.out.println("opening " + getClass().getSimpleName() +" file");
    }

    public void closeFile()
    {
        System.out.println("closing file");
    }

    abstract void parse();
}
