import React, {useState} from 'react';

const Editor = () => {
    const [songs, setSongs] = useState([
        {
            name:"Porilaisten marssi",
            lyrics:"poijat kansan urhokkaan mi Puolan"},
        {
            name:"Sillanpään marssilaulu",
            lyrics:"Kotikontujen tienoita tervehtien tämä laulumme"
        }]);

    const addSong = (name, lyrics) => {
        setSongs([{name: name, lyrics: lyrics}, ...songs]);
    };

    const removeSong = index => {
        const newSongs = [...songs];
        newSongs.splice(index, 1);
        setSongs(newSongs);
    };

    const updateNameByIndex = (index, name) =>{
        const newSongs = [...songs];
        newSongs[index].name = name;
        setSongs(newSongs);
    };

    const updateLyricsByIndex = (index, lyrics) =>{
        const newSongs = [...songs];
        newSongs[index].lyrics = lyrics;
        setSongs(newSongs);
    };

    return (
        <div className="editor">
            <SongForm addSong={addSong}/>
            {songs.map((song, index)=>(
                <SongRow
                    key={index}
                    index={index}
                    song={song}
                    removeSelf={removeSong}
                    updateName={updateNameByIndex}
                    updateLyrics={updateLyricsByIndex}
                />))}
        </div>
    );
};

const SongRow = ({index, song, removeSelf, updateName, updateLyrics}) => {
    return (
        <div>
            <input
                value={song.name}
                onChange={(e)=>updateName(index, e.target.value)}
                placeholder="Pleace give the name of the song"
            />
            <input
                value={song.lyrics}
                onChange={e=>updateLyrics(index, e.target.value)}
                placeholder="Pleace give the lyrics of the song"
            />
            <button onClick={()=>removeSelf(index)}>Remove</button>
        </div>
    )
};

const SongForm = ({addSong}) => {
    const [name, setName] = useState("");
    const [lyrics, setLyrics] = useState("");

    const submitSong = e => {
        e.preventDefault();
        addSong(name, lyrics);
        setName("");
        setLyrics("");
    };

    return(
        <form onSubmit={submitSong}>
            <input placeholder="Song name" value={name} onChange={e=>setName(e.target.value)}/>
            <input placeholder="Lyrics" value={lyrics} onChange={e=>setLyrics(e.target.value)}/>
            <button type="submit">Add song</button>
        </form>
    )
};



export default Editor;

const GameID = ()=>{

};