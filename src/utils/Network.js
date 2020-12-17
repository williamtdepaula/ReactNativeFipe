import { SERVER } from '../utils/Constants'
import axios from 'axios'

const request = axios.create({
    baseURL: SERVER,
    timeout: 30000,
})

async function getBrands() {
    try {
        const res = await request.get('/api/v1/carros/marcas')

        return res.data
    } catch (e) {
        throw Error()
    }
}

async function getModels(brandCode) {
    try {
        const res = await request.get(`/api/v1/carros/marcas/${brandCode}/modelos`)

        return res.data.modelos
    } catch (e) {
        throw Error()
    }
}

async function getYears(brandCode, modelCode) {
    try {
        const res = await request.get(`/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`)

        return res.data
    } catch (e) {
        throw Error()
    }
}

async function getVehicle(brandCode, modelCode, yearCode) {
    try {
        const res = await request.get(`/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`)

        return res.data
    } catch (e) {
        throw Error()
    }
}


export {
    getBrands,
    getModels,
    getYears,
    getVehicle,
}