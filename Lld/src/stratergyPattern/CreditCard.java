package stratergyPattern;

public class CreditCard implements PaymentMethod{
    @Override
    public void processPay() {
        System.out.println("payed using credit card");
    }
}
