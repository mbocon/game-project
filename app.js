$(() => {
  
    // CREATE && APPEND TWO GAMEBOARDS 
    const $leftBoard = $('<div>').addClass('left').attr('id', 'player-board')  //left-board === #player-board
    const $rightBoard = $('<div>').addClass('right').attr('id', 'enemy-board') //right-board === #enemy-board
    $('.container').append($leftBoard);
    $('.container').append($rightBoard)

    //CREATE && APPEND H2 ELEMENT FOR EACH BOARD
    const $playerH2 = $('<h2>').text('Player Board');
    const $enemyH2 = $('<h2>').text('Enemy Board');
    $($leftBoard).append($playerH2);
    $($rightBoard).append($enemyH2);

    // CREATE 10 ROWS FOR EACH GAMEBOARD
    const grid = ['A','B','C','D','E','F','G','H','I','J'];
    
    for(let i = 0; i < 10; i++) {
        const $leftRows = $('<div>').addClass(`row`).attr('id', `row-${grid[i]}`);
        $leftBoard.append($leftRows) 
        const $rightRows = $('<div>').addClass(`row`).attr('id', `row-${grid[i]}`);
        $rightBoard.append($rightRows)
    }

    // CREATE 10 SQUARES FOR EACH ROW
    for(let i = 1; i <= 10; i++) {
        const $squares = $('<div>').addClass(`square`).text(i).attr('id', `square-${i}`)
        $('.row').append($squares)
    }

    // CLICK FUNCTION GETS IDS AND STORES THEM FOR COMPARISON
    const idsArr = [];
    let pickedThis = '';
    const selected = () => {
        $('.square').click(function() {
            pickedThis = $(this).parent().parent().attr('id') + " " + $(this).parent().attr('id') + " " + $(this).attr('id');  // "this" is the element clicked
            idsArr.push(pickedThis)
            console.log(idsArr)
            // return idsArr
        });
    }
    selected();

    // WRITE FUNCTION TO CREATE SHIPS AND APPEND TO BOARD RANDOMLY FOR CPU OPPONENT AND KEEP HIDDEN
    // MAKE IT SO USER CAN DRAG AND DROP SHIPS ON THEIR BOARD
    // WRITE FUNCTION FOR CPU TO BOMB A RANDOM SQUARE ON USER BOARD
    // MAKE IT SO USER CAN SELECT A SQUARE TO BOMB ON ENEMY BOARD
    // IF HIT CHANGE COLOR IF ALL HIT REMOVE SHIP OR COLOR BLACKOUT
    // MAKE IT SO A MISS IS LOGGED AS DIFFERENT COLOR SO USER DOESN'T SELECT IT AGAIN

    
});