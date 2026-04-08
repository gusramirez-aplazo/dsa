package internal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class DateUtilsTest {
    DateUtils instance;

    @BeforeEach
    void init(){
        instance = new DateUtils();
    }

    @Test
    void validLeapYear(){
        assertTrue(instance.isLeapYear(2024));
    }

    @Test
    void validMultipleYears(){
        assertTrue(instance.isLeapYear(2020));
        assertTrue(instance.isLeapYear(2000));
        assertTrue(instance.isLeapYear(400));
    }

    @Test
    void validNotLeapYear(){
        assertFalse(instance.isLeapYear(2021));
    }

    @Test
    void notLeapYears(){
        assertFalse(instance.isLeapYear(2018));
        assertFalse(instance.isLeapYear(2019));
    }
}
