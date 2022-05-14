"""
  Find the odd int [6 kyu]
  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
"""

# My Answer
def find_it(seq):
  myset = set(seq)  #myset是另外一個列表，裡面的內容是mylist裡面的無重複 項
  return ([item for item in myset if seq.count(item) % 2 != 0][0])

find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
# find_it([1,1,2,-2,5,2,4,4,-1,-2,5])
# find_it([1,1,1,1,1,1,10,1,1,1,1])
# find_it([5,4,3,2,1,5,4,3,2,10,10])
# find_it([10])

# Solution Clever Answer