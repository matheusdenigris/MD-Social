import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import './global.css'
import styles from'./App.module.css'

// author: { avatar url: "", name: "", role or category: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheusdenigris.png",
      name: 'Matheus De Nigris',
      role: 'Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Gostaram da primeira versão da "MD Social" ?',},
      {type: 'paragraph', content: 'Deixem seu feedback no Instagram :)',},
      {type: 'link', content: 'instagram.com/matheus_denigris' },
    ],
    publishedAt: new Date('2023-07-20 23:13' )

  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/brunobrasilll.png",
      name: 'Bruno Brasil',
      role: 'Front-End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Isso aqui é mehor que o Twitter e o Threads!',},
      {type: 'paragraph', content: 'Quem concorda ??',}
    ],
    publishedAt: new Date('2023-07-17 20:17' )

  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/matheusdenigris.png",
      name: 'Matheus De Nigrs',
      role: 'Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Novas futures serão implementadas!',},
      {type: 'paragraph', content: 'página de login , criar conta com google, seção de perfil etc...',},
      {type: 'paragraph', content: 'Não sou a equipe do meta, mas farei o possível para deixar isso interessante',},
    ],
    publishedAt: new Date('2023-07-15 20:17' )

  }
]

export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
           />
          )
        })}
      </main>
    </div>
  </div>
  )
}
