let btnBack = document.getElementById('back');
btnBack.addEventListener('click', function () {
    history.back();
});
let favorites = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let divUser = document.createElement('div');
    divUser.innerText = `name: ${favorite.name}, age: ${favorite.age}, status: ${favorite.status}`;
    document.body.append(divUser);
}
let btnClear = document.createElement('button');
btnClear.innerText = 'clear';
btnClear.addEventListener('click', function () {
    localStorage.clear(favorites);
    location.reload();
});
document.body.append(btnClear)