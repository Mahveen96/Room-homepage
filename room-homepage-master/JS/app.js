import { data } from './pageData.js'

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu')
  const closeBtn = document.querySelector('.close')
  const navLinks = document.querySelector('.nav-links')
  const title = document.querySelector('.title')
  const content = document.querySelector('.content')
  const bg = document.querySelector('.bg')
  const btns = document.querySelectorAll('.btn')
  let currentPage = 0
  let pageLength = data.length

  const renderImg = (data) => {
    if (window.innerWidth <= 600) {
      bg.style.backgroundImage = `url(${data.imgMob})`
    } else {
      bg.style.backgroundImage = `url(${data.imgDesk})`
    }
  }

  renderImg(data[0])

  const renderPages = (arr) => {
    arr.forEach((item) => {
      if (item.page === currentPage) {
        title.innerHTML = item.title
        content.innerHTML = item.content
        renderImg(item)
      }
    })
  }

  const showPages = (page) => {
    if (page.matches('[data-right]')) {
      currentPage++
      if (currentPage > pageLength) {
        currentPage = 0
      }
    } else if (page.matches('[data-left]')) {
      currentPage--
      if (currentPage < 0) {
        currentPage = pageLength
      }
    }
    renderPages(data)
  }

  // Event Listener
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let page = e.currentTarget
      showPages(page)
    })
  })
})
