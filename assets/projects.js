// name: Tên dự án
// field: Lĩnh vực
// type: Loại dự án
// image: Đường dẫn thư mục hình ảnh
const projects = [
    //Data project 1
    {
      name: "Bài Này Không Để Đi Diễn",
      field: "Sector",
      type: "BrandCom",
      image: [
        "./assets/img/project1/project1.png",
        "./assets/img/project1/car-1.jpg",
        "./assets/img/project1/car-2.jpg",
        "./assets/img/project1/car-3.jpg",
        "./assets/img/project1/car-4.jpg",
        "./assets/img/project1/car-5.jpg",
      ]
    },
    
    //Data project 2
    {
      name: "Chuyện Đôi Ta",
      field: "Industrial",
      type: "Digital Marketing",
      image: [
        "./assets/img/project2/project2.png",
        "./assets/img/project2/person_1.jpg",
        "./assets/img/project2/person_2.jpg",
        "./assets/img/project2/person_3.jpg",
        "./assets/img/project2/person_4.jpg",
      ]
    },
    
    //Data project 3
    {
      name: "Hai Mươi Hai (22)",
      field: "Agriculture",
      type: "BrandCom",
      image: [
        "./assets/img/project3/project3.png",
        "./assets/img/project3/car-6.jpg",
        "./assets/img/project3/car-7.jpg",
        "./assets/img/project3/car-8.jpg",
        "./assets/img/project3/car-9.jpg",
      ]
    },
    
    //Data project 4
    {
      name: "Waiting For You",
      field: "Media",
      type: "BrandCom",
      image: [
        "./assets/img/project4/project4.png",
        "./assets/img/project4/about.jpg",
        "./assets/img/project4/car-10.jpg",
        "./assets/img/project4/car-11.jpg",
        "./assets/img/project4/car-12.jpg",
      ]
    },
    
    //Data project 5
    {
      name: "Yêu Anh",
      field: "Education",
      type: "BrandCom",
      image: [
        "./assets/img/project5/project5.png",
        "./assets/img/project5/image_1.jpg",
        "./assets/img/project5/image_2.jpg",
        "./assets/img/project5/image_3.jpg",
        "./assets/img/project5/image_4.jpg",
        "./assets/img/project5/image_5.jpg",
        "./assets/img/project5/image_6.jpg",
      ]
        
    },
    
    //Data project 6
    {
      name: "Bài Tình Ca Đầu Tiên",
      field: "Finance",
      type: "Mobile App",
      image: [
        "./assets/img/project6/project6.png",
        "./assets/img/project6/image_1.jpg",
        "./assets/img/project6/image_2.jpg",
        "./assets/img/project6/image_3.jpg",
        "./assets/img/project6/image_4.jpg",
        "./assets/img/project6/image_5.jpg",
        "./assets/img/project6/image_6.jpg",
      ]
    },
    
    //Data project 7
    {
      name: "Chưa Quên Người Yêu Cũ",
      field: "Beauty & Fashion",
      type: "Mobile App",
      image: [
        "./assets/img/project7/project7.png",
        "./assets/img/project7/image_1.jpg",
        "./assets/img/project7/image_2.jpg",
        "./assets/img/project7/image_3.jpg",
        "./assets/img/project7/image_4.jpg",
        "./assets/img/project7/image_5.jpg",
        "./assets/img/project7/image_6.jpg",
      ]
    },
    
    //Data project 8
    {
      name: "Vì Mẹ Anh Bắt Chia Tay",
      field: "Hotel & Restaurant",
      type: "Website",
      image: [
        "./assets/img/project8/project8.png",
        "./assets/img/project8/image_1.jpg",
        "./assets/img/project8/image_2.jpg",
        "./assets/img/project8/image_3.jpg",
        "./assets/img/project8/image_4.jpg",
        "./assets/img/project8/image_5.jpg",
        "./assets/img/project8/image_6.jpg",
      ]
    },
    
    //Data project 9
    {
      name: "Hỏi Thăm",
      field: "Sector",
      type: "Website",
      image: [
        "./assets/img/project9/project9.png",
        "./assets/img/project9/image_1.jpg",
        "./assets/img/project9/image_2.jpg",
        "./assets/img/project9/image_3.jpg",
        "./assets/img/project9/image_4.jpg",
        "./assets/img/project9/image_5.jpg",
        "./assets/img/project9/image_6.jpg",
      ]
    },
    
    //Data project 10
    {
      name: "Mặt Mộc",
      field: "Industrial",
      type: "Website",
      image: [
        "./assets/img/project10/project10.png",
        "./assets/img/project10/image_1.jpg",
        "./assets/img/project10/image_2.jpg",
        "./assets/img/project10/image_3.jpg",
        "./assets/img/project10/image_4.jpg",
        "./assets/img/project10/image_5.jpg",
        "./assets/img/project10/image_6.jpg",
      ]
    },
    
    //Data project 11
    {
      name: "Lời Tạm Biệt Chưa Nói",
      field: "Agriculture",
      type: "Digital Marketing",
      image: [
        "./assets/img/project11/project11.png",
        "./assets/img/project11/image_1.jpg",
        "./assets/img/project11/image_2.jpg",
        "./assets/img/project11/image_3.jpg",
        "./assets/img/project11/image_4.jpg",
        "./assets/img/project11/image_5.jpg",
        "./assets/img/project11/image_6.jpg",
      ]
    },
    
    //Data project 12
    {
      name: "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
      field: "Media",
      type: "BrandCom",
      image: [
        "./assets/img/project12/project12.png",
        "./assets/img/project12/image_1.jpg",
        "./assets/img/project12/image_2.jpg",
        "./assets/img/project12/image_3.jpg",
        "./assets/img/project12/image_4.jpg",
        "./assets/img/project12/image_5.jpg",
        "./assets/img/project12/image_6.jpg",
      ]
    },
]

