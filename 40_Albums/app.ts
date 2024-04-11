// albums


function make_album (artist: string, title : string, tracks?:number) {

const album : {artist : string, title : string, tracks?:number} = {

    artist : artist,
    title :title 

}

if (tracks !== undefined){
 album.tracks = tracks;
}

return album;

}

 const album1 = make_album("artist 1", "album title 1");
 console.log(album1);

 const album2 = make_album("artist 2", "album title 2");
 console.log(album2);

 const album3 = make_album("artist 3", "album title 3", 12);
 console.log(album3);