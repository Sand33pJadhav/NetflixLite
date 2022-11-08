import './Home.scss'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = () => {
  const cwdata = [
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Money Heist',
      genre: 'Thriller',
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1",
      thumbnail: 'https://wallpapercave.com/dwp2x/wp5993832.png'
    },
    {
        time: '2 hour 30 mins',
        ageRestricted: '+16',
        year: '2021',
        name: 'Good doctor',
        genre: 'Sci-Fi',
        trailer: 'https://www.youtube.com/embed/BIyqelfQFAo?autoplay=1',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oh-Lk7Z6auE13d231inr7RbPVObQ49g0J1ZE194Ra_82B-hsQfwGtMjW_W4yBObJZcs&usqp=CAU'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Stranger Things',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/yQEondeGvKo?autoplay=1',
      thumbnail: 'https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg'
    },
    {
      time: '2 hour 45 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Peaky Blinders',
      genre: 'Thriller',
      trailer: 'https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1',
      thumbnail: 'https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2020',
      name: 'Breaking Bad',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1',
      thumbnail: 'https://i.pinimg.com/originals/4a/41/8c/4a418c0d174cd92f2f0540f9a9cbb59b.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2012',
      name: 'Death Note',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/gvxNaSIB_WI?autoplay=1',
      thumbnail: 'https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/08/death-note-netflix-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+18',
      year: '1997',
      name: 'Kota Factory',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/aG8KWYko8VY?autoplay=1',
      thumbnail: 'https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/060821015031-610cf0cf3a018kota-factory-2-exclusive.jpeg'
    },
    {
      time: '3 hour 12 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Dark',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/cq2iTHoLrt0?autoplay=1',
      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/18094b100141869.5f02cb97058d6.png'
    },
    {
      time: '2 hour 30 mins',
      ageRestricted: '+14',
      year: '2018',
      name: 'Vampire Diaries',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/5Wn-MaO7HQA?autoplay=1',
      thumbnail: 'https://www.activenoon.com/wp-content/uploads/2021/12/Is-The-Best-Known-Series-Of-Netflix-%E2%80%98The-Vampire-Diaries-Leaving-The-Platform.jpg'
    },
    {
      time: '10 hour 12 mins',
      ageRestricted: '+18',
      year: '2013',
      name: 'Vikings',
      genre: 'Action',
      trailer: 'https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1',
      thumbnail: 'https://wallpaperaccess.com/full/782446.jpg'
    },
  ]
  const moviedata = [
    {
      time: '2 hour 45 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Peaky Blinders',
      genre: 'Thriller',
      trailer: 'https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1',
      thumbnail: 'https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2020',
      name: 'Breaking Bad',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1',
      thumbnail: 'https://i.pinimg.com/originals/4a/41/8c/4a418c0d174cd92f2f0540f9a9cbb59b.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2012',
      name: 'Death Note',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/gvxNaSIB_WI?autoplay=1',
      thumbnail: 'https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/08/death-note-netflix-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+18',
      year: '1997',
      name: 'Kota Factory',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/aG8KWYko8VY?autoplay=1',
      thumbnail: 'https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/060821015031-610cf0cf3a018kota-factory-2-exclusive.jpeg'
    },
    {
      time: '10 hour 12 mins',
      ageRestricted: '+18',
      year: '2013',
      name: 'Vikings',
      genre: 'Action',
      trailer: 'https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1',
      thumbnail: 'https://wallpaperaccess.com/full/782446.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Money Heist',
      genre: 'Thriller',
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1",
      thumbnail: 'https://wallpapercave.com/dwp2x/wp5993832.png'
    },
    {
        time: '2 hour 30 mins',
        ageRestricted: '+16',
        year: '2021',
        name: 'Good doctor',
        genre: 'Sci-Fi',
        trailer: 'https://www.youtube.com/embed/BIyqelfQFAo?autoplay=1',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oh-Lk7Z6auE13d231inr7RbPVObQ49g0J1ZE194Ra_82B-hsQfwGtMjW_W4yBObJZcs&usqp=CAU'
    },
    {
      time: '3 hour 12 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Dark',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/cq2iTHoLrt0?autoplay=1',
      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/18094b100141869.5f02cb97058d6.png'
    },
    {
      time: '2 hour 30 mins',
      ageRestricted: '+14',
      year: '2018',
      name: 'Vampire Diaries',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/5Wn-MaO7HQA?autoplay=1',
      thumbnail: 'https://www.activenoon.com/wp-content/uploads/2021/12/Is-The-Best-Known-Series-Of-Netflix-%E2%80%98The-Vampire-Diaries-Leaving-The-Platform.jpg'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Stranger Things',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/yQEondeGvKo?autoplay=1',
      thumbnail: 'https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg'
    },
  ]
  const wldata = [
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2012',
      name: 'Death Note',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/gvxNaSIB_WI?autoplay=1',
      thumbnail: 'https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/08/death-note-netflix-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+18',
      year: '1997',
      name: 'Kota Factory',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/aG8KWYko8VY?autoplay=1',
      thumbnail: 'https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/060821015031-610cf0cf3a018kota-factory-2-exclusive.jpeg'
    },
    {
      time: '3 hour 12 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Dark',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/cq2iTHoLrt0?autoplay=1',
      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/18094b100141869.5f02cb97058d6.png'
    },
    {
      time: '2 hour 30 mins',
      ageRestricted: '+14',
      year: '2018',
      name: 'Vampire Diaries',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/5Wn-MaO7HQA?autoplay=1',
      thumbnail: 'https://www.activenoon.com/wp-content/uploads/2021/12/Is-The-Best-Known-Series-Of-Netflix-%E2%80%98The-Vampire-Diaries-Leaving-The-Platform.jpg'
    },
    {
      time: '10 hour 12 mins',
      ageRestricted: '+18',
      year: '2013',
      name: 'Vikings',
      genre: 'Action',
      trailer: 'https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1',
      thumbnail: 'https://wallpaperaccess.com/full/782446.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Money Heist',
      genre: 'Thriller',
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1",
      thumbnail: 'https://wallpapercave.com/dwp2x/wp5993832.png'
    },
    {
        time: '2 hour 30 mins',
        ageRestricted: '+16',
        year: '2021',
        name: 'Good doctor',
        genre: 'Sci-Fi',
        trailer: 'https://www.youtube.com/embed/BIyqelfQFAo?autoplay=1',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oh-Lk7Z6auE13d231inr7RbPVObQ49g0J1ZE194Ra_82B-hsQfwGtMjW_W4yBObJZcs&usqp=CAU'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Stranger Things',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/yQEondeGvKo?autoplay=1',
      thumbnail: 'https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg'
    },
    {
      time: '2 hour 45 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Peaky Blinders',
      genre: 'Thriller',
      trailer: 'https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1',
      thumbnail: 'https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2020',
      name: 'Breaking Bad',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1',
      thumbnail: 'https://i.pinimg.com/originals/4a/41/8c/4a418c0d174cd92f2f0540f9a9cbb59b.jpg'
    },
  ]
  const sdata = [
    {
      time: '1 hour 30 mins',
      ageRestricted: '+18',
      year: '1997',
      name: 'Kota Factory',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/aG8KWYko8VY?autoplay=1',
      thumbnail: 'https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/060821015031-610cf0cf3a018kota-factory-2-exclusive.jpeg'
    },
    {
      time: '3 hour 12 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Dark',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/cq2iTHoLrt0?autoplay=1',
      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/18094b100141869.5f02cb97058d6.png'
    },
    {
      time: '2 hour 30 mins',
      ageRestricted: '+14',
      year: '2018',
      name: 'Vampire Diaries',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/5Wn-MaO7HQA?autoplay=1',
      thumbnail: 'https://www.activenoon.com/wp-content/uploads/2021/12/Is-The-Best-Known-Series-Of-Netflix-%E2%80%98The-Vampire-Diaries-Leaving-The-Platform.jpg'
    },
    {
      time: '10 hour 12 mins',
      ageRestricted: '+18',
      year: '2013',
      name: 'Vikings',
      genre: 'Action',
      trailer: 'https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1',
      thumbnail: 'https://wallpaperaccess.com/full/782446.jpg'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Stranger Things',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/yQEondeGvKo?autoplay=1',
      thumbnail: 'https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg'
    },
    {
      time: '2 hour 45 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Peaky Blinders',
      genre: 'Thriller',
      trailer: 'https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1',
      thumbnail: 'https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2020',
      name: 'Breaking Bad',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1',
      thumbnail: 'https://i.pinimg.com/originals/4a/41/8c/4a418c0d174cd92f2f0540f9a9cbb59b.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2012',
      name: 'Death Note',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/gvxNaSIB_WI?autoplay=1',
      thumbnail: 'https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/08/death-note-netflix-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Money Heist',
      genre: 'Thriller',
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1",
      thumbnail: 'https://wallpapercave.com/dwp2x/wp5993832.png'
    },
    {
        time: '2 hour 30 mins',
        ageRestricted: '+16',
        year: '2021',
        name: 'Good doctor',
        genre: 'Sci-Fi',
        trailer: 'https://www.youtube.com/embed/BIyqelfQFAo?autoplay=1',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oh-Lk7Z6auE13d231inr7RbPVObQ49g0J1ZE194Ra_82B-hsQfwGtMjW_W4yBObJZcs&usqp=CAU'
    },
  ]
  const pdata = [
    
    
    {
      time: '2 hour 30 mins',
      ageRestricted: '+14',
      year: '2018',
      name: 'Vampire Diaries',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/5Wn-MaO7HQA?autoplay=1',
      thumbnail: 'https://www.activenoon.com/wp-content/uploads/2021/12/Is-The-Best-Known-Series-Of-Netflix-%E2%80%98The-Vampire-Diaries-Leaving-The-Platform.jpg'
    },
    {
      time: '10 hour 12 mins',
      ageRestricted: '+18',
      year: '2013',
      name: 'Vikings',
      genre: 'Action',
      trailer: 'https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1',
      thumbnail: 'https://wallpaperaccess.com/full/782446.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Money Heist',
      genre: 'Thriller',
      trailer: "https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1",
      thumbnail: 'https://wallpapercave.com/dwp2x/wp5993832.png'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2012',
      name: 'Death Note',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/gvxNaSIB_WI?autoplay=1',
      thumbnail: 'https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/08/death-note-netflix-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+18',
      year: '1997',
      name: 'Kota Factory',
      genre: 'Drama',
      trailer: 'https://www.youtube.com/embed/aG8KWYko8VY?autoplay=1',
      thumbnail: 'https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/060821015031-610cf0cf3a018kota-factory-2-exclusive.jpeg'
    },
    {
      time: '3 hour 12 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Dark',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/cq2iTHoLrt0?autoplay=1',
      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/18094b100141869.5f02cb97058d6.png'
    },
    {
        time: '2 hour 30 mins',
        ageRestricted: '+16',
        year: '2021',
        name: 'Good doctor',
        genre: 'Sci-Fi',
        trailer: 'https://www.youtube.com/embed/BIyqelfQFAo?autoplay=1',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oh-Lk7Z6auE13d231inr7RbPVObQ49g0J1ZE194Ra_82B-hsQfwGtMjW_W4yBObJZcs&usqp=CAU'
    },
    {
      time: '1 hour 30 mins',
      ageRestricted: '+16',
      year: '2020',
      name: 'Stranger Things',
      genre: 'Horror',
      trailer: 'https://www.youtube.com/embed/yQEondeGvKo?autoplay=1',
      thumbnail: 'https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg'
    },
    {
      time: '2 hour 45 mins',
      ageRestricted: '+18',
      year: '2021',
      name: 'Peaky Blinders',
      genre: 'Thriller',
      trailer: 'https://www.youtube.com/embed/Ruyl8_PT_y8?autoplay=1',
      thumbnail: 'https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg'
    },
    {
      time: '2 hour 12 mins',
      ageRestricted: '+18',
      year: '2020',
      name: 'Breaking Bad',
      genre: 'Sci-Fi',
      trailer: 'https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1',
      thumbnail: 'https://i.pinimg.com/originals/4a/41/8c/4a418c0d174cd92f2f0540f9a9cbb59b.jpg'
    },
  ]
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        {/* <Featured type="serials"/> */}
        <List type="Continue watching" id="cw" data={cwdata}/>
        <List type="Movies" id="mm" data={moviedata}/>
        <List type="TV Series" id="ss" data={sdata}/>
        <List type="Popular" id="pp" data={pdata}/>
        <List type="Watch List" id="wl" data={wldata}/>
    </div>
  )
}

export default Home;