// PHẦN XỬ LÝ DỮ LIỆU
const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const body = $('body')
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
const popupImages = $('.popupImages');
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

    projectFilter.innerHTML = htmlsFilter;

    const htmls1F = currentProjects.map((project, index) => {
      if (index === 0) {
        return(
        `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
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
    project1F.innerHTML = htmls1F.join('');

    const htmls2F = currentProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
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
    project2F.innerHTML = htmls2F.join('');

    const htmls3F = currentProjects.map((project, index) => {
      if (index === 3 || index === 4 || index === 5) {
        return(
        `
        <div class="col-lg-4 p-0 prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
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
    project3F.innerHTML = htmls3F.join('');

    const htmls1S = currentProjects.map((project, index) => {
      if (index === 8) {
        return(
        `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
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
    project1S.innerHTML = htmls1S.join('');

    const htmls2S = currentProjects.map((project, index) => {
      if (index === 6 || index === 7) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
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
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
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
    project3S.innerHTML = htmls3S.join('');
  },

  handleEvents: function() {
    const _this = this;
    const currentProjects = _this.projects.filter(res => {
    if (_this.currentType === 'Tất cả') {
      return res
    } else {
        if (res.type === _this.currentType) {
          return res
        }
      }
    }).filter(res => {
      if (_this.currentField === 'Tất cả') {
        return res
      } else {
        if (res.field === _this.currentField) {
          return res
        }
      }
    })

    projectFilter.onclick = function (e) {
      const className = e.target.className;
      if (className.includes('type dropdown-item')) {
        _this.currentType = e.target.textContent;
        _this.render();
        _this.handleEvents();
      }
      if (className.includes('field dropdown-item')) {
        _this.currentField = e.target.textContent;
        _this.render();
        _this.handleEvents();
      }
    }
      
    nextBtn.onclick = function () {
      imgPopup.scrollTo({ top: 0, behavior: "smooth" });
      _this.currentIndex++;
      if(_this.currentIndex >= currentProjects.length) {
        _this.currentIndex = 0;
      }
      const targetPrj = currentProjects[_this.currentIndex];
      const popupName = imgPopup.children[2].children[0];
      const popupField = imgPopup.children[2].children[1];
      popupName.textContent = targetPrj.name;
      popupField.textContent = targetPrj.field;
      const prjImages = targetPrj.image;
      const htmlsImages = prjImages.map(img => {
        return (
          `<img src="${img}" alt="Popup Image">`
          )
        })
      popupImages.innerHTML = htmlsImages.join('');   
    }

    prevBtn.onclick = function () {
      imgPopup.scrollTo({top:0,behavior: "smooth"});
      _this.currentIndex--;
      if(_this.currentIndex < 0) {
        _this.currentIndex = currentProjects.length - 1;
      }
      const targetPrj = currentProjects[_this.currentIndex];
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
        const prjImages = targetPrj.image;
        const htmlsImages = prjImages.map(img => {
          return (
            `<img src="${img}" alt="Popup Image">`
            )
          })
      popupImages.innerHTML = htmlsImages.join('');
    }

    projectF.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = currentProjects[targetIndex];
        imgPopup.classList.add('opened');
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
        const prjImages = targetPrj.image;
        const htmlsImages = prjImages.map(img => {
          return (
            `<img src="${img}" alt="Popup Image">`
          )
        })
        popupImages.innerHTML = htmlsImages.join('');
        body.classList.add('ftco-overflow-hidden');
        imgPopup.scrollTo({top:0,behavior: "smooth"});
      }
    }

    projectS.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = currentProjects[targetIndex];
        imgPopup.classList.add('opened');
        const popupName = imgPopup.children[2].children[0];
        const popupField = imgPopup.children[2].children[1];
        popupName.textContent = targetPrj.name;
        popupField.textContent = targetPrj.field;
        const prjImages = targetPrj.image;
        const htmlsImages = prjImages.map(img => {
          return (
            `<img src="${img}" alt="Popup Image">`
            )
          })
        popupImages.innerHTML = htmlsImages.join('');
        body.classList.add('ftco-overflow-hidden');
        imgPopup.scrollTo({top:0,behavior: "smooth"});
      }
    }

    closeBtn.onclick = function () {
      body.classList.remove('ftco-overflow-hidden')
      const img = imgPopup.children[0];
      img.setAttribute('src', '');
      imgPopup.classList.remove('opened');
    }
  },
  
  start: function() {
    // Lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents();

    // Render playlist
    this.render();
  },
}

app.start();