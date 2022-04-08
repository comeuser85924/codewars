# Disemvowel Trolls [7 kyu]
  # Trolls are attacking your comment section!
  # A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  # Your task is to write a function that takes a string and return a new string with all vowels removed.
  # For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  # Note: for this kata y isn't considered a vowel.

# My Answer
def disemvowel(string_):
  motherWord = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u','U']
  word = list(string_)
  def Diff(li1, li2):
    li_dif = [i for i in li1 + li2 if i not in li2]
    return li_dif
  li3 = Diff(word, motherWord)
  return ("".join(li3))

disemvowel("This website is for losers LOL!")

# Solution Clever Answer
  # def disemvowel(s):
  #   return s.translate(None, "aeiouAEIOU")


