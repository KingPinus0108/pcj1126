import axios from 'axios';


const url = `${process.env.REACT_APP_API_URL}`;

const codeRun = async (inputValues) => {
    return axios.post(url,inputValues);
}

const CompilerService = {
    codeRun
}

export default CompilerService;
