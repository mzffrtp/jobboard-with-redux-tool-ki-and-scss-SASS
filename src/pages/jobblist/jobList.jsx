import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../components/hooks/useApi";
import { setJobs } from "../../redux/jobSlice";
import { toast } from "react-toastify"

export default function JobbList() {
    const api = useApi();
    const dispatch = useDispatch();
    const { jobState } = useSelector(state => state);
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
            <h3 className="jobCount">{jobState.jobs.length} jobs found</h3>
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
                            }
                        </>

                    ) : (
                        jobState.jobs.map((job, id) =>
                            <div key={id}>

                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="title">
                                                    <p>{job.position}</p>
                                                    <p>{job.company}</p>
                                            </div>
                                            <div className="status">
                                                <p className={job.status}>{job.status}</p>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <div className="field">
                                            <i className="fa-solid fa-location-dot"></i>
                                                <p>{job.location}</p>
                                            </div>
                                            <div className="field">
                                            <i className="fa-regular fa-calendar"></i>
                                                <p>{job.dateApplied}</p>
                                            </div>
                                            <div className="field">
                                            <i className="fa-solid fa-briefcase"></i>
                                                <p>{job.type}</p>
                                            </div>
                                            
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