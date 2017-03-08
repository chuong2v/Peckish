O => opens a new line before the current line
o => opens a new line after the current line
a => append after letter
A => append after line
i => insert before letter
I => insert before line


w => navigates cursor to next word
W => navigates cursor to next word (not worrying about symbols)
e => navigates to the next end of a word
E => navigates to the next end of a word (not worrying about symbols)

r => Replaces a single character
R => Replaces until we tell it stop 
c => Changes whatever we specify (using a modifier)
C => Changes until the end of a line

x => Deletes single character
X => Deletes character before
d => Deletes whate we specify (useing a modifier)(And cuts it)
D => Deletes to end of line (And cuts it)

y => 'Yanks' to the specified modifier
Y => 'Yanks' current line
p => Pastes the contents on the buffer after the selection
P => Pastes the contents on the buffer before the selection


/pattern => search 
%s/pattern/replace_string => replace


