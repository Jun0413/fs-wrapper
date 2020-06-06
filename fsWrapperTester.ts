import { make } from './fsWrapper';

let fsw = make('');

fsw.readFile('package-lock.json', (err, d) => {
    if (err) { console.log(err); }
    else { console.log(d.toString()); }
});