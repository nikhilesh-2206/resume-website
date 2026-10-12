package stratergyPattern;

public class mainMethod {

    public static void main(String[] args)
    {
        PaymentService paymentService =new PaymentService(new CreditCard());

        paymentService.pay();

    }
}
