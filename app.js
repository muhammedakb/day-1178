const data = [
  (data1 = {
    id: 1,
    img: "img/react.png",
    title: "react",
    course: 14,
    teacher: 3,
  }),
  (data2 = {
    id: 2,
    img: "img/javascript.png",
    title: "javascript",
    course: 37,
    teacher: 6,
  }),
  (data3 = {
    id: 3,
    img: "img/typescript.png",
    title: "typescript",
    course: 42,
    teacher: 9,
  }),
  (data4 = {
    id: 4,
    img: "img/angular.png",
    title: "angular",
    course: 14,
    teacher: 3,
  }),
  (data5 = {
    id: 5,
    img: "img/css.png",
    title: "css",
    course: 14,
    teacher: 3,
  }),
];

data.forEach(function (e) {
  const items = document.getElementById("items");
  items.innerHTML += `
    <div class="item ${e.id}">
    <img src="${e.img}" alt="" class="item-img">
    <h4>${e.title}</h4>
    <p>${e.course} courses - ${e.teacher} teachers</p>
    </div>
    `;
});
