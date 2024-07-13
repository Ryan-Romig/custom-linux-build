import TextInput from "./TextInput";
const SearchInput = ({filterKey, handleChange, placeholder, value}) => {
    
const style = {
    boxShadow: '2px 4px 10px rgba(10, 10, 10, 0.5)',
    borderRadius: '20px',
    height: '60px',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '1pt',
    maxWidth:'200px'
  }


    return <TextInput name={filterKey} value={value} handleChange={handleChange} placeholder={placeholder ? placeholder : "Search"} overrideStyle={style}/>
}
export default SearchInput;