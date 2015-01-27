

var dom = document;
var memory_array = [];

var memory_array_char_h = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
var memory_array_symbols_e = ['&clubs;', '&clubs;', '&hearts;', '&hearts;', '&spades;', '&spades;', '&diams;', '&diams;', '&sung;', '&sung;', '&sext;', '&sext;', '&phone;', '&phone;', '&FilledSmallSquare;', '&FilledSmallSquare;'];
var memory_array_num_e = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8'];
var memory_array_char_e = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
var memory_array_symbols_h = ['&clubs;', '&clubs;', '&hearts;', '&hearts;', '&spades;', '&spades;', '&diams;', '&diams;', '&sung;', '&sung;', '&sext;', '&sext;', '&phone;', '&phone;', '&FilledSmallSquare;', '&FilledSmallSquare;', '&epar;', '&epar;', '&otimes;', '&otimes;', '&ntlg;', '&ntlg;', '&xdtri;', '&xdtri;'];
var memory_array_num_h = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', '11', '11', '12', '12'];

var charArrayLevel1 = memory_array_char_e;
var charArrayLevel2 = memory_array_char_h;
var numArrayLevel1 = memory_array_num_e;
var numArrayLevel2 = memory_array_num_h;
var symbolsArrayLevel1 = memory_array_symbols_e;
var symbolsArrayLevel2 = memory_array_symbols_h;

function initial_array(cat, level) {
    switch (cat) {
        case "Character":
            switch (level) {
                case "Easy":
                    memory_array = charArrayLevel1;
                    break;
                case "Hard":
                    memory_array = charArrayLevel2;
                    break;
            }
            break;
        case "Number":
            switch (level) {
                case "Easy":
                    memory_array = numArrayLevel1;
                    break;
                case "Hard":
                    memory_array = numArrayLevel2;
                    break;
            }
            break;
        case "Symbols":
            switch (level) {
                case "Easy":
                    memory_array = symbolsArrayLevel1;
                    break;
                case "Hard":
                    memory_array = symbolsArrayLevel2;
            }
    }

}

var memory_values = [];
var blocks_ids = [];
var blocks_overd = 0;
var the_counter = document.getElementById('counter');
var the_timer = document.getElementById('timer');
var count = 0;
var timer = 0;
the_timer.innerHTML = "Elapsed time : " + timer + " SEC";
the_counter.innerHTML = "Your Score is : " + count;


function startButton() {
    dom.getElementById('memory_board').style.display = 'block';
    dom.getElementById('start').style.display = 'none';
    dom.getElementById('reset').style.display = 'inline-block';
    dom.getElementById('restart').style.display = 'inline-block';
    dom.getElementById('reg').style.display = 'none';
    dom.getElementById('welcome').innerHTML = 'Welcome ' + dom.getElementById('username').value + ' .. Good luck with the game :)';
    dom.getElementById('filltheinput').style.display = 'none';
    timer = 0;
    setInterval(thetimer, 1000);
}
function thetimer() {
    timer++;
    the_timer.innerHTML = "Elapsed time : " + timer + " SEC";

}
Array.prototype.blocks_auto_allocation = function() {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};
function newBoard() {
    blocks_overd = 0;
    var output = '';
    memory_array.blocks_auto_allocation();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="block_' + i + '" onclick="memoryFlipBlock(this,\'' + memory_array[i] + '\')"></div>';
    }
    dom.getElementById('memory_board').innerHTML = output;
    count = 0;
    timer = 0;

    the_counter.innerHTML = "Your Score is : " + count;

}

function memoryFlipBlock(block, val) {
    if (block.innerHTML === "" && memory_values.length < 2) {
        block.style.background = '#FFF';
        block.innerHTML = val;
        if (memory_values.length === 0) {
            memory_values.push(val);
            blocks_ids.push(block.id);
        } else if (memory_values.length === 1) {
            memory_values.push(val);
            blocks_ids.push(block.id);
            if (memory_values[0] === memory_values[1]) {
                blocks_overd += 2;
                memory_values = [];
                blocks_ids = [];
                count++;
                the_counter.innerHTML = "Your Score is : " + count;
                if (blocks_overd === memory_array.length) {
                    alert("Great you compleate the game .. your score = " + count);
                    dom.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flipTheBlockBack() {
                    var block_1 = dom.getElementById(blocks_ids[0]);
                    var block_2 = dom.getElementById(blocks_ids[1]);
                    block_1.style.background = 'url(img/x.jpg) no-repeat';
                    block_1.innerHTML = "";
                    block_2.style.background = 'url(img/x.jpg) no-repeat';
                    block_2.innerHTML = "";
                    memory_values = [];
                    blocks_ids = [];
                }
                setTimeout(flipTheBlockBack, 500);
            }
        }
    }
}




























