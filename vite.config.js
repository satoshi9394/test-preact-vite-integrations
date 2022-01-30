import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { createHtmlPlugin  } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default ({mode}) => {
  
  const integrecionConfi = {
    app1: {
      mainUrl: 'src/integration/app1/main.js',
      title: 'app1'
    },
    app2: {
      mainUrl: 'src/integration/app2/main.js',
      title: 'app2'
    }
  }

  const baseConfig = {
    plugins: [
      preact(),
      createHtmlPlugin({
        entry: integrecionConfi[mode].mainUrl,
        inject: {
          data: {
            title: integrecionConfi[mode].title,
          }
        }
      })
    ]
  }


  return defineConfig(baseConfig);
}
