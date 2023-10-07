// name: Tên dự án
// field: Lĩnh vực
// type: Loại dự án
// image: Đường dẫn thư mục hình ảnh

const projects = [
    //Data project 1
    {
      name: "Bài Này Không Để Đi Diễn",
      field: "Anh Tú Atus",
      type: "Anh Tú Atus",
      image: "./assets/img/project1.png"
    },
    //Data project 2
    {
      name: "Chuyện Đôi Ta",
      field: "Emcee L (Da LAB), Muộii",
      type: "Emcee L (Da LAB), Muộii",
      image: "./assets/img/project2.png"
    },
    //Data project 3
    {
      name: "Hai Mươi Hai (22)",
      field: "Hứa Kim Tuyền, AMEE",
      type: "Hứa Kim Tuyền, AMEE",
      image: "./assets/img/project3.png"
    },
    //Data project 4
    {
      name: "Waiting For You",
      field: "MONO, Onionn",
      type: "MONO, Onionn",
      image: "./assets/img/project4.png"
    },
    //Data project 5
    {
      name: "Yêu Anh",
      field: "Miu Lê",
      type: "Miu Lê",
      image: "./assets/img/project5.png"
        
    },
    //Data project 6
    {
      name: "Bài Tình Ca Đầu Tiên",
      field: "Duy Khoa",
      type: "Duy Khoa",
      image: "./assets/img/project6.png"
    },
    //Data project 7
    {
      name: "Chưa Quên Người Yêu Cũ",
      field: "Hà Nhi",
      type: "Hà Nhi",
      image: "./assets/img/project7.png"
    },
    //Data project 8
    {
      name: "Vì Mẹ Anh Bắt Chia Tay",
      field: "Miu Lê, Karik, Châu Đăng Khoa",
      type: "Miu Lê, Karik, Châu Đăng Khoa",
      image: "./assets/img/project8.png"
    },
    //Data project 9
    {
      name: "Hỏi Thăm",
      field: "Vũ Cát Tường",
      type: "Vũ Cát Tường",
      image: "./assets/img/project9.png"
    },
    //Data project 10
    {
      name: "Mặt Mộc",
      field: "Phạm Nguyên Ngọc, VAnh, Ân Nhi",
      type: "Phạm Nguyên Ngọc, VAnh, Ân Nhi",
      image: "./assets/img/project10.png"
    },
    //Data project 11
    {
      name: "Lời Tạm Biệt Chưa Nói",
      field: "GREY D, Orange",
      type: "GREY D, Orange",
      image: "./assets/img/project11.png"
    },
    //Data project 12
    {
      name: "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
      field: "ERIK",
      type: "ERIK",
      image: "./assets/img/project12.png"
    },
]

// PHẦN XỬ LÝ DỮ LIỆU
const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const player = $('.player')
const project1F = $('.project1F')
const project2F = $('.project2F')
const project3F = $('.project3F')
const project1S = $('.project1S')
const project2S = $('.project2S')
const project3S = $('.project3S')
const cd = $('.cd')
const heading = $('header h2')
const singer = $('header p')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')

const app = {
  currentIndex: 0,
  isPlaying: false,
  isTimeupdate: true,
  isRandom: false,
  isRepeat: false,

  projects: projects,
  
  render: function() {
    const htmls1F = this.projects.map((project, index) => {
      if (index === 0) {
        return(
        `
        <div href="#" class="d-flex h-100 flex-column prj-content">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image}" alt="${project.name}">
          </div>
          <a class="card-img-overlay selected m-3"></a>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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

    const htmls2F = this.projects.map((project, index) => {
      if (index === 1 || index === 2) {
        return(
        `
        <div class="prj-content">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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

    const htmls3F = this.projects.map((project, index) => {
      if (index === 3 || index === 4 || index === 5) {
        return(
        `
        <div class="col-lg-4 p-0 prj-content">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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

    const htmls1S = this.projects.map((project, index) => {
      if (index === 8) {
        return(
        `
        <div class="d-flex h-100 flex-column prj-content">
          <div class="prj-img h-100 m-3">
            <img class="w-100 h-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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

    const htmls2S = this.projects.map((project, index) => {
      if (index === 6 || index === 7) {
        return(
        `
        <div class="prj-content">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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

    const htmls3S = this.projects.map((project, index) => {
      if (index === 9 || index === 10 || index === 11) {
        return(
        `
        <div class="col-lg-4 p-0 prj-content">
          <div class="prj-img m-3">
            <img class="w-100" src="${project.image}" alt="${project.name}">
          </div>
          <div class="card-img-overlay m-3"></div>
          <div class="prj-text">
            <h3 class="prj-name">${project.name}</h3>
            <p class="prj-type">${project.type}</p>
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
    const types = projects.map(res=>res.type)
    const fields = projects.map(res=>res.field)

    // Khi nhấn nút tới bài hát
    nextBtn.onclick = function() {
      if (_this.isRandom) {
        _this.randomSong()
      }
      else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.crollToActiveSong()
    }

    // Khi nhấn nút lùi bài hát
    prevBtn.onclick = function() {
      if (_this.isRandom) {
        _this.randomSong()
      }
      else {
        _this.prevSong()
      }
      audio.play()
      _this.render()
      _this.crollToActiveSong()
    }

    // Khi bật tắt random bài hát
    randomBtn.onclick = function() {
      _this.isRandom = !_this.isRandom
      randomBtn.classList.toggle('active', _this.isRandom)
    }

    // Khi bật tắt lặp lại 1 bài hát
    repeatBtn.onclick = function() {
      _this.isRepeat = !_this.isRepeat
      repeatBtn.classList.toggle('active', _this.isRepeat)
    }

    // Xử lý next song khi audio ended
    audio.onended = function() {
      if(_this.isRepeat) {
        audio.play()
      }
      else {
        nextBtn.click()
      }
    }

    // Lắng nghe hành vi click vào playlist
    playlist.onclick = function(e) {
      const songTarget = e.target.closest('.song:not(.active)')
      const optionTarget = e.target.closest('.option')

      if(songTarget || optionTarget) {
        // Xử lý khi click vào bài hát
        if(songTarget) {
          _this.currentIndex = Number(songTarget.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          _this.crollToActiveSong()
          audio.play()
        }
      }
    }
  },
  
  start: function() {
    // Lắng nghe và xử lý các sự kiện (DOM events)
    // this.handleEvents()

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // this.loadCurrentSong()

    // Render playlist
    this.render()
  },
}

app.start()