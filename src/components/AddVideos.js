import {useState} from 'react'


function AddVideos(){

    const [video, setVideo] = useState({
        time: '1 year ago',
        channel: 'channel',

    });

    function handleSubmit(e){
        e.preventDefault();
    }
    function handleChange(event){
        setVideo({...video, [event.target.name]: event.target.value})
    }

    return (
        <form>
            <input type="text" placeholder="title" onChange={handleChange}></input>
            <input type="text" placeholder="views" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Add video</button>
        </form>
    )
}
export default AddVideos;