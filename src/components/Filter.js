import "./Filter.css"
export default function Filter({onNameFilterChange, onStatusFilterChange}) {
    function handleOnSubmitName(event) {
        event.preventDefault();
        const filterName = event.target.nameinput.value;
        onNameFilterChange(filterName);
    }
    function handleOnStatus(event) {
        event.preventDefault();
        const filterStatus = event.target.value;
        onStatusFilterChange(filterStatus)
    }

    return (
        <div className="Search">
        <form className="Form" onSubmit={handleOnSubmitName}>
            <div className="Name"> 
            <label className="LabelName"> Name: </label>
            <input id="nameinput" name="nameinput" type="search" placeholder="Who are you looking for?" />
            <button type="submit" className="filterButton"> Let's have a look!</button>
            </div> 
            <div className="Status"> 
            <label htmlFor="status"> Status: </label>
            <select onClick={handleOnStatus} name="status">
                <option value="all"> All</option>
                <option value="Alive"> Alive</option>
                <option value="Dead"> Dead</option>
                <option value="unknown"> unknown</option>
            </select>
            </div>
        </form>
       </div>
    )
}