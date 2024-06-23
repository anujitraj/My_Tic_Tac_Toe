#include <iostream>
#include <vector>

using namespace std;

// Function to print the current state of the tic tac toe board
void printBoard(const vector<char>& board) {
    cout << board[0] << " | " << board[1] << " | " << board[2] << endl;
    cout << "---------" << endl;
    cout << board[3] << " | " << board[4] << " | " << board[5] << endl;
    cout << "---------" << endl;
    cout << board[6] << " | " << board[7] << " | " << board[8] << endl;
}

// Function to check if the player won the match
bool checkWin(const vector<char>& board, char player) {
    for (int i = 0; i < 3; i++) {
        // for checking  rows and columns
        if ((board[i*3] == player && board[i*3 + 1] == player && board[i*3 + 2] == player) ||
            (board[i] == player && board[i + 3] == player && board[i + 6] == player)) {
            return true;
        }
    }
    // for checking diagonals   
    if ((board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)) {
        return true;
    }
    return false;
}

// Function to check if the board is full
bool isBoardFull(const vector<char>& board) {
    for (char cell : board) {
        if (cell == ' ') {
            return false;
        }
    }
    return true;
}

int main() {
    vector<char> board(9, ' ');
    char currentPlayer = 'X';
    bool gameEnded = false;

    while (!gameEnded) {
        printBoard(board);
        int move;
        cout << "Player " << currentPlayer << ", enter your move (1-9): ";
        cin >> move;
        while (move < 1 || move > 9 || board[move - 1] != ' ') {
            cout << "Invalid move. Try again: ";
            cin >> move;
        }
        board[move - 1] = currentPlayer;

        if (checkWin(board, currentPlayer)) {
            gameEnded = true;
            printBoard(board);
            cout << "Player " << currentPlayer << " wins!" << endl;
        } else if (isBoardFull(board)) {
            gameEnded = true;
            printBoard(board);
            cout << "It's a draw!" << endl;
        }

        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }
    
    return 0;
}
