//각필드가비어있으면버튼을눌렀을때타켓필드에일림+채워지면알림x
//비밀번호와비밀번호확인이틀리면필드에알림
//약관체크
//성별체크
//submit누르면각필드의밸류를전달(어떻게?)
//  추가기능1. js써서 필드가 다 차면 secondary에서 success로 class변경
const signupForm = document.querySelector("#signupForm");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const passwordCheckInput = document.querySelector("#passwordCheckInput");
const birthInput = document.querySelector("#birthInput");
const addressInput = document.querySelector("#addressInput");
const termsButton = document.querySelector("#termsButton");
const submitButton = document.getElementById("submitButton");
const submitButton2 = document.getElementById("submitButton2");
const pwValid = document.querySelector("#pwValid");
const idValid = document.querySelector("#idValid");
const birthValid = document.querySelector("#birthValid");
const mobileInput = document.querySelector("#mobileInput");
const nameInput = document.querySelector("#nameInput");
const emailButton = document.querySelector("#emailButton");
//id중복검사

//id길이검사
const idLen = (id) => {
  return id.value.length >= 10 && id.value.length <= 25;
};
emailInput.addEventListener("keyup", (e) => {
  if (!idLen(emailInput)) {
    idValid.innerText = "아이디는 10-25 글자 사이로 입력해주세요.";
  } else {
    idValid.innerText = "";
    beforeSubmit();
  }
});
emailInput.addEventListener("keyup", () => {
  if (idLen) {
    beforeSubmit();
  }
});

//pwd검사 //pwdCheck
const pwdLen = (pw1, pw2) => {
  return pw1.value === pw2.value;
};
passwordCheckInput.addEventListener("keyup", pwdOnchange);
function pwdOnchange() {
  if (pwdLen(passwordInput, passwordCheckInput)) {
    pwValid.innerText = "비밀번호가 일치합니다.";
    beforeSubmit();
  } else {
    pwValid.innerText = "비밀번호가 일치하지않습니다";
  }
}
passwordCheckInput.addEventListener("keyup", () => {
  if (pwdLen) {
    beforeSubmit();
  }
});

//생년월일형식
const birthCheck = (birth) => {
  return birth.value.length === 6;
};
birthInput.addEventListener("keyup", () => {
  if (birthCheck(birthInput)) {
    birthValid.innerText = "";
    beforeSubmit();
  } else {
    birthValid.innerText = "yymmdd형식으로 작성해주세요.";
  }
});
birthInput.addEventListener("keyup", () => {
  if (birthCheck) {
    beforeSubmit();
  }
});
//체크박스확인
const termsCheck = () => {
  return termsButton.checked;
};
termsButton.addEventListener("change", () => {
  if (termsCheck) {
    beforeSubmit();
  }
});

//주소유무
const addressInputCheck = () => {
  if (addressInput.value) {
    return true;
  } else return false;
};
addressInput.addEventListener("keyup", () => {
  if (addressInputCheck) {
    beforeSubmit();
  }
});

//이름유무
const nameInputCheck = () => {
  if (nameInput.value) {
    return true;
  } else return false;
};
nameInput.addEventListener("keyup", () => {
  if (nameInputCheck) {
    beforeSubmit();
  }
});

//번호유무
const mobileInputCheck = () => {
  if (mobileInput.value && typeof mobileInput.value === Number) {
    return true;
  } else return false;
};
mobileInput.addEventListener("keyup", () => {
  if (mobileInputCheck) {
    beforeSubmit();
  } else {
    alert("숫자를 적어주세요.");
  }
});

//전체칸이 다 채워져있어야 submit을 수행하는 함수
function beforeSubmit() {
  if (
    addressInput.value &&
    mobileInput.value &&
    emailInput.value &&
    passwordInput.value &&
    passwordCheckInput.value &&
    birthInput.value &&
    nameInput.value &&
    termsButton.checked &&
    idLen(emailInput) &&
    pwdLen(passwordInput, passwordCheckInput) &&
    birthCheck(birthInput)
  ) {
    submitToggle();
  } else {
    submitToggle2();
  }
}

//submit토글
function submitToggle() {
  submitButton2.style.display = "none";
  submitButton.style.display = "unset";
}

function submitToggle2() {
  submitButton2.style.display = "unset";
  submitButton.style.display = "none";
}

submitButton2.addEventListener("click", (e) => {
  // e.preventDefault();
  // alert("회원가입에 필요한 모든 필드를 채워주세요.");
});

// //버튼누르면정보를백으로뿌려주는최종함수
const submitHandler = (e) => {
  // e.preventDefault();
};

// const data = [{email:'asd',passwr},{}]
// 정보를json화하여body에담아보내는함수

const signup = (e) => {
  e.preventDefault();
  fetch("http://kdt-sw-7-team05.elicecoding.com/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      userName: nameInput.value,
      birthDay: birthInput.value,
      address: addressInput.value,
      password: passwordInput.value,
      userRole: "user",
    }),
  })
  .then((res) => res.json())
  .then((res) => {
      console.log(res.message);
      // console.log(res.body);
      alert(res.message);
      console.log("success");
      window.location.href ='http://kdt-sw-7-team05.elicecoding.com';
    })
    .catch((err) => {
      alert(err);
      console.log("err");
      console.log("실패");
    });
  };
  submitButton.addEventListener("click", signup);
// const signup = (e) => {
//   e.preventDefault(); // 폼의 기본 동작(페이지 새로고침)을 막습니다.

//   // 회원가입 정보를 객체로 생성
//   const signupData = {
//     email: emailInput.value,
//     userName: nameInput.value,
//     password: passwordInput.value,
//     birth: birthInput.value,
//     address: addressInput.value,
//     mobile: mobileInput.value
//   };
//   console.log(signupData);
//   // 로컬스토리지에 회원가입 정보 저장
//   localStorage.setItem(signupData, JSON.stringify(signupData));

//   // 서버로 데이터 전송
//   fetch("http://localhost:3000/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(signupData),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.statusCode === 200) {
//         console.log(res.body);
//         alert(res.body.message);
//         console.log("success");
//       }
//     })
//     .catch((err) => {
//       alert(err);
//       console.log('err');
//       console.log(err, "실패");
//     });
// };
//   oncomplete: function(data) {
//       // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
//       // 예제를 참고하여 다양한 활용법을 확인해 보세요.
//   }
// }).open();

function checkUsername(email) {
  return fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 400) {
        return false; // 중복된 이메일
      } else {
        return true; // 이메일이 유효함
      }
    })
    .catch((err) => {
      console.error(err);
      return false; // 에러 발생
    });
}

emailButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const isValid = await checkUsername(emailInput.value);

  if (!isValid) {
    alert("중복된 이메일입니다.");
    idValid.innerText = '가입된 이메일이 있습니다.';
  } else {
    alert("이메일 검사 통과");
    console.log("이메일 검사 통과");
    idValid.innerText = '';
  }
});