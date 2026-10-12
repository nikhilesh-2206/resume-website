package TemplateMethodPattern;

public class TemplateMethodPatternMain {
    public static void main(String[] args) {
        DataParser csvParser= new CsvParser();
        DataParser jsonParser= new JsonParser();

        csvParser.dataParse();
        jsonParser.dataParse();
    }
}
