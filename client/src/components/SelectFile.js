import "./SelectFile.css";

function SelectFile (){
    return (
        <div><label id="labelforselectfile" for="selectfile">Select file
        <input type="file" id="selectfile" accept="image/*"></input>
        </label>
        </div>
    )
}

export default SelectFile;