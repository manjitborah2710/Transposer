import math
notes=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
a=input("From : ")
b=input("To : ")
ind_a=notes.index(a)
ind_b=notes.index(b)
diff=ind_b-ind_a
for i in range(12):
    print(notes[i]," --> ",notes[(i+diff)%len(notes)])

