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
        numericalability : resolve (__dirname, 'src/numericalability.html'),
        numericalability2 : resolve (__dirname, 'src/numericalability2.html'),
        numericalability3 : resolve (__dirname, 'src/numericalability3.html'),
        numericalability4 : resolve (__dirname, 'src/numericalability4.html'),
        numericalability5 : resolve (__dirname, 'src/numericalability5.html'),
        numericalability6 : resolve (__dirname, 'src/numericalability6.html'),
        numericalability7 : resolve (__dirname, 'src/numericalability7.html'),
        numericalability8 : resolve (__dirname, 'src/numericalability8.html'),
        numericalability9 : resolve (__dirname, 'src/numericalability9.html'),
        analyticalability : resolve (__dirname, 'src/analyticalability.html'),
        analyticalability2 : resolve (__dirname, 'src/analyticalability2.html'),
        analyticalability3 : resolve (__dirname, 'src/analyticalability3.html'),
        analyticalability4 : resolve (__dirname, 'src/analyticalability4.html'),
        analyticalability5 : resolve (__dirname, 'src/analyticalability5.html'),
        analyticalability6 : resolve (__dirname, 'src/analyticalability6.html'),
        analyticalability7 : resolve (__dirname, 'src/analyticalability7.html'),
        analyticalability8 : resolve (__dirname, 'src/analyticalability8.html'),
        analyticalability9 : resolve (__dirname, 'src/analyticalability9.html'),
        analyticalability10 : resolve (__dirname, 'src/analyticalability10.html'),
        verbalability : resolve (__dirname, 'src/verbalability.html'),
        verbalability2 : resolve (__dirname, 'src/verbalability2.html'),
        verbalability3 : resolve (__dirname, 'src/verbalability3.html'),
        verbalability4 : resolve (__dirname, 'src/verbalability4.html'),
        verbalability5 : resolve (__dirname, 'src/verbalability5.html'),
        verbalability6 : resolve (__dirname, 'src/verbalability6.html'),
        verbalability7 : resolve (__dirname, 'src/verbalability7.html'),
        verbalability8 : resolve (__dirname, 'src/verbalability8.html'),
        verbalability9 : resolve (__dirname, 'src/verbalability9.html'),
        verbalability10 : resolve (__dirname, 'src/verbalability10.html'),
        geninfo : resolve (__dirname, 'src/geninfo.html'),
        geninfo2 : resolve (__dirname, 'src/geninfo2.html'),
        geninfo3 : resolve (__dirname, 'src/geninfo3.html'),
        geninfo4 : resolve (__dirname, 'src/geninfo4.html'),
        geninfo5 : resolve (__dirname, 'src/geninfo5.html'),
        geninfo6 : resolve (__dirname, 'src/geninfo6.html'),
        geninfo7 : resolve (__dirname, 'src/geninfo7.html'),
        geninfo8 : resolve (__dirname, 'src/geninfo8.html'),
        geninfo9 : resolve (__dirname, 'src/geninfo9.html'),
        geninfo10 : resolve (__dirname, 'src/geninfo10.html'),
        scorepage : resolve (__dirname, 'src/scorepage.html'),
       }
 
    }
      

  
  },
});

