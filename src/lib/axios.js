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
//获得数据库中的所有数据
export async function getUser() {
    const res = await axios.get('http://localhost:5000/api/getUsers')
    return res.data
}
//删除一行数据，将要删除的行的用户名传给后端
export async function deleteRow(username) {
    await axios.post('http://localhost:5000/api/deleteRow', username)
}

export async function addRow(info) {
    await axios.post('http://localhost:5000/api/addRow',info)
}

