const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const player = $('.player')
const playlist = $('.playlist')
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

  songs: [
    {
      name: "Bài Này Không Để Đi Diễn",
      field: "Anh Tú Atus",
      image: "./assets/img/image1.jpg"
    },
    {
      name: "Chuyện Đôi Ta",
      field: "Emcee L (Da LAB), Muộii",
      image: "./assets/img/image2.jpg"
    },
    {
      name: "Hai Mươi Hai (22)",
      field: "Hứa Kim Tuyền, AMEE",
      image: "./assets/img/image3.jpg"
    },
    {
      name: "Waiting For You",
      field: "MONO, Onionn",
      image: "./assets/img/image4.jpg"
    },
    {
      name: "Yêu Anh",
      field: "Miu Lê",
      image: "./assets/img/image5.jpg"
        
    },
    {
      name: "Bài Tình Ca Đầu Tiên",
      field: "Duy Khoa",
      image: "./assets/img/image6.jpg"
    },
    {
      name: "Chưa Quên Người Yêu Cũ",
      field: "Hà Nhi",
      image: "./assets/img/image7.jpg"
    },
    {
      name: "Vì Mẹ Anh Bắt Chia Tay",
      field: "Miu Lê, Karik, Châu Đăng Khoa",
      image: "./assets/img/image8.jpg"
    },
    {
      name: "Hỏi Thăm",
      field: "Vũ Cát Tường",
      image: "./assets/img/image9.jpg"
    },
    {
      name: "Mặt Mộc",
      field: "Phạm Nguyên Ngọc, VAnh, Ân Nhi",
      image: "./assets/img/image10.jpg"
    },
    {
      name: "Lời Tạm Biệt Chưa Nói",
      field: "GREY D, Orange",
      image: "./assets/img/image11.jpg"
    },
    {
      name: "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
      field: "ERIK",
      image: "./assets/img/image12.jpg"
    },
],

  render: function() {
    const htmls = this.songs.map((song, index) => {
      return(
        `
        <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
          <div class="thumb" style="background-image: url('${song.image}')"></div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        `
      )
    })
    playlist.innerHTML = htmls.join('')
  },

  handleEvents: function() {
    const _this = this
    const cdWidth = cd.offsetWidth

    // Xử lý CD quay và dừng
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)'}
    ], {
      duration: 10000,
      iterations: Infinity
    })

    cdThumbAnimate.pause()


    // cdThumbAnimate.pause()

    // Xử lý phóng to thu nhỏ CD
    document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
      cd.style.opacity = newCdWidth / cdWidth
    }

    // Xử lý khi click nút play
    playBtn.onclick = function() {
      if (_this.isPlaying) {
        audio.pause()
      }
      else {
        audio.play()
      }
    }

    // Khi bài hát được play
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    // Khi bài hát được play
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }

    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function() {
      if(audio.duration && _this.isTimeupdate) {
        
        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
        progress.value = progressPercent
      }
    }

    // Xử lý khi tua bài hát
    progress.onchange = function(e) {
      audio.currentTime = e.target.value / 100 * audio.duration
    }

    // Tránh lỗi timeupdate liên tục không tua được
    const isTouchStart = 'touchstart' || 'mousedown'
    const isTouchEnd = 'touchend' || 'mouseup'

    progress.addEventListener(isTouchStart, function() {
      _this.isTimeupdate = false;
    })

    progress.addEventListener(isTouchEnd, function() {
      _this.isTimeupdate = true;
    })

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

        // Xử lý khi click vào song option
        if(optionTarget) {

        }
      }
    }
  },

  currentSong: function() {
    return this.songs[this.currentIndex]
  },

  loadCurrentSong: function() {
    heading.textContent = this.currentSong().name
    singer.textContent = this.currentSong().singer
    cdThumb.style.backgroundImage = `url('${this.currentSong().image}')`
    audio.src = this.currentSong().path
  },

  nextSong: function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },

  prevSong: function() {
    this.currentIndex--
    if(this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },

  randomSong: function() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    } while (newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },

  crollToActiveSong: function() {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }, 300)

    setTimeout(() => {
      window.scroll({
        behavior: 'smooth',
        top: 0
      })
    }, 5000)

  },
  
  start: function() {
    // Lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents()

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong()

    // Render playlist
    this.render()
  },
}

app.start()