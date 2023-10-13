// name: Tên dự án
// field: Lĩnh vực
// type: Loại dự án
// image: Đường dẫn thư mục hình ảnh
const projects = [
    //Data project 1
    {
      name: "Bài Này Không Để Đi Diễn",
      field: "Anh Tú Atus",
      type: "BrandCom",
      image: "./assets/img/project1.png"
    },
    //Data project 2
    {
      name: "Chuyện Đôi Ta",
      field: "Emcee L (Da LAB), Muộii",
      type: "Digital Marketing",
      image: "./assets/img/project2.png"
    },
    //Data project 3
    {
      name: "Hai Mươi Hai (22)",
      field: "Hứa Kim Tuyền, AMEE",
      type: "Website",
      image: "./assets/img/project3.png"
    },
    //Data project 4
    {
      name: "Waiting For You",
      field: "MONO, Onionn",
      type: "Website",
      image: "./assets/img/project4.png"
    },
    //Data project 5
    {
      name: "Yêu Anh",
      field: "Miu Lê",
      type: "Mobile App",
      image: "./assets/img/project5.png"
        
    },
    //Data project 6
    {
      name: "Bài Tình Ca Đầu Tiên",
      field: "Duy Khoa",
      type: "Mobile App",
      image: "./assets/img/project6.png"
    },
    //Data project 7
    {
      name: "Chưa Quên Người Yêu Cũ",
      field: "Hà Nhi",
      type: "Mobile App",
      image: "./assets/img/project7.png"
    },
    //Data project 8
    {
      name: "Vì Mẹ Anh Bắt Chia Tay",
      field: "Miu Lê, Karik, Châu Đăng Khoa",
      type: "Website",
      image: "./assets/img/project8.png"
    },
    //Data project 9
    {
      name: "Hỏi Thăm",
      field: "Vũ Cát Tường",
      type: "Website",
      image: "./assets/img/project9.png"
    },
    //Data project 10
    {
      name: "Mặt Mộc",
      field: "Phạm Nguyên Ngọc, VAnh, Ân Nhi",
      type: "Website",
      image: "./assets/img/project10.png"
    },
    //Data project 11
    {
      name: "Lời Tạm Biệt Chưa Nói",
      field: "GREY D, Orange",
      type: "Digital Marketing",
      image: "./assets/img/project11.png"
    },
    //Data project 12
    {
      name: "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
      field: "ERIK",
      type: "BrandCom",
      image: "./assets/img/project12.png"
    },
]

// PHẦN XỬ LÝ DỮ LIỆU
const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const projectFilter = $('.projectFilter')
const projectF = $('.projectF')
const projectS = $('.projectS')
const project1F = $('.project1F')
const project2F = $('.project2F')
const project3F = $('.project3F')
const project1S = $('.project1S')
const project2S = $('.project2S')
const project3S = $('.project3S')
const imgPopup = $('.img-popup');
const popupImage = $('.img-popup img');
const closeBtn = $('.close-btn');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');


