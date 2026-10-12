package stratergyPattern;

public class PaymentService {

    private PaymentMethod stratergy;

    public  PaymentService ( PaymentMethod stratergy)
    {
        this.stratergy=stratergy;
    }

    public void pay()
    {
        stratergy.processPay();
    }




}
