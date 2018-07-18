Reverse 4 is a web app game. It is similar to Connect 4, however pieces are pushed in from the bottom rather than falling from the top. When a piece is pushed, the entire column is shifted upwards.

Possible modes:
1-player PvE
2-player PvP
lockout mode (after max shifts, row is locked) (default)
endless mode (no max shifts, extra tiles fall out of view)
tie breaking
start game
new game

Components:
Tile (a single space on the game board, can be controlled by either player or neutral)
GameColumn (a column of 7 Tiles and a button to alter it)
Game (the game board, contains 42 tiles in a 6x7 area)
Settings (used to set the games settings before the game begins, locked when game starts)
Multiplayer (uses PeerJS for peer-to-peer multiplayer connections)

              App
               |
Multiplayer ---+--- Settings
               |
              Game
               |
           GameColumn
               |
              Tile


Game structures
2p-local
pick first players
user is first => wait for input (player 1)
if win/lose/tie => display end state
else => wait for input (player 2)
loop
2p-network
pick first players
if user is first => wait for input (player 1)
if win/lose/tie => display end state
else => ask for input (player 2)
loop

user is first => wait for input (player 1)
if win/lose/tie => display end state
else => ask for input (player 2)
loop
1p-vs ai
