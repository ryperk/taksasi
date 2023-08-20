import axios from 'axios';
const host = 'https://apidev.momotor.id/';

/**
 * Request GET
 */
export async function getRequest(urlPath, args) {
  try {
    const response = await axios.get(`${host}/${urlPath}`, args )
    return response.data.data
  } catch (error) {
    return error
  }
}

/**
 * Request POST
 */
export async function postRequest(urlPath, args) {
  try {
    const response = await axios.post(`${host}/${urlPath}`, args )
    return response.data.data
  } catch (error) {
    console.log(error.data)
    return error
  }
}