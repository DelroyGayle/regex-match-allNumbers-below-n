# Regex matching all positive numbers below n

**DESCRIPTION:**
You are given a positive natural number n (which is n > 0) and you should create a regular expression pattern which only matches the decimal representation of all positive natural numbers strictly less than n without leading zeros. The empty string, numbers with leading zeros, negative numbers and non-numbers should not match the regular expression compiled from your returned pattern.

**Input**
n > 0 natural number, n can be from the full possible positive range

**Output**
regular expression pattern as string which will be used to compile a regular expression to do the matches

**Tests**
The compiled regular expression will be tested against decimal representations of random numbers with and without leading zeros, strings including letters and the empty string and should only match for decimal representations of numbers k with 0 < k < n.
These tests are implemented at [**Codewars**](https://www.codewars.com/kata/615da209cf564e0032b3ecc6)

**Sample Output**

**n=1**\
^[^Ss] 
*i.e. this regex will never match*

What follows are the produced regexex for **'n-1' =** ...

8\
^[1-8]$

9\
^[1-9]$

19\
^(1[0-9]|[1-9])$

20\
^(1[0-9]|20|[1-9])$

21\
^(1[0-9]|2[0-1]|[1-9])$

49\
^([1-3][0-9]|4[0-9]|[1-9])$

90\
^([1-8][0-9]|90|[1-9])$

99\
^([1-8][0-9]|9[0-9]|[1-9])$

100\
^([1-9][0-9]|10|100|[1-9])$

101\
^([1-9][0-9]|10|10[0-1]|[1-9])$

111\
^([1-9][0-9]|10[0-9]|11[0-1]|[1-9])$

123\
^([1-9][0-9]|1[0-1][0-9]|12[0-3]|[1-9])$

133\
^([1-9][0-9]|1[0-2][0-9]|13[0-3]|[1-9])$

137\
^([1-9][0-9]|1[0-2][0-9]|13[0-7]|[1-9])$

199\
^([1-9][0-9]|1[0-8][0-9]|19[0-9]|[1-9])$

200\
^(1[0-9]{1,2}|[1-9][0-9]|20|200|[1-9])$

201\
^(1[0-9]{1,2}|[1-9][0-9]|20|20[0-1]|[1-9])$

253\
^(1[0-9]{1,2}|[1-9][0-9]|2[0-4][0-9]|25[0-3]|[1-9])$

799\
^([1-6][0-9]{1,2}|[1-9][0-9]|7[0-8][0-9]|79[0-9]|[1-9])$

800\
^([1-7][0-9]{1,2}|[1-9][0-9]|80|800|[1-9])$

801\
^([1-7][0-9]{1,2}|[1-9][0-9]|80|80[0-1]|[1-9])$

999\
^(9[0-9]{1,2})$

1000\
^([1-9][0-9]{1,2}|10|100|1000|[1-9])$

1001\
^([1-9][0-9]{1,2}|10|100|100[0-1]|[1-9])$

1111\
^([1-9][0-9]{1,2}|10[0-9]{2}|110[0-9]|111[0-1]|[1-9])$

1337\
^([1-9][0-9]{1,2}|1[0-2][0-9]{2}|13[0-2][0-9]|133[0-7]|[1-9])$

2003\
^(1[0-9]{1,3}|[1-9][0-9]{1,2}|20|200|200[0-3]|[1-9])$

3001\
^([1-2][0-9]{1,3}|[1-9][0-9]{1,2}|30|300|300[0-1]|[1-9])$

3456\
^([1-2][0-9]{1,3}|[1-9][0-9]{1,2}|3[0-3][0-9]{2}|34[0-4][0-9]|345[0-6]|[1-9])$

3780\
^([1-2][0-9]{1,3}|[1-9][0-9]{1,2}|3[0-6][0-9]{2}|37[0-7][0-9]|3780|[1-9])$

10000\
^([1-9][0-9]{1,3}|10|100|1000|10000|[1-9])$

12345\
^([1-9][0-9]{1,3}|1[0-1][0-9]{3}|12[0-2][0-9]{2}|123[0-3][0-9]|1234[0-5]|[1-9])$

123456\
^([1-9][0-9]{1,4}|1[0-1][0-9]{4}|12[0-2][0-9]{3}|123[0-3][0-9]{2}|1234[0-4][0-9]|12345[0-6]|[1-9])$
