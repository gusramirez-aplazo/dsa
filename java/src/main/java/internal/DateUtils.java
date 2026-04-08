package internal;

public class DateUtils {
    public boolean isLeapYear(int year){
        boolean is400Factor = year % 400 == 0;
        boolean is100Factor = year % 100 == 0;
        boolean is4Factor = year % 4 == 0;

        return is400Factor || (is4Factor && !is100Factor);
    }
}
