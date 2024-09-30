const enable = false;
const text = 'My Button';
const size = 50;
const placeholder = 'Please input a value...'
const App = () => {
    return(
        <section>
            <button disabled={!enable}>{text}</button>
            <input placeholder={placeholder} size={size}></input>
        </section>
    )
}
export default App;