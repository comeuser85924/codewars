""" Break camelCase [6 kyu]
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
"""


def test(n):
    return ' ' + n if n.isupper() else n


def solution(s):
    return (''.join(list(map(test, list(s)))))


solution("helloWorld")
# solution("camelCase")
# solution("breakCamelCase")

""" Solution Clever Answer
1.
def solution(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)

2.   
import re
def solution(s):
    return re.sub('([A-Z])', r' \1', s)

"""
