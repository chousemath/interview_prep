class LinkedList {
  head: NNode;
  tail: NNode;
}

class NNode {
  value: number;
  next: NNode;
  prev: NNode;
  constructor(value: number, next: NNode, prev: NNode) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const LL = new LinkedList();
const N1 = new NNode(1, null, null);
LL.head = N1;
LL.tail = N1;

console.log(N1);
console.log(LL.head);
console.log(LL.tail);