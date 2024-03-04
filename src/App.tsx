import { Header } from "./components/Header/Header";
import styles from "./app.module.css";
import { Post, PostType } from "./components/Post/Post";

import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/victorSalome.png",
      name: "Victor Salome",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-22 11:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/pedrohhope.png",
      name: "Pedro Hope",
      role: "Senior developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-22 08:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
