# Sum of Digits / Digital Root [6 kyu]
  # Digital root is the recursive sum of all the digits in a number.

  # Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  # Examples
  #     16  -->  1 + 6 = 7
  #    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  # 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  # 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

# My Answer
def digital_root(n):
  wordList = [int(word) for word in str(n)]
  total = 0
  while len(wordList) >= 2:
    total = sum(wordList)
    wordList = [int(word) for word in str(total)]
  return total

digital_root(16)
digital_root(942)
digital_root(132189)
digital_root(493193)

# Solution Clever Answer

# def digital_root(n):
#     return n if n < 10 else digital_root(sum(map(int,str(n))))

# def digital_root(n):
#     return n%9 or n and 9 

