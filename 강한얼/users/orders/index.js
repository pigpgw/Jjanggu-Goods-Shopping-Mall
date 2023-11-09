fetch("./Data.json")
  .then((res) => 
   res.json()
  )
  .then((res) => {
    order = res.datas;
    order.forEach((data, index) => {
      const itemImg = document.getElementById("itemImg");
      const table = document.createElement("tr");
      const classNames = [
        "table-primary",
        "table-success",
        "table-warning",
        "table-danger",
        "table-info",
      ];
      const currentClass = classNames[index % 5];
      const row1 = document.createElement("td");
      const row2 = document.createElement("td");
      const row3 = document.createElement("td");
      table.className = currentClass;

      table.appendChild(row1);
      table.appendChild(row2);
      table.appendChild(row3);
      itemImg.appendChild(table);
      row1.textContent = data.date;
      row2.textContent = data.item;
      row3.textContent = data.status;
    });
  });

  //리스트받아오기...어떻게..
//주문갯수만큼 테이블 생성 어떻게
//페이지네이션하기

//디비에서 아이디와 일치하는 회원의 정보를 받고
//마이페이지의 각 필드에 뿌린다?
// const dummyData = [

//   {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구휴지 맹구양말 훈이와사비",
//     status: "배송 중",
//   },
//   {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "철수글러브",
//     status: "배송 중",
//   },
//   {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "유리인형",
//     status: "배송 중",
//   },
//   {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "액션가면변기",
//     status: "배송 중",
//   },
//   {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구아빠양말",
//     status: "배송 중",
//   },  {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구아빠양말",
//     status: "배송 중",
//   },  {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구아빠양말",
//     status: "배송 중",
//   },  {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구아빠양말",
//     status: "배송 중",
//   }, {
//     date: "2023/08/23",
//     name: "rkdgksdjf@naver.com",
//     item: "짱구아빠양말짱구아빠양말",
//     status: "배송 중",
//   },
// ];
// const itemImg = document.getElementById("itemImg");
// dummyData.forEach((data, index) => {
//   const table = document.createElement("tr");
//   const classNames = ["table-primary", "table-success", "table-warning", "table-danger", "table-info"];
//   const currentClass = classNames[index % 5];
//   const row1 =document.createElement("td")
//   const row2 =document.createElement("td")
//   const row3 =document.createElement("td")
//   table.className = currentClass

//   table.appendChild(row1);
//   table.appendChild(row2);
//   table.appendChild(row3);
//   itemImg.appendChild(table);
//   row1.textContent = data.date;
//   row2.textContent = data.item
//   row3.textContent = data.status
// });


// const itemImg = document.getElementById("itemImg");
// Data.forEach((data) => {
//   itemImg.innerHTML += `
//     <tr class="table-primary">
//       <td>${data.date}</td>
//       <td>${data.item}</td>
//       <td>${data.status}</td>
//     </tr>
//     <tr class="table-success">
//       <td>${data.date}</td>
//       <td>${data.item}</td>
//       <td>${data.status}</td>
//     </tr>
//     <tr class="table-warning">
//       <td>${data.date}</td>

//       <td>${data.item}</td>
//       <td>${data.status}</td>
//     </tr>
//     <tr class="table-danger">
//       <td>${data.date}</td>
//       <td>${data.item}</td>
//       <td>${data.status}</td>
//     </tr>
//     <tr class="table-info">
//       <td>${data.date}</td>
//       <td>${data.item}</td>
//       <td>${data.status}</td>
//     </tr>
//   `;
// });
// Data.forEach(item,no => {
//   array.forEach(table,idx => {
//     itemImg.innerHTML = table
//   });
// });

// for (let i = 0; 0 < Data.length; i++) {
//   table[i].innerHTML = `<td>${Data[i].date}</td>
//   <td>${Data[i].item}</td>
//   <td>${Data[i].status}</td>`;
// }

// const table = [
//   `<tr class="table-primary">${}</tr>`,
//   `<tr class="table-success">${}</tr>`,
//   `<tr class="table-warning">${}</tr>`,
//   `<tr class="table-danger">${}</tr>`,
//   `<tr class="table-info">${}</tr>`,
// ];

// for (let i = 0; 0 < Data.length; i++) {
//   table[i]
// }

