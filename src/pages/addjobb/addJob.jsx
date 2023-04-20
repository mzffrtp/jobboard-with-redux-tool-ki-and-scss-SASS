import React, { useState } from "react";
import useSweetAlert from "../../components/hooks/useSweetAlert";
import useApi from "../../components/hooks/useApi"
import { useNavigate } from "react-router-dom";

export default function AddJob() {
    const { showSuccessAlert, showErrorAlert } = useSweetAlert();
    const api = useApi();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        id: Number(new Date().getTime()),
        position: "",
        company: "",
        location: "",
        status: "",
        type: "",
        dateApplied: new Date().toLocaleDateString(),
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!form.position || !form.company || !form.location) {
            showErrorAlert("Oppss...!", "Fields can't be left blank!")
            return
        }
        api
            .post("/jobs", form)
            .then(()=>{
                showSuccessAlert("Success","New job added succesfully!")
                navigate("/")
            })
            .catch(()=>{
                showErrorAlert("Error", "Something went wrong!")
            })
    }
    return (
        <section className="addSec">
            <h2>Add New Job</h2>
            <div className="inputs">
                <div className="inputField">
                    <label>Position</label>
                    <input type="text"
                        onChange={(e) => {
                            setForm({
                                ...form, position: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
                            })
                        }}
                    />
                </div>
                <div className="inputField">
                    <label>Company</label>
                    <input type="text"
                        onChange={(e) => {
                            setForm({
                                ...form, company: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
                            })
                        }} />
                </div>
                <div className="inputField">
                    <label>Location</label>
                    <input type="text"
                        onChange={(e) => {
                            setForm({
                                ...form, location: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
                            })
                        }} />
                </div>
                <div className="inputField">
                    <label>Status</label>
                    <select
                        onChange={(e) => {
                            setForm({
                                ...form, status: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
                            })
                        }}
                    >
                        <option value="All" hidden>All</option>
                        <option value="Interview">Interview</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div className="inputField">
                    <label>Type</label>
                    <select
                        onChange={(e) => {
                            setForm({
                                ...form, type: e.target.value
                            })
                        }}
                    >
                        <option value="All" hidden>All</option>
                        <option value="Tull time">Full time</option>
                        <option value="Part time">Part time</option>
                        <option value="Distans">Distans</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <button type="submit"
                    onClick={handleFormSubmit}
                >Add</button>
            </div>
        </section>
    )
}