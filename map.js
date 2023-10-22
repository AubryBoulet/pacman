function initMap(){
    map = [
        ['_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_',],
        ['_','.','.','.','.','.','.','.','.','.','_','.','.','.','.','.','.','.','.','.','_'],
        ['_','.','_','_','_','.','_','_','_','.','_','.','_','_','_','.','_','_','_','.','_'],
        ['_','G','_',' ','_','.','_',' ','_','.','_','.','_',' ','_','.','_',' ','_','G','_'],
        ['_','.','_','_','_','.','_','_','_','.','_','.','_','_','_','.','_','_','_','.','_'],
        ['_','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','_'],
        ['_','.','_','_','_','.','_','.','_','_','_','_','_','.','_','.','_','_','_','.','_'],
        ['_','.','_','_','_','.','_','.','_','_','_','_','_','.','_','.','_','_','_','.','_'],
        ['_','.','.','.','.','.','_','.','.','.','_','.','.','.','_','.','.','.','.','.','_'],
        ['_','_','_','_','_','.','_','_','_',' ','_',' ','_','_','_','.','_','_','_','_','_'],
        [' ',' ',' ',' ','_','.','_',' ',' ',' ',' ',' ',' ',' ','_','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.','_',' ','_','_','_','_','_',' ','_','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.','_',' ','_',' ',' ',' ','_',' ','_','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.',' ',' ','_',' ',' ',' ','_',' ',' ','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.','_',' ','_','_','_','_','_',' ','_','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.','_',' ',' ',' ',' ',' ',' ',' ','_','.','_',' ',' ',' ',' '],
        [' ',' ',' ',' ','_','.','_',' ','_','_','_','_','_',' ','_','.','_',' ',' ',' ',' '],
        ['_','_','_','_','_','.','_',' ','_','_','_','_','_',' ','_','.','_','_','_','_','_'],
        ['_','.','.','.','.','.','.','.','.','.','_','.','.','.','.','.','.','.','.','.','_'],
        ['_','.','_','_','_','.','_','_','_','.','_','.','_','_','_','.','_','_','_','.','_'],
        ['_','G','.','.','_','.','.','.','.','.',' ','.','.','.','.','.','_','.','.','G','_'],
        ['_','_','_','.','_','.','_','.','_','_','_','_','_','.','_','.','_','.','_','_','_'],
        ['_','_','_','.','_','.','_','.','_','_','_','_','_','.','_','.','_','.','_','_','_'],
        ['_','.','.','.','.','.','_','.','.','.','_','.','.','.','_','.','.','.','.','.','_'],
        ['_','.','_','_','_','_','_','_','_','.','_','.','_','_','_','_','_','_','_','.','_'],
        ['_','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_',]
    ]
    mapPellets = 0;
    for (const i of map) {
        for (const j of i) {
            if (j ==".") mapPellets ++;
        }
    }
}
