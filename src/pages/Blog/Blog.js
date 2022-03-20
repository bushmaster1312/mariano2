import React from 'react'
import "./Blog.css"
import Banner from '../../assets/img/banner_simpsons.jpg'
import ReactPlayer from 'react-player'
import Video1 from '../../assets/video/video1.mp4'
import Video2 from '../../assets/video/video1.mp4'
import VideoPlayer from 'react-video-js-player'



const Blog = () => {
  const videoSrc = Video1

  const poster =
    "https://th.bing.com/th/id/R.d01af2325c49673843abc480d6911ee4?rik=a7VJ7MnmGWx%2fhA&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20090916160034%2flossimpson%2fes%2fimages%2fc%2fc7%2fBart_Hugo_en_la_serie.png&ehk=5OanE6HLT73YdOrfH65Zwfpjj4vEiXVHt6EvvL%2by0g0%3d&risl=&pid=ImgRaw&r=0"

  const videoSrc2 = Video2
  return (
    <div className='contorno  '>
      <div className='mt-5 '>
        <img src={Banner} className=" banner" alt="banner" />
      </div>

      <div className='container cont2 mt-3'>
        <div>
          <div className='tituloBlog'>
            <h2 className='titulo'>Episodio "especial noche de brujas VII " , Octubre 27,1997</h2>
          </div>

          <div className='container mt-5'>
            <div className='video'>
              <VideoPlayer src={videoSrc} poster={poster} width="1080" heigth="720" />
            </div>
          </div>
          <div className='description'>
            <p>
              Treehouse of Horror VII, llamado La casa-árbol
              del terror VII en España y La casita del horror
              VII en Hispanoamérica, es el séptimo especial
              de terror y el primer capítulo perteneciente
              a la octava temporada de la serie animada Los Simpson,
              estrenado originalmente el 27 de octubre de 1996.
              En el séptimo episodio Especial de Halloween anual,
              Bart descubre a su gemelo perdido,
              Lisa crea una colonia de pequeños seres similares a los humanos
              y Kang y Kodos se hacen pasar por Bill Clinton y Bob Dole
              para ganar las elecciones de 1996 de Estados Unidos.
              Fue escrito por Ken Keeler, Dan Greaney y David S. Cohen
              y dirigido por Mike B. Anderson. Phil Hartman hizo la voz
              de Clinton.
            </p>
          </div>
        </div>

        <hr></hr>
        <div>
          <div className='tituloBlog'>
            <h2 className='titulo'>Episodio "Lucha educativa". Abril 16, 1995</h2>
          </div>

          <div className='container mt-5'>
            <div className='video'>
            <iframe width="1080" height="720" frameborder="0" src="https://mega.nz/embed/VdQUDZ4b#Cm0rwQyC_c3pN_c20qgJzwKxkfihzdzRagSRG_d4kbM" allowfullscreen ></iframe>
            </div>
          </div>
          <div className='description'>
            <p>
              The PTA Disbands, llamado Disolución del Consejo Escolar en España y Lucha educativa en Hispanoamérica, es un capítulo perteneciente a la sexta temporada de la serie animada Los Simpson, emitido originalmente el 16 de abril de 1995. El episodio fue escrito por Jennifer Crittenden y dirigido por Swinton O. Scott III.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Blog