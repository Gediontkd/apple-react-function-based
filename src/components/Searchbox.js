import React from 'react'

function Searchbox() {
  return (
    <div><section className="searchbox">
    <form>
        <input type="text" name="searchbox" />
        <button id="submitButton" class="btn btn-primary" type="submit">
            Search
        </button>
    </form>
</section></div>
  )
}
export default Searchbox;