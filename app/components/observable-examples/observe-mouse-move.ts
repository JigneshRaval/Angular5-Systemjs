import { Observable, fromEvent, BehaviorSubject } from 'rxjs/Rx';

type Pair = [number, number];

const moves: Observable<Pair> =
  fromEvent(document.body, "mousemove").
  map(e => [e.screenX, e.screenY]);

const position = new BehaviorSubject<Pair>([0, 0]);
moves.subscribe(position);

position.value // returns the current position of the mouse

console.log(position.value);

export default position;

