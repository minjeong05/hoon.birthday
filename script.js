// form 제출 시 생일과 이름을 확인하는 함수
document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출을 막고 자바스크립트로 처리

    // 입력한 이름과 생일 값 가져오기
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;

    // 생일이 0929일 경우 생일이 맞을 때 페이지로, 아니면 생일이 아닐 때 페이지로 이동
    if (birthday === "0929") {
        window.location.href = `생일이 맞을 때.html?name=${name}`;
    } else {
        window.location.href = "생일이 아닐때.html";
    }
});

// URL에서 이름을 가져와서 표시하는 함수 (생일이 맞을 때.html에서 사용)
function displayUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        document.getElementById('nameArea').textContent = `${name}님,`;
    }
}
