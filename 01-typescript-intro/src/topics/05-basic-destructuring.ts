/*
 ? DESESTRUCTURACION DE OBJETOS
 */

 interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details,
 }

 interface Details{
    author: string,
    year: number
 }

 const audioPlayer: AudioPlayer = {
     audioVolume: 90,
     songDuration: 36,
     song: "Mess",
     details: {
         author: "Ed Sheeran",
         year: 2015
     }
 }

/*
 * La desestructuracion se aplica en objetos, 
 * importaciones y exportaciones en los modulos,argumento de las funciones
 * se puede aplicar directamente en cualquier archivo
 * cualquier objeto o arreglo
 * Consiste en que podamos tomar "audioPlayer" ciertas piezas que a mi me interesan
*/
/*
TODO Desestructuracion
*/
const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const{ author:authorNew }= details;
/*
TODO Desestructuracion
*/
console.log('Song:', audioPlayer.song);
console.log('Song:', anotherSong);


console.log('Duration:', audioPlayer.songDuration);
console.log('Duration:', duration);

console.log('Author:', audioPlayer.details.author);
console.log('Author:', authorNew);

console.log(song);


/*
 ? DESESTRUCTURACION DE ARREGLOS
 */

 const dbz: string[] = ['Goku','Vegeta','Trunks'];
 const NoPersonaje = dbz[3] || 'No hay personaje';

 const [ , ,p3_Not = 'Not Found']: string[] = ['Goku','Vegeta'];
 const [p1,p2,p3 = 'Not Found']: string[] = ['Goku','Vegeta','Trunks'];

 console.log('Personaje 3:' , dbz[2] || 'No hay Personaje');
 console.log('Personaje 3:' , dbz[3] || NoPersonaje);

    console.log('Personaje 1:' , p1);
    console.log('Personaje 2:' , p2);
    console.log('Personaje 3:' , p3);

    console.log('Personaje 3:' , p3_Not);


export{};