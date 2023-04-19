import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../components/hooks/useApi";
import { setJobs } from "../../redux/jobSlice";
import { ToastContainer, toast } from "react-toastify"

export default function JobbList() {
    const api = useApi();
    const dispatch = useDispatch();
    const {jobState} = useSelector(state => state);
    console.log(jobState);

    useEffect(() => {
        api
            .get("jobs")
            .then((res) => {
                dispatch(setJobs(res.data))
            })
            .catch((err) => {
                console.log(err);
                toast.error('Server error, please try agin later!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            })
    }, [])
    return (
       <>
       <h3>{jobState.jobs.length} jobs found</h3>
       <section className="listSection">
            {
                !jobState.initialized ? (
                    <>
                    <p>Loading ...</p>
                    {
                        toast.info('Loading your jobs!', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            })
                    }</>

                ) : (
                   jobState.jobs.map((job,id)=>
                   <div key={id}>
                    <div className="jobCard">
                        <div className="head">
                            <div className="letter">
                                <p>{job.company[0]}</p>
                            </div>
                            <div>
                                <p>{job.position}</p>
                                <p>{job.company}</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="field">
                                <img alt=""/>
                                <p>{job.location}</p>
                            </div>
                            <div className="field">
                                <img alt=""/>
                                <p>{job.dateApplied}</p>
                            </div>
                            <div className="field">
                                <img alt=""/>
                                <p>{job.type}</p>

                            </div>
                            <div className="field">
                                <img alt=""/>
                            </div>
                        </div>
                    </div>
                   </div>)
                )
            }
       </section>
       </>
    )
}