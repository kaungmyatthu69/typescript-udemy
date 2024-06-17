import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const collectionNumber = new NumbersCollection([10, 3, -5, 0]);
collectionNumber.sort()
console.log('collectionNumber',collectionNumber.data)

const collectionCharacters = new CharactersCollection('Xaayb');
collectionCharacters.sort()
console.log(collectionCharacters.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

