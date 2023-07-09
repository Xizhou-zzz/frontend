import axios from 'axios'


function getData() {
    // 耗时网络操作
}

// 异步 asyncchronize

export function foo() {
    // Promise

}


export async function getVisualOneData() {
    const res = await axios.get('http://localhost:5000/api/Visualone')
    return res.data
}

export async function getVisualTwoData() {
    const res = await axios.get('http://localhost:5000/api/Visualtwo')
    return res.data
}

export async function getVisualThreeData() {
    const res = await axios.get('http://localhost:5000/api/Visualthree')
    return res.data
}