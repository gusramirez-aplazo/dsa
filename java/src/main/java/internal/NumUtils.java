package internal;

public class NumUtils {

    public int sumOfEvensUntil(int n){
       int total = 0;

       for(int num = 0; num <= n; num++){
           if(num % 2 == 0 ) {
               total = total + num;
           }
       }

       return total;
    }
}
