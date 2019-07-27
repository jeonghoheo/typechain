class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const chocoBlock: Block = new Block(0, "2020202020", "", "Hello", 123456);
const whiteBlock: Block = new Block(2, "4444", "ㅇㄹ", "랄라", 2323);

let blockchain: [Block] = [chocoBlock];

blockchain.push(whiteBlock);

console.log(blockchain);
