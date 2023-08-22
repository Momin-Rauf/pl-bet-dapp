// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract betApp {
    uint256 public fixtureCount = 0;
    uint256 public betCount = 0;
    struct Bet {
        uint256 id;
        address better;
        uint256 option;
        uint256 payment;
        uint256 balance;
    }

    struct Fixture {
        uint256 id;
        string side1;
        string side2;
        string sport;
        bool results_announced;
        uint256 result;
        uint256 side1pool;
        uint256 side2pool;
        bool active;
    }

    Fixture[] public fixtures;
    Bet[] public bets;
    mapping(address => uint256) public accounts;

        function addFixture(
            string memory side1,
            string memory side2,
            string memory sport
        ) public {
            Fixture memory fixture = Fixture(
                fixtureCount,
                side1,
                side2,
                sport,
                false,
                0,
                0,
                0,
                true
            );
            fixtureCount++;
            fixtures.push(fixture);
        }

    function endFixture(uint256 id, uint256 result) public {
        bool active = fixtures[id].active;
        if (active) {
            fixtures[id].result = result;
            uint256 option;
            uint256 payment;
            uint256 side1pool = fixtures[id].side1pool;
            uint256 side2pool = fixtures[id].side2pool;
            for (uint256 i = 0; i < betCount; i++) {
                option = bets[i].option;
                payment = bets[i].payment;
                if (result == option && option == 1) {
                    bets[i].balance = ((side1pool / payment) * side2pool) + payment;
                    bets[i].payment = 0;
                    accounts[bets[i].better] += bets[i].balance;
                } else if (result == option && option == 2) {
                    bets[i].balance = ((side2pool / payment) * side1pool) + payment;
                    bets[i].payment = 0;
                    accounts[bets[i].better] += bets[i].balance;
                }
            }
            fixtures[id].active = false;
        }
    }

    function placeBet(uint256 id, uint256 option) public payable {
        bool active = fixtures[id].active;
        if (active && msg.value > 0) {
            Bet memory bet = Bet(betCount, msg.sender, option, msg.value, 0);
            betCount++;
            bets.push(bet);
            if (option == 1) {
                fixtures[id].side1pool += msg.value;
            } else if (option == 2) {
                fixtures[id].side2pool += msg.value;
            }
        }
    }

    function withdraw() public payable {
        address payable reciever = payable(msg.sender);
        if (accounts[msg.sender] > 0) {
            reciever.transfer(accounts[msg.sender]);
            accounts[msg.sender] = 0;
        }
    }

    function getBalance() public view returns (uint256) {
        return accounts[msg.sender];
    }
}