import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const getWithToken = async(url: string, headers: object) => {
  try {
    const response = await api.get(url, headers)
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const postWithoutToken = async(url: string, data: object) => {
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const postWithToken = async(url: string, data: object, headers: object) => {
  try {
    const response = await api.post(url, data, headers)
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const putWithToken = async(url: string, data: object, headers: object) => {
  try {
    const response = await api.put(url, data, headers)
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const deleteWithToken = async(url: string, headers: object) => {
  try {
    await api.delete(url, headers)
  } catch (error) {
    console.log(error);
    throw error
  }
}