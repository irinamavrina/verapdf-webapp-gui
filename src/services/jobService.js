import { get, handleResponse, post } from './api';
const { REACT_APP_API_ROOT } = process.env;

export const getInfo = () => {
    return get(`${REACT_APP_API_ROOT}/status/job-service/info`);
};

export const getJob = id => {
    const url = `${REACT_APP_API_ROOT}/jobs/${id}`;
    return get(url);
};

export const createJob = job => {
    const url = `${REACT_APP_API_ROOT}/jobs`;
    return post(url, job);
};

const JOB = {
    id: 'uniq-id-string',
    status: 'CREATED',
    profile: '',
    tasks: [],
};

export const updateJob = job => {
    console.log('updateJob:', job.id);
    return new Promise(resolve =>
        setTimeout(
            () =>
                resolve({
                    ok: true,
                    headers: {
                        get: () => 'application/json',
                    },
                    json: () => ({ ...JOB, ...job }),
                }),
            2000
        )
    ).then(handleResponse);
    //const url = `${REACT_APP_API_ROOT}/jobs/${jobId}`;
    //return put(url, data);
};

export const executeJob = id => {
    console.log('executeJob:', id);
    return new Promise(resolve =>
        setTimeout(
            () =>
                resolve({
                    ok: true,
                    headers: {
                        get: () => 'application/json',
                    },
                    json: () => ({ ...JOB, id, status: 'PROCESSING' }),
                }),
            2000
        )
    ).then(handleResponse);
    // return new Promise(resolve =>
    //     setTimeout(
    //         () =>
    //             resolve({
    //                 ok: false,
    //                 headers: {
    //                     get: () => 'application/json',
    //                 },
    //                 json: () => ({ message: 'Validation queue is full' }),
    //             }),
    //         2000
    //     )
    // ).then(handleResponse);
    //const url = `${REACT_APP_API_ROOT}/jobs/${jobId}/execution`;
    //return post(url, data);
};
