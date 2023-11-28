import { defineConfig } from 'vite';
import {resolve} from 'path';


export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions:{

      input: {
        main : resolve (__dirname, 'src/index.html'),
        signup : resolve (__dirname, 'src/signup.html'),
        startpage : resolve (__dirname, 'src/startpage.html'),
        quizpage : resolve (__dirname, 'src/quizpage.html'),
        quizpage2 : resolve (__dirname, 'src/quizpage2.html'),
        scorepage : resolve (__dirname, 'src/scorepage.html'),
        leaderboardpage : resolve (__dirname, 'src/leaderboardpage.html'),
       }
 
    }
      

  
  },
});

