"""
Number of Divisions[7kuy]

Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1
100 can be divided by 2 six times:

1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1
"""


def divisions(n, divisor):
    sum = 0
    while n/divisor >= 1:
        n = n/divisor
        sum += 1
    return sum


# divisions(6, 2)
# divisions(100, 2)
# divisions(2450, 5)
# divisions(9999, 3)
# divisions(2, 3)
divisions(5, 5)

""" Solution Clever Answer
from math import log

def divisions(n, divisor):
    return int(log(n, divisor))

"""
