import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    filteredJobs: [],
    initialized: false
}

const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.filteredJobs = action.payload;
            state.initialized = true;
        },
        filterCompany: (state, action) => {
            const filteredByCompany = state.jobs.filter((job) => {

                const selectedJobByCompany = job.company.toLowerCase();

                const queryByCompany = action.payload.toLowerCase();

                return selectedJobByCompany.includes(queryByCompany)
            })
            state.filteredJobs = filteredByCompany
        },
        filterStatus: (state, action) => {
            const filteredByStatus = state.jobs.filter((job) => job.status === action.payload);
            state.filteredJobs = filteredByStatus
        },
        handleSort: (state, action) => {
            switch (action.payload) {
                case "a-z":
                    state.filteredJobs.sort((a, b) =>
                        a.company.localeCompare(b.company))
                    break;

                case "z-a":
                    state.filteredJobs.sort((a, b) =>
                        b.company.localeCompare(a.company)
                    )
                    break;

                default:
                    break;
            }
        },
        resetFilter: (state) => {
            state.filteredJobs = state.jobs
        }
    },
});

export const { setJobs, filterCompany, filterStatus, handleSort, resetFilter } = jobSlice.actions
export default jobSlice.reducer;