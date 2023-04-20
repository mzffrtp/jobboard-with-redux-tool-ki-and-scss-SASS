import { useRef } from "react";
import { useDispatch } from "react-redux"
import { filterCompany, filterStatus, handleSort, resetFilter } from "../../redux/jobSlice";


export default function Filter() {
    const dispatch = useDispatch();
    const companyInput = useRef(null)
    return (
        <section className="filterSec addSec">
            <h2>Search</h2>
            <div className="inputs">
                <div className="inputField">
                    <label>Company: </label>
                    <input type="text"
                    ref={companyInput}
                    onChange={(e)=>{
                        dispatch(filterCompany(e.target.value));
                        setTimeout(() => {
                            companyInput.current.value = '';
                          }, 10001);
                    }}
                    />
                </div>
                <div className="inputField">
                    <label> Status : </label>
                    <select
                    onChange={(e)=>{
                        dispatch(filterStatus(e.target.value))
                    }}
                    >
                        <option value="All" hidden>All</option>
                        <option value="Interview">Interview</option>
                        <option value="Closed">Closed</option>
                        <option value="Open">Open</option>
                    </select>
                </div>
                <div className="inputField">
                    <label>Sort by: </label>
                    <select
                    onChange={(e)=>{
                        dispatch(handleSort(e.target.value))
                    }}
                    >
                        <option value="Sort" hidden>Sort </option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
                <button onClick={()=>{
                    dispatch(resetFilter())
                }}>Clear</button>
            </div>
        </section>
    )
}