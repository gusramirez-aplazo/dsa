package internal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


public class NumUtilsTest {
    private NumUtils instance;

    @BeforeEach
    void setup(){
       instance = new NumUtils();
    }

    @Test
    void validInstance(){
        assertNotNull(instance);

    }

    @Test
    void validSumOfFirstTen(){
        int result = 30;
        assertEquals(result, instance.sumOfEvensUntil(10));
    }
}
