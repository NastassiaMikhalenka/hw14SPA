export default function (data) {
    let response = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    return response;
}
