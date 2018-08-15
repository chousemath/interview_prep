var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    return LinkedList;
}());
var NNode = /** @class */ (function () {
    function NNode(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return NNode;
}());
var LL = new LinkedList();
var N1 = new NNode(1, null, null);
LL.head = N1;
LL.tail = N1;
console.log(N1);
console.log(LL.head);
console.log(LL.tail);
