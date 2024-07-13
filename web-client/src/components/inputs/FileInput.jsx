const FileInput = ({callback}) => {
const handleFileInputChange = (e) => {
	callback(e.target.files[0])
}
return (<input onChange={handleFileInputChange}type='file'/>)
}
export default FileInput;