const app = {
  currentIndex: 0,
  types: projects.map(res=>res.type),
  fields: projects.map(res => res.field),
  currentType: 'Tất cả',
  currentField: 'Tất cả',
  projects: projects,
  
  render: function () {
    const currentProjects = this.projects.filter(res => {
    if (this.currentType === 'Tất cả') {
      return res
    } else {
        if (res.type === this.currentType) {
          return res
        }
      }
    }).filter(res => {
      if (this.currentField === 'Tất cả') {
        return res
      } else {
        if (res.field === this.currentField) {
          return res
        }
      }
    })
    let uniqueTypes = []
    for (let i = 0; i < this.types.length; i++) {
      if (!uniqueTypes.map(type=>type).includes(this.types[i])) {
        uniqueTypes.push(this.types[i]);
      }
    }
    let uniqueFields = []
    for (let i = 0; i < this.fields.length; i++) {
      if (!uniqueFields.map(field=>field).includes(this.fields[i])) {
        uniqueFields.push(this.fields[i]);
      }
    }

    const htmlsFilter = 
        `
        <div class="d-flex justify-content-center">
          <div class="d-flex m-5">
            <div className='label'>
              <label htmlFor="" class="nav-link m-0">Dự án:</label>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.currentType}</a>
              <div class="dropdown-menu bg-light mt-2">
              <a href="#" class="type dropdown-item ${this.currentType === 'Tất cả' ? 'active' : ''}">Tất cả</a>
              ,
              ${uniqueTypes.map(type => {
                if (this.currentType===type) {
                  return "<a href='#' class='type dropdown-item active'>"+type+"</a>"
                } else {
                  return "<a href='#' class='type dropdown-item'>"+type+"</a>"
                }
              })}
              </div>
            </div>
          </div>
          <div class="d-flex m-5">
            <div className='label'>
              <label htmlFor="" class="nav-link m-0">Dự án:</label>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.currentField}</a>
              <div class="dropdown-menu bg-light mt-2">
              <a href="#" class="field dropdown-item ${this.currentField === 'Tất cả' ? 'active' : ''}">Tất cả</a>
              ,
              ${uniqueFields.map(field => {
                if (this.currentField===field) {
                  return "<a href='#' class='field dropdown-item active'>"+field+"</a>"
                } else {
                  return "<a href='#' class='field dropdown-item'>"+field+"</a>"
                }
              })}
              </div>
            </div>
          </div>
        </div>
        `

    projectFilter.innerHTML = htmlsFilter

    const htmls1F = currentProjects.map((project, index) => {
      if (index === 0) {
        return(
        `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project1F.innerHTML = htmls1F.join('')

    const htmls2F = currentProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project2F.innerHTML = htmls2F.join('')

    const htmls3F = currentProjects.map((project, index) => {
      if (index === 3 || index === 4 || index === 5) {
        return(
        `
        <div class="col-lg-4 p-0 prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project3F.innerHTML = htmls3F.join('')

    const htmls1S = currentProjects.map((project, index) => {
      if (index === 8) {
        return(
        `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project1S.innerHTML = htmls1S.join('')

    const htmls2S = currentProjects.map((project, index) => {
      if (index === 6 || index === 7) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project2S.innerHTML = htmls2S.join('')

    const htmls3S = currentProjects.map((project, index) => {
      if (index === 9 || index === 10 || index === 11) {
        return(
        `
        <div class="col-lg-4 p-0 prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.field}</p>
          </div>
          <div class="prj-icon">
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    project3S.innerHTML = htmls3S.join('')
  },

  handleEvents: function() {
    const _this = this

    projectFilter.onclick = function (e) {
      const className = e.target.className
      if (className.includes('type dropdown-item')) {
        _this.currentType = e.target.textContent
        _this.render()
      }
      if (className.includes('field dropdown-item')) {
        _this.currentField = e.target.textContent
        _this.render()
      }
    }
      
    nextBtn.onclick = function() {
      _this.currentIndex++;
      if(_this.currentIndex >= _this.projects.length) {
        _this.currentIndex = 0
      }
      const targetPrj = _this.projects[_this.currentIndex];
        const img = imgPopup.children[0];
        img.setAttribute('src', targetPrj.image);
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
    }

    prevBtn.onclick = function() {
      _this.currentIndex--;
      if(_this.currentIndex < 0) {
        _this.currentIndex = _this.projects.length - 1
      }
      const targetPrj = _this.projects[_this.currentIndex];
        const img = imgPopup.children[0];
        img.setAttribute('src', targetPrj.image);
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
    }

    projectF.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = _this.projects[targetIndex];
        const img = imgPopup.children[0];
        img.setAttribute('src', targetPrj.image);
        imgPopup.classList.add('opened');
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;

      }
    }

    projectS.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = _this.projects[targetIndex];
        const img = imgPopup.children[0];
        img.setAttribute('src', targetPrj.image);
        imgPopup.classList.add('opened');
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
      }
    }

     closeBtn.onclick = function() {
      const img = imgPopup.children[0];
      img.setAttribute('src', '');
      imgPopup.classList.remove('opened');
    }
  },
  
  start: function() {
    // Lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents()

    // Render playlist
    this.render()
  },
}

app.start()