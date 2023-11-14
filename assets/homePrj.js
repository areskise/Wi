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
const BCProjects = $('.BCProjects')
const BCProject1 = $('.BCProject1')
const BCProject2 = $('.BCProject2')
const BCProject3 = $('.BCProject3')
const DMProjects = $('.DMProjects')
const DMProject1 = $('.DMProject1')
const DMProject2 = $('.DMProject2')
const DMProject3 = $('.DMProject3')
const WSProjects = $('.WSProjects')
const WSProject1 = $('.WSProject1')
const WSProject2 = $('.WSProject2')
const WSProject3 = $('.WSProject3')
const MAProjects = $('.MAProjects')
const MAProject1 = $('.MAProject1')
const MAProject2 = $('.MAProject2')
const MAProject3 = $('.MAProject3')
const imgPopup = $('.img-popup');
const popupImages = $('.popupImages');
const closeBtn = $('.close-btn');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');


const app = {
  currentIndex: 0,
  projects: projects,
  
  render: function () {
    const bcProjects = this.projects.filter(res => res.type === 'BrandCom')
    const dmProjects = this.projects.filter(res => res.type === 'Digital Marketing')
    const wsProjects = this.projects.filter(res => res.type === 'Website')
    const maProjects = this.projects.filter(res => res.type === 'Mobile App')

    const htmlsBc1 = bcProjects.map((project, index) => {
      if (index === 0) {
        return (
          `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3" style="border-radius: 12px;">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    BCProject1.innerHTML = htmlsBc1.join('');

    const htmlsBc2 = bcProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    BCProject2.innerHTML = htmlsBc2.join('');

    const htmlsBc3 = bcProjects.map((project, index) => {
      if (index === 3 || index === 4) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100 h-75" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    BCProject3.innerHTML = htmlsBc3.join('');

    const htmlsDm1 = dmProjects.map((project, index) => {
      if (index === 0) {
        return (
          `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3" style="border-radius: 12px;">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    DMProject1.innerHTML = htmlsDm1.join('');

    const htmlsDm2 = dmProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    DMProject2.innerHTML = htmlsDm2.join('');

    const htmlsDm3 = dmProjects.map((project, index) => {
      if (index === 3 || index === 4) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100 h-75" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    DMProject3.innerHTML = htmlsDm3.join('');

    const htmlsWs1 = wsProjects.map((project, index) => {
      if (index === 0) {
        return (
          `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3" style="border-radius: 12px;">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    WSProject1.innerHTML = htmlsWs1.join('');

    const htmlsWs2 = wsProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    WSProject2.innerHTML = htmlsWs2.join('');

    const htmlsWs3 = wsProjects.map((project, index) => {
      if (index === 3 || index === 4) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100 h-75" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    WSProject3.innerHTML = htmlsWs3.join('');

    const htmlsMa1 = maProjects.map((project, index) => {
      if (index === 0) {
        return (
          `
        <div class="d-flex h-100 flex-column prj-content" data-index="${index}">
          <div class="prj-img h-100 m-3" style="border-radius: 12px;">
            <img class="w-100 h-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    MAProject1.innerHTML = htmlsMa1.join('');

    const htmlsMa2 = maProjects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    MAProject2.innerHTML = htmlsMa2.join('');

    const htmlsMa3 = maProjects.map((project, index) => {
      if (index === 3 || index === 4) {
        return(
        `
        <div class="prj-content" data-index="${index}">
          <div class="prj-img m-3" style="border-radius: 12px;">
            <img class="w-100 h-75" src="${project.image[0]}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3" style="border-radius: 12px;"></div>
          <div class="prj-text">
            <h3 class="prj-name text-left" style="font-size: 24px; line-height: 24px;" >${project.name}</h3>
            <p class="prj-type text-left" style="font-size: 18px; line-height: 18px;" >${project.field}</p>
          </div>
          <div class="prj-icon" style="font-size: 36px; top: 12px;" >
            <i class="ion-md-arrow-forward"></i>
          </div>
        </div>
        `
        )
      }
    })
    MAProject3.innerHTML = htmlsMa3.join('');

  },

  handleEvents: function () {
    const _this = this;
    const bcProjects = _this.projects.filter(res => res.type === 'BrandCom')
    const dmProjects = _this.projects.filter(res => res.type === 'Digital Marketing')
    const wsProjects = _this.projects.filter(res => res.type === 'Website')
    const maProjects = _this.projects.filter(res => res.type === 'Mobile App')

    BCProjects.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = bcProjects[targetIndex];
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

    DMProjects.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = dmProjects[targetIndex];
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

    WSProjects.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = wsProjects[targetIndex];
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

    MAProjects.onclick = function (e) {
      const target = e.target.closest('.prj-content');
      if(target) {
        const targetIndex = Number(target.dataset.index);
        _this.currentIndex = targetIndex;
        const targetPrj = maProjects[targetIndex];
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