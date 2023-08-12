
export async function load({ url }) {
    let page = url.searchParams.get('page') ? url.searchParams.get('page') : 1
    let limit = url.searchParams.get('limit') ? url.searchParams.get('limit') : 3
    let search = url.searchParams.get('search') 

    const searchParam = search ? `&search=${search}` : ''

    const apiUrl = 'https://tutorial.labkita.my.id/api/posts' 
        + `?page=${page}&limit=${limit}` + searchParam

    const res = await fetch(apiUrl)
    const response = await res.json()
    return { response }
}