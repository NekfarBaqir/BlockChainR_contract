// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";


contract BlockChainR is ERC721, Pausable ,Ownable{

    string private constant MINT_NOT_STARTED = "Mint Not started";  
    string private constant NON_EXISTENT_TOKENURI = "NFT not existed"; 
    string private constant BAD_ADDRESS_ERROR = "The Sender is a contract";
    string private constant SUPPLY_LIMIT_ERROR = "MaxSuppy reached";
    string private constant INSUFFICIENT_BALANCE = "insufficeint balance";


    using Address for address payable;
    using Counters for Counters.Counter;
    using Address for address;
    using Strings for uint256;
      
    Counters.Counter private blockChainRIds;

    uint private price = 0.03 ether;
    uint256 private totalSupply = 10000;
    uint256 private maxBatch = 5;
    string private tokenBaseURI;


    event Revealed(address indexed operator, string baseUri);
    event AvatarCreated(address indexed operator, address indexed to, uint tokenId);

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_
    ) ERC721(name_, symbol_) {
        tokenBaseURI = baseURI_;
    }
    

    // getting information functions

    function totalTokenSupply() public view returns (uint) {
        return uint(totalSupply);
    }

    function currentTokenCount() public view returns (uint) {
        return uint(blockChainRIds.current());
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return tokenBaseURI;
    }

    // setter functions
   function reveal(string memory baseURI_) external onlyOwner{
       tokenBaseURI= baseURI_;
       emit Revealed(_msgSender(), tokenBaseURI);
   }
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(uint256 _times) external payable  {
        require(!_msgSender().isContract(), BAD_ADDRESS_ERROR);
        require(currentTokenCount() < totalTokenSupply(), SUPPLY_LIMIT_ERROR);
        require(msg.value ==_times * price, INSUFFICIENT_BALANCE);
        
        for(uint i = 0; i<_times;i++){
            blockChainRIds.increment();
            uint newTokenId = uint(blockChainRIds.current());
            _mint(_msgSender(), newTokenId);
        }
    }

    function airDrop(uint256 _times, address _to) external  {
        require(!_to.isContract(), BAD_ADDRESS_ERROR);
        require(currentTokenCount() < totalTokenSupply(), SUPPLY_LIMIT_ERROR);
        for(uint i = 0; i<_times;i++){
            blockChainRIds.increment();
            uint newTokenId = uint(blockChainRIds.current());
            _mint(_to, newTokenId);
        }
    }

       function withdrawEthers(uint amount, address payable _to) external onlyOwner {
        require(!_to.isContract(), BAD_ADDRESS_ERROR);
        _to.sendValue(amount);
    }

}